webpackJsonp([3],{239:function(e,t,n){n(309);var i=n(3)(n(274),n(336),"data-v-81633598",null);e.exports=i.exports},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),a=n.n(i),s=n(13),o=n(14),r=n(87);t.default={props:{song:Object,index:Number},computed:a()({},n.i(o.a)(["playList"])),methods:{_love:function(e){this.$toast("开发中，敬请期待...")},_add:function(e){n.i(r.a)(this.playList,this.song)>-1?this.$toast("播放列表中已存在"):(this.$emit("add",e.target),this.$store.dispatch("addPlayList",this.song)),s.a.set(this.song,"menuShow",!1)},_share:function(e){this.$toast("开发中，敬请期待...")}}}},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(243),a=n.n(i),s=n(250),o=n.n(s),r=(n(44),n(13));t.default={components:{animationMenu:o.a},props:{songLists:{type:Array,default:[]},operate:{type:Boolean,default:!0}},data:function(){return{}},methods:{getDesc:function(e){return(e.ar&&e.ar[0].name)+"·"+(e.al&&e.al.name)},_play:function(e){this.$store.dispatch("selectPlaySong",e)},_showOperation:function(e){for(var t=0;t<this.songLists.length;t++)t!==e&&(this.songLists[t].menuShow=!1);this.songLists[e].menuShow=!this.songLists[e].menuShow},onAdd:function(e){this.$emit("add",e)}},watch:{songLists:function(){var e=!0,t=!1,n=void 0;try{for(var i,s=a()(this.songLists);!(e=(i=s.next()).done);e=!0){var o=i.value;r.a.set(o,"menuShow",!1)}}catch(e){t=!0,n=e}finally{try{!e&&s.return&&s.return()}finally{if(t)throw n}}}}}},243:function(e,t,n){e.exports={default:n(244),__esModule:!0}},244:function(e,t,n){n(48),n(25),e.exports=n(245)},245:function(e,t,n){var i=n(10),a=n(47);e.exports=n(4).getIterator=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return i(t.call(e))}},246:function(e,t,n){t=e.exports=n(230)(),t.push([e.i,".song-list[data-v-7eae33d0]{position:relative}.song-list .list-item[data-v-7eae33d0]{position:relative;height:1.6rem;font-size:14px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;color:#fff}.song-list .list-item .info[data-v-7eae33d0]{-ms-flex:1;flex:1;line-height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.song-list .list-item .info .song-name[data-v-7eae33d0]{color:#fff}.song-list .list-item .info .song-desc[data-v-7eae33d0]{margin-top:4px;color:hsla(0,0%,100%,.5)}.song-list .list-item .operation[data-v-7eae33d0]{width:1.33333rem;height:100%;box-sizing:border-box;padding-top:.33333rem;text-align:right}","",{version:3,sources:["/home/travis/build/ChenYFan-Tester/MagicMusic/src/components/songList.vue"],names:[],mappings:"AACA,4BACE,iBAAmB,CACpB,AACD,uCACI,kBAAmB,AACnB,cAAe,AACf,eAAgB,AAChB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,eAAgB,AAChB,UAAY,CACf,AACD,6CACM,WAAY,AACR,OAAQ,AACZ,iBAAkB,AAClB,mBAAoB,AACpB,gBAAiB,AACjB,sBAAwB,CAC7B,AACD,wDACQ,UAAY,CACnB,AACD,wDACQ,eAAgB,AAChB,wBAAgC,CACvC,AACD,kDACM,iBAAkB,AAClB,YAAa,AACb,sBAAuB,AACvB,sBAAwB,AACxB,gBAAkB,CACvB",file:"songList.vue",sourcesContent:["\n.song-list[data-v-7eae33d0] {\n  position: relative;\n}\n.song-list .list-item[data-v-7eae33d0] {\n    position: relative;\n    height: 1.6rem;\n    font-size: 14px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    cursor: pointer;\n    color: #fff;\n}\n.song-list .list-item .info[data-v-7eae33d0] {\n      -ms-flex: 1;\n          flex: 1;\n      line-height: 20px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n}\n.song-list .list-item .info .song-name[data-v-7eae33d0] {\n        color: #fff;\n}\n.song-list .list-item .info .song-desc[data-v-7eae33d0] {\n        margin-top: 4px;\n        color: rgba(255, 255, 255, 0.5);\n}\n.song-list .list-item .operation[data-v-7eae33d0] {\n      width: 1.33333rem;\n      height: 100%;\n      box-sizing: border-box;\n      padding-top: 0.33333rem;\n      text-align: right;\n}\n"],sourceRoot:""}])},247:function(e,t,n){t=e.exports=n(230)(),t.push([e.i,".menu[data-v-e6409ae4]{position:absolute;right:1.73333rem;top:.26667rem;transition:all .7s ease-in}.menu.move-enter-active .inner[data-v-e6409ae4]{transform:translateZ(0);transition-timing-function:cubic-bezier(0,.57,.44,1.97)}.menu.move-enter-active .inner-1[data-v-e6409ae4]{transition-delay:.1s}.menu.move-enter-active .inner-2[data-v-e6409ae4]{transition-delay:.2s}.menu.move-enter-active .inner-3[data-v-e6409ae4]{transition-delay:.3s}.menu.move-enter .inner[data-v-e6409ae4],.menu.move-leave-active .inner[data-v-e6409ae4]{transition-timing-function:ease-in-out;opacity:0}.menu.move-enter .inner-1[data-v-e6409ae4],.menu.move-leave-active .inner-1[data-v-e6409ae4]{transform:translate3d(.26667rem,0,0);transition-delay:.3s}.menu.move-enter .inner-2[data-v-e6409ae4],.menu.move-leave-active .inner-2[data-v-e6409ae4]{transform:translate3d(1.33333rem,0,0);transition-delay:.2s}.menu.move-enter .inner-3[data-v-e6409ae4],.menu.move-leave-active .inner-3[data-v-e6409ae4]{transform:translate3d(2.4rem,0,0);transition-delay:.1s}.menu .inner[data-v-e6409ae4]{display:inline-block;position:absolute;width:.8rem;height:.8rem;line-height:.82667rem;border-radius:50%;background:hsla(0,0%,100%,.1);text-align:center;color:#fff;cursor:pointer;z-index:100;transition:all .4s}.menu .inner-1[data-v-e6409ae4]{left:-.26667rem}.menu .inner-2[data-v-e6409ae4]{left:-1.33333rem}.menu .inner-3[data-v-e6409ae4]{left:-2.4rem}","",{version:3,sources:["/home/travis/build/ChenYFan-Tester/MagicMusic/src/components/animationMenu.vue"],names:[],mappings:"AACA,uBACE,kBAAmB,AACnB,iBAAkB,AAClB,cAAgB,AAChB,0BAA6B,CAC9B,AACD,gDACI,wBAAgC,AAChC,uDAA8D,CACjE,AACD,kDACI,oBAAuB,CAC1B,AACD,kDACI,oBAAuB,CAC1B,AACD,kDACI,oBAAuB,CAC1B,AACD,yFACI,uCAAwC,AACxC,SAAW,CACd,AACD,6FACI,qCAAyC,AACzC,oBAAuB,CAC1B,AACD,6FACI,sCAAyC,AACzC,oBAAuB,CAC1B,AACD,6FACI,kCAAqC,AACrC,oBAAuB,CAC1B,AACD,8BACI,qBAAsB,AACtB,kBAAmB,AACnB,YAAc,AACd,aAAe,AACf,sBAAwB,AACxB,kBAAmB,AACnB,8BAAqC,AACrC,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,YAAa,AACb,kBAAqB,CACxB,AACD,gCACI,eAAkB,CACrB,AACD,gCACI,gBAAkB,CACrB,AACD,gCACI,YAAc,CACjB",file:"animationMenu.vue",sourcesContent:["\n.menu[data-v-e6409ae4] {\n  position: absolute;\n  right: 1.73333rem;\n  top: 0.26667rem;\n  transition: all 0.7s ease-in;\n}\n.menu.move-enter-active .inner[data-v-e6409ae4] {\n    transform: translate3d(0, 0, 0);\n    transition-timing-function: cubic-bezier(0, 0.57, 0.44, 1.97);\n}\n.menu.move-enter-active .inner-1[data-v-e6409ae4] {\n    transition-delay: 0.1s;\n}\n.menu.move-enter-active .inner-2[data-v-e6409ae4] {\n    transition-delay: 0.2s;\n}\n.menu.move-enter-active .inner-3[data-v-e6409ae4] {\n    transition-delay: 0.3s;\n}\n.menu.move-enter .inner[data-v-e6409ae4], .menu.move-leave-active .inner[data-v-e6409ae4] {\n    transition-timing-function: ease-in-out;\n    opacity: 0;\n}\n.menu.move-enter .inner-1[data-v-e6409ae4], .menu.move-leave-active .inner-1[data-v-e6409ae4] {\n    transform: translate3d(0.26667rem, 0, 0);\n    transition-delay: 0.3s;\n}\n.menu.move-enter .inner-2[data-v-e6409ae4], .menu.move-leave-active .inner-2[data-v-e6409ae4] {\n    transform: translate3d(1.33333rem, 0, 0);\n    transition-delay: 0.2s;\n}\n.menu.move-enter .inner-3[data-v-e6409ae4], .menu.move-leave-active .inner-3[data-v-e6409ae4] {\n    transform: translate3d(2.4rem, 0, 0);\n    transition-delay: 0.1s;\n}\n.menu .inner[data-v-e6409ae4] {\n    display: inline-block;\n    position: absolute;\n    width: 0.8rem;\n    height: 0.8rem;\n    line-height: 0.82667rem;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.1);\n    text-align: center;\n    color: #fff;\n    cursor: pointer;\n    z-index: 100;\n    transition: all 0.4s;\n}\n.menu .inner-1[data-v-e6409ae4] {\n    left: -0.26667rem;\n}\n.menu .inner-2[data-v-e6409ae4] {\n    left: -1.33333rem;\n}\n.menu .inner-3[data-v-e6409ae4] {\n    left: -2.4rem;\n}\n"],sourceRoot:""}])},248:function(e,t,n){var i=n(246);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(231)("49ce3f94",i,!0)},249:function(e,t,n){var i=n(247);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(231)("611ecfae",i,!0)},250:function(e,t,n){n(249);var i=n(3)(n(241),n(253),"data-v-e6409ae4",null);e.exports=i.exports},251:function(e,t,n){n(248);var i=n(3)(n(242),n(252),"data-v-7eae33d0",null);e.exports=i.exports},252:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"song-list"},e._l(e.songLists,function(t,i){return n("div",{key:i,staticClass:"list-item"},[n("div",{staticClass:"info",on:{click:function(n){return e._play(t)}}},[n("div",{staticClass:"song-name"},[e._v("\n        "+e._s(t.name)+"\n      ")]),e._v(" "),n("div",{staticClass:"song-desc"},[e._v(e._s(e.getDesc(t)))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.operate,expression:"operate"}],staticClass:"operation",on:{click:function(t){return e._showOperation(i)}}},[n("i",{staticClass:"icon"},[e._v("")])]),e._v(" "),n("animation-menu",{attrs:{song:t,index:i},on:{add:e.onAdd}})],1)}),0)},staticRenderFns:[]}},253:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"move"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.song.menuShow,expression:"song.menuShow"}],staticClass:"menu"},[n("div",{staticClass:"inner inner-1",on:{click:function(t){return t.stopPropagation(),e._add(t)}}},[n("i",{staticClass:"icon"},[e._v("")])]),e._v(" "),n("div",{staticClass:"inner inner-2",on:{click:function(t){return t.stopPropagation(),e._share(e.index)}}},[n("i",{staticClass:"icon"},[e._v("")])]),e._v(" "),n("div",{staticClass:"inner inner-3",on:{click:function(t){return t.stopPropagation(),e._love(e.index)}}},[n("i",{staticClass:"icon"},[e._v("")])])])])},staticRenderFns:[]}},254:function(e,t,n){"use strict";function i(){for(var e=[],t=0;t<m;t++)e.push({show:!1});return e}Object.defineProperty(t,"__esModule",{value:!0});var a=n(45),s=n.n(a),o=n(251),r=n.n(o),A=n(86),l=n(46),d=n.i(l.a)("transform"),c=n.i(l.a)("backdrop-filter"),m=5;t.default={mixins:[A.b],components:{"v-scroll":s.a,"v-song-list":r.a},props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0,balls:i()}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0,this.dropBalls=[]},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=46-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:{handlePlaylist:function(e){var t=e.length>0?"1.5rem":"";this.$refs.list.$el.style.bottom=t,this.$refs.list.refresh()},scroll:function(e){this.scrollY=e.y},back:function(){this.$router.back()},playAll:function(){this.$store.dispatch("playAllList",this.songs)},onAddSong:function(e){for(var t=0;t<this.balls.length;t++){var n=this.balls[t];n.show||(n.show=!0,n.el=e,this.dropBalls.push(n))}},beforeDrop:function(e){var t=this.dropBalls[this.dropBalls.length-1],n=t.el.getBoundingClientRect(),i=n.left-32,a=-(window.innerHeight-n.top-22);e.style.display="",e.style[d]="translate3d(0,"+a+"px,0)",e.getElementsByClassName("inner-hook")[0].style[d]="translate3d("+i+"px,0,0)"},dropping:function(e,t){this._reflow=document.body.offsetHeight,e.style[d]="translate3d(0,0,0)",e.getElementsByClassName("inner-hook")[0].style[d]="translate3d(0,0,0)",e.addEventListener("transitionend",t)},afterDrop:function(e){var t=this.dropBalls.shift();t&&(t.show=!1,e.style.display="none")}},watch:{scrollY:function(e){var t=Math.max(this.minTransalteY,e),n=1,i=0,a=0,s=Math.abs(e/this.imageHeight);e>0?(n=1+s,i=10):a=Math.min(20,20*s),this.$refs.layer.style[d]="translate3d(0,"+t+"px,0)",this.$refs.filter.style[c]="blur("+a+"px)",e<this.minTransalteY?(i=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="46px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[d]="scale("+n+")",this.$refs.bgImage.style.zIndex=i}}}},255:function(e,t,n){t=e.exports=n(230)(),t.push([e.i,".music-list[data-v-3b40696e]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#08053a}.music-list .back[data-v-3b40696e]{position:absolute;top:0;line-height:1.33333rem;z-index:50}.music-list .back .icon[data-v-3b40696e]{display:block;padding:0 .4rem;font-size:22px}.music-list .title[data-v-3b40696e]{position:absolute;top:0;left:1.33333rem;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:1.33333rem;font-size:18px;color:#fff}.music-list .bg-image[data-v-3b40696e]{position:relative;width:100%;height:0;padding-top:70%;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-3b40696e]{position:absolute;bottom:.8rem;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-3b40696e]{box-sizing:border-box;width:3.2rem;padding:.13333rem 0;margin:0 auto;text-align:center;border:1px solid #ea2448;color:#ea2448;border-radius:2.66667rem;font-size:0}.music-list .bg-image .play-wrapper .play .icon[data-v-3b40696e]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px;color:#ea2448}.music-list .bg-image .play-wrapper .play .text[data-v-3b40696e]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-3b40696e]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-3b40696e]{position:relative;height:100%;background:#08053a}.music-list .list[data-v-3b40696e]{position:absolute;top:0;bottom:0;width:100%;background:#08053a}.music-list .list .song-list-wrapper[data-v-3b40696e]{padding:.4rem .66667rem}.music-list .ball-container .ball[data-v-3b40696e]{position:fixed;left:32px;bottom:22px;z-index:100;transition:all .4s cubic-bezier(.49,-.29,.75,.41)}.music-list .ball-container .ball .inner[data-v-3b40696e]{width:16px;height:16px;border-radius:50%;background:#ea2448;transition:all .4s linear}","",{version:3,sources:["/home/travis/build/ChenYFan-Tester/MagicMusic/src/components/musicList.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,kBAAoB,CACrB,AACD,mCACI,kBAAmB,AACnB,MAAO,AACP,uBAAwB,AACxB,UAAY,CACf,AACD,yCACM,cAAe,AACf,gBAAkB,AAClB,cAAgB,CACrB,AACD,oCACI,kBAAmB,AACnB,MAAO,AACP,gBAAiB,AACjB,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,uBAAwB,AACxB,eAAgB,AAChB,UAAY,CACf,AACD,uCACI,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,qBAAsB,AACtB,qBAAuB,CAC1B,AACD,qDACM,kBAAmB,AACnB,aAAe,AACf,WAAY,AACZ,UAAY,CACjB,AACD,2DACQ,sBAAuB,AACvB,aAAc,AACd,oBAAsB,AACtB,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,yBAA0B,AAC1B,WAAa,CACpB,AACD,iEACU,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,eAAgB,AAChB,aAAe,CACxB,AACD,iEACU,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACzB,AACD,+CACM,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAAiC,CACtC,AACD,uCACI,kBAAmB,AACnB,YAAa,AACb,kBAAoB,CACvB,AACD,mCACI,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,kBAAoB,CACvB,AACD,sDACM,uBAA2B,CAChC,AACD,mDACI,eAAgB,AAChB,UAAW,AACX,YAAa,AACb,YAAa,AACb,iDAA2D,CAC9D,AACD,0DACM,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,mBAAoB,AACpB,yBAA4B,CACjC",file:"musicList.vue",sourcesContent:["\n.music-list[data-v-3b40696e] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #08053a;\n}\n.music-list .back[data-v-3b40696e] {\n    position: absolute;\n    top: 0;\n    line-height: 1.33333rem;\n    z-index: 50;\n}\n.music-list .back .icon[data-v-3b40696e] {\n      display: block;\n      padding: 0 0.4rem;\n      font-size: 22px;\n}\n.music-list .title[data-v-3b40696e] {\n    position: absolute;\n    top: 0;\n    left: 1.33333rem;\n    z-index: 40;\n    width: 80%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    line-height: 1.33333rem;\n    font-size: 18px;\n    color: #fff;\n}\n.music-list .bg-image[data-v-3b40696e] {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-top: 70%;\n    transform-origin: top;\n    background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-3b40696e] {\n      position: absolute;\n      bottom: 0.8rem;\n      z-index: 50;\n      width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-3b40696e] {\n        box-sizing: border-box;\n        width: 3.2rem;\n        padding: 0.13333rem 0;\n        margin: 0 auto;\n        text-align: center;\n        border: 1px solid #ea2448;\n        color: #ea2448;\n        border-radius: 2.66667rem;\n        font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon[data-v-3b40696e] {\n          display: inline-block;\n          vertical-align: middle;\n          margin-right: 6px;\n          font-size: 16px;\n          color: #ea2448;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-3b40696e] {\n          display: inline-block;\n          vertical-align: middle;\n          font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-3b40696e] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(7, 17, 27, 0.4);\n}\n.music-list .bg-layer[data-v-3b40696e] {\n    position: relative;\n    height: 100%;\n    background: #08053a;\n}\n.music-list .list[data-v-3b40696e] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 100%;\n    background: #08053a;\n}\n.music-list .list .song-list-wrapper[data-v-3b40696e] {\n      padding: 0.4rem 0.66667rem;\n}\n.music-list .ball-container .ball[data-v-3b40696e] {\n    position: fixed;\n    left: 32px;\n    bottom: 22px;\n    z-index: 100;\n    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);\n}\n.music-list .ball-container .ball .inner[data-v-3b40696e] {\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      background: #ea2448;\n      transition: all 0.4s linear;\n}\n"],sourceRoot:""}])},256:function(e,t,n){var i=n(255);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(231)("22210b32",i,!0)},257:function(e,t,n){n(256);var i=n(3)(n(254),n(258),"data-v-3b40696e",null);e.exports=i.exports},258:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"music-list"},[n("div",{staticClass:"back",on:{click:e.back}},[n("i",{staticClass:"icon"},[e._v("")])]),e._v(" "),n("h1",{staticClass:"title",domProps:{innerHTML:e._s(e.title)}}),e._v(" "),n("div",{ref:"bgImage",staticClass:"bg-image",style:e.bgStyle},[n("div",{staticClass:"play-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:e.playAll}},[n("i",{staticClass:"icon"},[e._v("")]),e._v(" "),n("span",{staticClass:"text"},[e._v("播放全部")])])]),e._v(" "),n("div",{ref:"filter",staticClass:"filter"})]),e._v(" "),n("div",{ref:"layer",staticClass:"bg-layer"}),e._v(" "),n("v-scroll",{ref:"list",staticClass:"list",attrs:{data:e.songs,"listen-scroll":e.listenScroll,"probe-type":e.probeType},on:{scroll:e.scroll}},[n("div",{staticClass:"song-list-wrapper"},[n("v-song-list",{directives:[{name:"show",rawName:"v-show",value:e.songs.length>0,expression:"songs.length > 0"}],attrs:{"song-lists":e.songs},on:{add:e.onAddSong}})],1)]),e._v(" "),n("div",{ref:"ball",staticClass:"ball-container"},e._l(e.balls,function(t,i){return n("div",{key:i},[n("transition",{on:{"before-enter":e.beforeDrop,enter:e.dropping,"after-enter":e.afterDrop}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}],staticClass:"ball"},[n("div",{staticClass:"inner inner-hook"})])])],1)}),0)],1)},staticRenderFns:[]}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(44),a=n(257),s=n.n(a);t.default={name:"top-list",components:{"v-music-list":s.a},data:function(){return{songs:[],bgImage:"",title:""}},created:function(){this._getTopList()},methods:{_getTopList:function(){var e=this;if(!this.$route.params.id)return void this.$router.push("/rank");this.$showLoading(),i.a.SongList({id:this.$route.params.id}).then(function(t){200===t.code&&(e.$hideLoading(),e.songs=t.playlist.tracks,e.bgImage=t.playlist.coverImgUrl,e.title=t.playlist.name)})}}}},292:function(e,t,n){t=e.exports=n(230)(),t.push([e.i,".slide-enter-active[data-v-81633598],.slide-leave-active[data-v-81633598]{transition:all .3s}.slide-enter[data-v-81633598],.slide-leave-to[data-v-81633598]{transform:translate3d(100%,0,0)}","",{version:3,sources:["/home/travis/build/ChenYFan-Tester/MagicMusic/src/pages/topList.vue"],names:[],mappings:"AACA,0EAEE,kBAAqB,CACtB,AACD,+DAEE,+BAAmC,CACpC",file:"topList.vue",sourcesContent:["\n.slide-enter-active[data-v-81633598],\n.slide-leave-active[data-v-81633598] {\n  transition: all 0.3s;\n}\n.slide-enter[data-v-81633598],\n.slide-leave-to[data-v-81633598] {\n  transform: translate3d(100%, 0, 0);\n}\n"],sourceRoot:""}])},309:function(e,t,n){var i=n(292);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(231)("4e3d79f1",i,!0)},336:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("v-music-list",{attrs:{title:e.title,"bg-image":e.bgImage,songs:e.songs}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.c7dcdae0de2bc985fa11.js.map