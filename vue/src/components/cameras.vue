<template>
    <div class="me-detail">
        <m-hbar title="个人笔记"/>
        <div class="detail-title">
            个人总结
        </div>
        <p v-if="vpersonalNotes.notesContext">
          {{vpersonalNotes.notesContext}}
        </p>
        <textarea class="note-textarea"  v-else v-model="notesContext"></textarea>
        <div class="detail-title">
            图片
        </div>
        <ul class="img-list" v-if="vpersonalNotes.notesContext">
            <li class="img-list-li" v-for="i in accessoryInfo" :key="i.fileBh">
              <img :src="picUrl + i.fileBh" alt="">
            </li>
          </ul>
          <ul class="img-list" v-else>
            <li class="img-list-li" v-for="i in imglist" :key="i.fileBh">
              <img :src="i.imgUrl" alt="">
            </li>
            <li class="puload-btn" id="upload" @click="chooseImgBtn()">
              <input type="file" id="choose" accept="image/*">
               + 
            </li>
          </ul>
        <div class="button-wriper" v-if="!vpersonalNotes.notesContext"><button class="login-btn" @click="submit">提交</button></div>
    </div>
</template>

<script>
import $ from 'jquery'
import MHbar from '@/components/header'
import { FormDataShim, getBlob} from '@/compress';
 
export default {
  components: {
    MHbar
  },
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      picUrl: PIC_FILE_HOST,
      fileList: [],
      imglist: [],
      notesContext: '',
      canvas: null,
      ctx: null,
      tctx: null,
      tCanvas: null,
      vpersonalNotes: {},
      accessoryInfo: []
    }
  },
  methods: {
    chooseImgBtn() {
      var vm = this
      var filechooser = document.getElementById("choose");
      // 用于压缩图片的canvas
      vm.canvas = document.createElement("canvas");
      vm.ctx = vm.canvas.getContext('2d');
      // 瓦片canvas
      vm.tCanvas = document.createElement("canvas");
      vm.tctx = vm.tCanvas.getContext("2d");
      var maxsize = 1048576;
      filechooser.onchange = function() {
        if (!this.files.length) return;
        var files = Array.prototype.slice.call(this.files);
        if (vm.imglist.length > 9) {
          alert("最多同时只可上传9张图片");
          return;
        }
        files.forEach(function(file, i) {
          if (!/\/(?:jpeg|png|gif)/i.test(file.type)) returns;
          var reader = new FileReader();
          // 获取图片大小
          var size = file.size / 1024 > 1024 ? (~~(10 * file.size / 1024 / 1024)) / 10 + "MB" : ~~(file.size / 1024) + "KB";
          reader.onload = function() {
            var result = this.result;
            var img = new Image();
            img.src = result;
 
            //如果图片大小小于100kb，则直接上传
            if (result.length <= maxsize) {
              // vm.imglist.push(result)
              img = null;
              vm.upload(result, file.type);
              return;
            }
            // 图片加载完毕之后进行压缩，然后上传
            if (img.complete) {
              callback();
            } else {
              img.onload = callback;
            }
            function callback() {
              var data = vm.compress(img);
              vm.upload(data, file.type);
              img = null;
            }
          };
          reader.readAsDataURL(file);
        })
      }
    },
    // 使用canvas对大图片进行压缩
    compress(img) {
      const vm = this
      var initSize = img.src.length;
      var width = img.width;
      var height = img.height;
      //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      var ratio;
      if ((ratio = width * height / 4000000) > 1) {
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
      } else {
        ratio = 1;
      }
      vm.canvas.width = width;
      vm.canvas.height = height;
      // 铺底色
      vm.ctx.fillStyle = "#fff";
      vm.ctx.fillRect(0, 0, vm.canvas.width, vm.canvas.height);
      //如果图片像素大于100万则使用瓦片绘制
      var count;
      if ((count = width * height / 1000000) > 1) {
        count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
      //  计算每块瓦片的宽和高
        var nw = ~~(width / count);
        var nh = ~~(height / count);
        vm.tCanvas.width = nw;
        vm.tCanvas.height = nh;
        for (var i = 0; i < count; i++) {
          for (var j = 0; j < count; j++) {
            vm.tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
            vm.ctx.drawImage(vm.tCanvas, i * nw, j * nh, nw, nh);
          }
        }
      } else {
        vm.ctx.drawImage(img, 0, 0, width, height);
      }
      //进行最小压缩
      var ndata = vm.canvas.toDataURL('image/jpeg', 0.1);
      console.log('压缩前：' + initSize);
      console.log('压缩后：' + ndata.length);
      console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
      vm.tCanvas.width = vm.tCanvas.height = vm.canvas.width = vm.canvas.height = 0;
      return ndata;
    },
    // 图片上传，将base64的图片转成二进制对象，塞进formdata上传
    upload(basestr, type) {
      const vm = this
      var text = window.atob(basestr.split(",")[1]);
      var buffer = new Uint8Array(text.length);
      var pecent = 0, loop = null;
      for (var i = 0; i < text.length; i++) {
        buffer[i] = text.charCodeAt(i);
      }
      var blob = getBlob([buffer], type);
      var xhr = new XMLHttpRequest();
      var formdata = this.getFormData();
      formdata.append('file', blob);
      xhr.open('post', this.picUrl);
      xhr.withCredentials = true;
      xhr.send(formdata);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var jsonData = JSON.parse(xhr.responseText);
          var imagedata = jsonData || {};
          var text = imagedata.resultCode === 0 ? '上传成功' : '上传失败';
          if(imagedata.resultCode === 0) {
            vm.imglist.push({
              fileBh: imagedata.record.fileBh,
              imgUrl: vm.picUrl + imagedata.record.fileBh
            })
          } else {
            vm.$toast.message('上传失败')
          }
          console.log(text + '：' + imagedata.record.fileBh);
          clearInterval(loop);
          console.log(vm.imglist)
          //当收到该消息时上传完毕
          if (imagedata.resultCode !== 0) return;
        }
      }
    },
    /**
     * 获取formdata
     */
    getFormData() {
      var isNeedShim = ~navigator.userAgent.indexOf('Android')
          && ~navigator.vendor.indexOf('Google')
          && !~navigator.userAgent.indexOf('Chrome')
          && navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() <= 534;
      return isNeedShim ? new FormDataShim() : new FormData()
    },
    getFileList(blob) {
      var formdata = this.getFormData()
      formdata.append('file', blob)
      this.$http.post(this.picUrl, formdata, { headers: {'Content-Type': 'multipart/form-data'} }).then((res) => {
        if(res.data.resultCode === 0) {
          this.imglist.push({
            fileBh: res.data.record.fileBh,
            imgUrl: this.picUrl + res.data.record.fileBh
          })
        } else {
          this.$toast.message(res.data.msg)
        }
      })
    },
    notesAccessory(bh) {
      var list = []
      this.imglist.forEach(i => {
        list.push(i.fileBh)
      });
      var data = {
        notesBh: bh,
        fileBh: list
      }
      this.$http.post('/api/v1/notesAccessory', data).then((res) => {
        if(res.data.resultCode === 0) {
          this.$router.go(-1)
        }
      })
    },
    submit() {
      var data = {
        notesDTO: {
          notesContext: this.notesContext,
          attendeesBh: this.$route.params.id,
          notesName: ''
        }
      }
      if(!this.notesContext) {
        this.$toast.message('笔记内容不能为空')
        return false
      }
      if(!this.imglist.length) {
        this.$toast.message('笔记照片不能为空')
        return false
      }
      this.$http.post('/api/v1/notes', data).then((res) => {
        this.notesAccessory(res.data.record)
      })
    },
    getdeetail() {
      if(this.$route.params.notesBh !== 'add') {
        this.$http.get('/api/v1/notes/' + this.$route.params.notesBh).then((res) => {
          this.vpersonalNotes = res.data.record.vpersonalNotes
          this.accessoryInfo = res.data.record.accessoryInfo
        })
      }
    }
  },
  mounted() {
    this.getdeetail()
  }
}
</script>
 
<style lang="scss" scoped>
.me-detail {
  font-size: 28px;
  .detail-title {
    padding-top: 46px;
    margin-bottom: 10px;
    margin-left: 46px;
    font-weight: 600;
    font-size: 28px;
    position: relative;
    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 27px;
      background: #000;
      position: absolute;
      left: -16px;
      bottom: 3px;
    }
  }
  .note-textarea, p {
      text-align: justify;
      padding: 25px 30px;
      line-height: 36px;
      margin-bottom: 20px;
      color: #777;
      width: 100%;
      min-height: 260px;
  }
  .note-textarea {
    box-shadow: 0 0 0 0.013333rem #fa4b31 inset;
    margin: 0 auto;
    width: 92%;
    display: block;
  }
  p {
    border-bottom: 1px solid #dedede;
  }
  .button-wriper {
      width: 100%;
      text-align: center;
      margin-top: 50px;
      margin-bottom: 30px;
      bottom: 120px;
      .login-btn {
        display: block;
        width: 520px;
        height: 78px;
        color: #fff;
        margin: 67px auto 0 auto;
        border-radius: 41.2px;
        background: #fa4b31;
        letter-spacing: 20px;
    }
  }
}
li{list-style-type: none;}
    a,input{outline: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}
    #choose{
      opacity: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 1000;
      position: absolute;
      left: 0;
    }
    canvas{width: 100%;border: 1px solid #000000;}
    // #upload{display: block;margin: 10px;height: 60px;text-align: center;line-height: 60px;border: 1px solid;border-radius: 5px;cursor: pointer;}
    .touch{background-color: #ddd;}
    .img-list{
      margin: 10px 5px;
      li {
        display: inline-block;
      }
      .img-list-li {
        width: 200px;
        height: 200px; 
        background-size: 100% 100%; 
        display: inline-block;
        position: relative;
        display: inline-block;
        margin: 30px 0px 20px 30px;
        background: #fff no-repeat center;
        background-size: cover;
        img {
          width: 200px;
          height: 200px;
          margin-top: -20px; 
        }
      }
    }
 
    .puload-btn {
      text-align: center;
      line-height: 200px;
      width: 200px;
      height: 200px; 
      border: 1px solid #fa4b31;
      margin-left: 30px;
      font-size: 50px;
      color: #fa4b31;
      position: relative;
    }
</style>