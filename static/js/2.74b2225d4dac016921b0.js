webpackJsonp([2],{240:function(e,n,t){t(299);var i=t(3)(t(275),t(326),"data-v-12e7960c",null);e.exports=i.exports},241:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(12),a=t.n(i),s=t(13),r=t(14),o=t(87);n.default={props:{song:Object,index:Number},computed:a()({},t.i(r.a)(["playList"])),methods:{_love:function(e){this.$toast("开发中，敬请期待...")},_add:function(e){t.i(o.a)(this.playList,this.song)>-1?this.$toast("播放列表中已存在"):(this.$emit("add",e.target),this.$store.dispatch("addPlayList",this.song)),s.a.set(this.song,"menuShow",!1)},_share:function(e){this.$toast("开发中，敬请期待...")}}}},242:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(243),a=t.n(i),s=t(250),r=t.n(s),o=(t(44),t(13));n.default={components:{animationMenu:r.a},props:{songLists:{type:Array,default:[]},operate:{type:Boolean,default:!0}},data:function(){return{}},methods:{getDesc:function(e){return(e.ar&&e.ar[0].name)+"·"+(e.al&&e.al.name)},_play:function(e){this.$store.dispatch("selectPlaySong",e)},_showOperation:function(e){for(var n=0;n<this.songLists.length;n++)n!==e&&(this.songLists[n].menuShow=!1);this.songLists[e].menuShow=!this.songLists[e].menuShow},onAdd:function(e){this.$emit("add",e)}},watch:{songLists:function(){var e=!0,n=!1,t=void 0;try{for(var i,s=a()(this.songLists);!(e=(i=s.next()).done);e=!0){var r=i.value;o.a.set(r,"menuShow",!1)}}catch(e){n=!0,t=e}finally{try{!e&&s.return&&s.return()}finally{if(n)throw t}}}}}},243:function(e,n,t){e.exports={default:t(244),__esModule:!0}},244:function(e,n,t){t(48),t(25),e.exports=t(245)},245:function(e,n,t){var i=t(10),a=t(47);e.exports=t(4).getIterator=function(e){var n=a(e);if("function"!=typeof n)throw TypeError(e+" is not iterable!");return i(n.call(e))}},246:function(e,n,t){n=e.exports=t(230)(),n.push([e.i,".song-list[data-v-7eae33d0]{position:relative}.song-list .list-item[data-v-7eae33d0]{position:relative;height:1.6rem;font-size:14px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;color:#fff}.song-list .list-item .info[data-v-7eae33d0]{-ms-flex:1;flex:1;line-height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.song-list .list-item .info .song-name[data-v-7eae33d0]{color:#fff}.song-list .list-item .info .song-desc[data-v-7eae33d0]{margin-top:4px;color:hsla(0,0%,100%,.5)}.song-list .list-item .operation[data-v-7eae33d0]{width:1.33333rem;height:100%;box-sizing:border-box;padding-top:.33333rem;text-align:right}","",{version:3,sources:["/home/travis/build/ChenYFan-Tester/MagicMusic/src/components/songList.vue"],names:[],mappings:"AACA,4BACE,iBAAmB,CACpB,AACD,uCACI,kBAAmB,AACnB,cAAe,AACf,eAAgB,AAChB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,eAAgB,AAChB,UAAY,CACf,AACD,6CACM,WAAY,AACR,OAAQ,AACZ,iBAAkB,AAClB,mBAAoB,AACpB,gBAAiB,AACjB,sBAAwB,CAC7B,AACD,wDACQ,UAAY,CACnB,AACD,wDACQ,eAAgB,AAChB,wBAAgC,CACvC,AACD,kDACM,iBAAkB,AAClB,YAAa,AACb,sBAAuB,AACvB,sBAAwB,AACxB,gBAAkB,CACvB",file:"songList.vue",sourcesContent:["\n.song-list[data-v-7eae33d0] {\n  position: relative;\n}\n.song-list .list-item[data-v-7eae33d0] {\n    position: relative;\n    height: 1.6rem;\n    font-size: 14px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    cursor: pointer;\n    color: #fff;\n}\n.song-list .list-item .info[data-v-7eae33d0] {\n      -ms-flex: 1;\n          flex: 1;\n      line-height: 20px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n}\n.song-list .list-item .info .song-name[data-v-7eae33d0] {\n        color: #fff;\n}\n.song-list .list-item .info .song-desc[data-v-7eae33d0] {\n        margin-top: 4px;\n        color: rgba(255, 255, 255, 0.5);\n}\n.song-list .list-item .operation[data-v-7eae33d0] {\n      width: 1.33333rem;\n      height: 100%;\n      box-sizing: border-box;\n      padding-top: 0.33333rem;\n      text-align: right;\n}\n"],sourceRoot:""}])},247:function(e,n,t){n=e.exports=t(230)(),n.push([e.i,".menu[data-v-e6409ae4]{position:absolute;right:1.73333rem;top:.26667rem;transition:all .7s ease-in}.menu.move-enter-active .inner[data-v-e6409ae4]{transform:translateZ(0);transition-timing-function:cubic-bezier(0,.57,.44,1.97)}.menu.move-enter-active .inner-1[data-v-e6409ae4]{transition-delay:.1s}.menu.move-enter-active .inner-2[data-v-e6409ae4]{transition-delay:.2s}.menu.move-enter-active .inner-3[data-v-e6409ae4]{transition-delay:.3s}.menu.move-enter .inner[data-v-e6409ae4],.menu.move-leave-active .inner[data-v-e6409ae4]{transition-timing-function:ease-in-out;opacity:0}.menu.move-enter .inner-1[data-v-e6409ae4],.menu.move-leave-active .inner-1[data-v-e6409ae4]{transform:translate3d(.26667rem,0,0);transition-delay:.3s}.menu.move-enter .inner-2[data-v-e6409ae4],.menu.move-leave-active .inner-2[data-v-e6409ae4]{transform:translate3d(1.33333rem,0,0);transition-delay:.2s}.menu.move-enter .inner-3[data-v-e6409ae4],.menu.move-leave-active .inner-3[data-v-e6409ae4]{transform:translate3d(2.4rem,0,0);transition-delay:.1s}.menu .inner[data-v-e6409ae4]{display:inline-block;position:absolute;width:.8rem;height:.8rem;line-height:.82667rem;border-radius:50%;background:hsla(0,0%,100%,.1);text-align:center;color:#fff;cursor:pointer;z-index:100;transition:all .4s}.menu .inner-1[data-v-e6409ae4]{left:-.26667rem}.menu .inner-2[data-v-e6409ae4]{left:-1.33333rem}.menu .inner-3[data-v-e6409ae4]{left:-2.4rem}","",{version:3,sources:["/home/travis/build/ChenYFan-Tester/MagicMusic/src/components/animationMenu.vue"],names:[],mappings:"AACA,uBACE,kBAAmB,AACnB,iBAAkB,AAClB,cAAgB,AAChB,0BAA6B,CAC9B,AACD,gDACI,wBAAgC,AAChC,uDAA8D,CACjE,AACD,kDACI,oBAAuB,CAC1B,AACD,kDACI,oBAAuB,CAC1B,AACD,kDACI,oBAAuB,CAC1B,AACD,yFACI,uCAAwC,AACxC,SAAW,CACd,AACD,6FACI,qCAAyC,AACzC,oBAAuB,CAC1B,AACD,6FACI,sCAAyC,AACzC,oBAAuB,CAC1B,AACD,6FACI,kCAAqC,AACrC,oBAAuB,CAC1B,AACD,8BACI,qBAAsB,AACtB,kBAAmB,AACnB,YAAc,AACd,aAAe,AACf,sBAAwB,AACxB,kBAAmB,AACnB,8BAAqC,AACrC,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,YAAa,AACb,kBAAqB,CACxB,AACD,gCACI,eAAkB,CACrB,AACD,gCACI,gBAAkB,CACrB,AACD,gCACI,YAAc,CACjB",file:"animationMenu.vue",sourcesContent:["\n.menu[data-v-e6409ae4] {\n  position: absolute;\n  right: 1.73333rem;\n  top: 0.26667rem;\n  transition: all 0.7s ease-in;\n}\n.menu.move-enter-active .inner[data-v-e6409ae4] {\n    transform: translate3d(0, 0, 0);\n    transition-timing-function: cubic-bezier(0, 0.57, 0.44, 1.97);\n}\n.menu.move-enter-active .inner-1[data-v-e6409ae4] {\n    transition-delay: 0.1s;\n}\n.menu.move-enter-active .inner-2[data-v-e6409ae4] {\n    transition-delay: 0.2s;\n}\n.menu.move-enter-active .inner-3[data-v-e6409ae4] {\n    transition-delay: 0.3s;\n}\n.menu.move-enter .inner[data-v-e6409ae4], .menu.move-leave-active .inner[data-v-e6409ae4] {\n    transition-timing-function: ease-in-out;\n    opacity: 0;\n}\n.menu.move-enter .inner-1[data-v-e6409ae4], .menu.move-leave-active .inner-1[data-v-e6409ae4] {\n    transform: translate3d(0.26667rem, 0, 0);\n    transition-delay: 0.3s;\n}\n.menu.move-enter .inner-2[data-v-e6409ae4], .menu.move-leave-active .inner-2[data-v-e6409ae4] {\n    transform: translate3d(1.33333rem, 0, 0);\n    transition-delay: 0.2s;\n}\n.menu.move-enter .inner-3[data-v-e6409ae4], .menu.move-leave-active .inner-3[data-v-e6409ae4] {\n    transform: translate3d(2.4rem, 0, 0);\n    transition-delay: 0.1s;\n}\n.menu .inner[data-v-e6409ae4] {\n    display: inline-block;\n    position: absolute;\n    width: 0.8rem;\n    height: 0.8rem;\n    line-height: 0.82667rem;\n    border-radius: 50%;\n    background: rgba(255, 255, 255, 0.1);\n    text-align: center;\n    color: #fff;\n    cursor: pointer;\n    z-index: 100;\n    transition: all 0.4s;\n}\n.menu .inner-1[data-v-e6409ae4] {\n    left: -0.26667rem;\n}\n.menu .inner-2[data-v-e6409ae4] {\n    left: -1.33333rem;\n}\n.menu .inner-3[data-v-e6409ae4] {\n    left: -2.4rem;\n}\n"],sourceRoot:""}])},248:function(e,n,t){var i=t(246);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(231)("49ce3f94",i,!0)},249:function(e,n,t){var i=t(247);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(231)("611ecfae",i,!0)},250:function(e,n,t){t(249);var i=t(3)(t(241),t(253),"data-v-e6409ae4",null);e.exports=i.exports},251:function(e,n,t){t(248);var i=t(3)(t(242),t(252),"data-v-7eae33d0",null);e.exports=i.exports},252:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"song-list"},e._l(e.songLists,function(n,i){return t("div",{key:i,staticClass:"list-item"},[t("div",{staticClass:"info",on:{click:function(t){return e._play(n)}}},[t("div",{staticClass:"song-name"},[e._v("\n        "+e._s(n.name)+"\n      ")]),e._v(" "),t("div",{staticClass:"song-desc"},[e._v(e._s(e.getDesc(n)))])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.operate,expression:"operate"}],staticClass:"operation",on:{click:function(n){return e._showOperation(i)}}},[t("i",{staticClass:"icon"},[e._v("")])]),e._v(" "),t("animation-menu",{attrs:{song:n,index:i},on:{add:e.onAdd}})],1)}),0)},staticRenderFns:[]}},253:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:"move"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.song.menuShow,expression:"song.menuShow"}],staticClass:"menu"},[t("div",{staticClass:"inner inner-1",on:{click:function(n){return n.stopPropagation(),e._add(n)}}},[t("i",{staticClass:"icon"},[e._v("")])]),e._v(" "),t("div",{staticClass:"inner inner-2",on:{click:function(n){return n.stopPropagation(),e._share(e.index)}}},[t("i",{staticClass:"icon"},[e._v("")])]),e._v(" "),t("div",{staticClass:"inner inner-3",on:{click:function(n){return n.stopPropagation(),e._love(e.index)}}},[t("i",{staticClass:"icon"},[e._v("")])])])])},staticRenderFns:[]}},266:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{switches:{type:Array,default:[]},currentIndex:{type:Number,default:0}},methods:{switchItem:function(e){this.$emit("switch",e)}}}},275:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(12),a=t.n(i),s=t(324),r=t.n(s),o=t(45),A=t.n(o),l=t(251),c=t.n(l),d=t(14),C=t(86);n.default={name:"user",mixins:[C.b],components:{"v-switches":r.a,"v-scroll":A.a,"v-song-list":c.a},data:function(){return{currentIndex:0,switches:[{name:"我喜欢的"},{name:"最近听的"}]}},computed:a()({noResult:function(){return 0===this.currentIndex?!this.favoriteList.length:!this.playHistory.length},noResultDesc:function(){return 0===this.currentIndex?"暂无收藏歌曲":"你还没有听过歌曲"}},t.i(d.a)(["favoriteList","playHistory"])),methods:a()({handlePlaylist:function(e){var n=e.length>0?"1.5rem":"";this.$refs.listWrapper.style.bottom=n,this.$refs.favoriteList&&this.$refs.favoriteList.refresh(),this.$refs.playList&&this.$refs.playList.refresh()},switchItem:function(e){this.currentIndex=e},selectSong:function(e){this.selectPlaySong(e)},back:function(){this.$router.back()},playAll:function(){this.playAllList(this.playHistory)}},t.i(d.c)(["selectPlaySong","playAllList"]))}},282:function(e,n,t){n=e.exports=t(230)(),n.push([e.i,".user-center[data-v-12e7960c]{position:fixed;top:0;bottom:0;z-index:100;width:100%;background:#08053a}.user-center.slide-enter-active[data-v-12e7960c],.user-center.slide-leave-active[data-v-12e7960c]{transition:all .3s}.user-center.slide-enter[data-v-12e7960c],.user-center.slide-leave-to[data-v-12e7960c]{transform:translate3d(100%,0,0)}.user-center .back[data-v-12e7960c]{position:absolute;top:0;line-height:1.33333rem;z-index:50}.user-center .back .icon[data-v-12e7960c]{display:block;padding:0 .4rem;font-size:22px}.user-center .switches-wrapper[data-v-12e7960c]{margin:.26667rem 0 .8rem}.user-center .play[data-v-12e7960c]{box-sizing:border-box;width:3.2rem;padding:.13333rem 0;margin:0 auto;text-align:center;border:1px solid #ea2448;color:#ea2448;border-radius:2.66667rem;font-size:0}.user-center .play .icon[data-v-12e7960c]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px;color:#ea2448}.user-center .play .text[data-v-12e7960c]{display:inline-block;vertical-align:middle;font-size:12px}.user-center .list-wrapper[data-v-12e7960c]{position:absolute;top:2.93333rem;bottom:0;width:100%}.user-center .list-wrapper .list-scroll[data-v-12e7960c]{height:100%;overflow:hidden}.user-center .list-wrapper .list-scroll .list-inner[data-v-12e7960c]{padding:.53333rem .8rem}.user-center .no-result-wrapper[data-v-12e7960c]{position:absolute;width:100%;top:50%;transform:translateY(-50%);text-align:center;font-size:14px;color:hsla(0,0%,100%,.3)}","",{version:3,sources:["/home/travis/build/ChenYFan-Tester/MagicMusic/src/pages/user.vue"],names:[],mappings:"AACA,8BACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,YAAa,AACb,WAAY,AACZ,kBAAoB,CACrB,AACD,kGACI,kBAAqB,CACxB,AACD,uFACI,+BAAmC,CACtC,AACD,oCACI,kBAAmB,AACnB,MAAO,AACP,uBAAwB,AACxB,UAAY,CACf,AACD,0CACM,cAAe,AACf,gBAAkB,AAClB,cAAgB,CACrB,AACD,gDACI,wBAA8B,CACjC,AACD,oCACI,sBAAuB,AACvB,aAAc,AACd,oBAAsB,AACtB,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,yBAA0B,AAC1B,WAAa,CAChB,AACD,0CACM,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,eAAgB,AAChB,aAAe,CACpB,AACD,0CACM,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACrB,AACD,4CACI,kBAAmB,AACnB,eAAgB,AAChB,SAAU,AACV,UAAY,CACf,AACD,yDACM,YAAa,AACb,eAAiB,CACtB,AACD,qEACQ,uBAA2B,CAClC,AACD,iDACI,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,2BAA4B,AAC5B,kBAAmB,AACnB,eAAgB,AAChB,wBAAgC,CACnC",file:"user.vue",sourcesContent:["\n.user-center[data-v-12e7960c] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 100;\n  width: 100%;\n  background: #08053a;\n}\n.user-center.slide-enter-active[data-v-12e7960c], .user-center.slide-leave-active[data-v-12e7960c] {\n    transition: all 0.3s;\n}\n.user-center.slide-enter[data-v-12e7960c], .user-center.slide-leave-to[data-v-12e7960c] {\n    transform: translate3d(100%, 0, 0);\n}\n.user-center .back[data-v-12e7960c] {\n    position: absolute;\n    top: 0;\n    line-height: 1.33333rem;\n    z-index: 50;\n}\n.user-center .back .icon[data-v-12e7960c] {\n      display: block;\n      padding: 0 0.4rem;\n      font-size: 22px;\n}\n.user-center .switches-wrapper[data-v-12e7960c] {\n    margin: 0.26667rem 0 0.8rem 0;\n}\n.user-center .play[data-v-12e7960c] {\n    box-sizing: border-box;\n    width: 3.2rem;\n    padding: 0.13333rem 0;\n    margin: 0 auto;\n    text-align: center;\n    border: 1px solid #ea2448;\n    color: #ea2448;\n    border-radius: 2.66667rem;\n    font-size: 0;\n}\n.user-center .play .icon[data-v-12e7960c] {\n      display: inline-block;\n      vertical-align: middle;\n      margin-right: 6px;\n      font-size: 16px;\n      color: #ea2448;\n}\n.user-center .play .text[data-v-12e7960c] {\n      display: inline-block;\n      vertical-align: middle;\n      font-size: 12px;\n}\n.user-center .list-wrapper[data-v-12e7960c] {\n    position: absolute;\n    top: 2.93333rem;\n    bottom: 0;\n    width: 100%;\n}\n.user-center .list-wrapper .list-scroll[data-v-12e7960c] {\n      height: 100%;\n      overflow: hidden;\n}\n.user-center .list-wrapper .list-scroll .list-inner[data-v-12e7960c] {\n        padding: 0.53333rem 0.8rem;\n}\n.user-center .no-result-wrapper[data-v-12e7960c] {\n    position: absolute;\n    width: 100%;\n    top: 50%;\n    transform: translateY(-50%);\n    text-align: center;\n    font-size: 14px;\n    color: rgba(255, 255, 255, 0.3);\n}\n"],sourceRoot:""}])},286:function(e,n,t){n=e.exports=t(230)(),n.push([e.i,".switches[data-v-323bc627]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:240px;margin:0 auto;border:1px solid #2f3054;border-radius:5px}.switches .switch-item[data-v-323bc627]{-ms-flex:1;flex:1;padding:8px;text-align:center;font-size:14px;color:hsla(0,0%,100%,.3)}.switches .switch-item.active[data-v-323bc627]{background:#2f3054;color:#fff}","",{version:3,sources:["/home/travis/build/ChenYFan-Tester/MagicMusic/src/components/switches.vue"],names:[],mappings:"AACA,2BACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,YAAa,AACb,cAAe,AACf,yBAA0B,AAC1B,iBAAmB,CACpB,AACD,wCACI,WAAY,AACR,OAAQ,AACZ,YAAa,AACb,kBAAmB,AACnB,eAAgB,AAChB,wBAAgC,CACnC,AACD,+CACM,mBAAoB,AACpB,UAAY,CACjB",file:"switches.vue",sourcesContent:["\n.switches[data-v-323bc627] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 240px;\n  margin: 0 auto;\n  border: 1px solid #2f3054;\n  border-radius: 5px;\n}\n.switches .switch-item[data-v-323bc627] {\n    -ms-flex: 1;\n        flex: 1;\n    padding: 8px;\n    text-align: center;\n    font-size: 14px;\n    color: rgba(255, 255, 255, 0.3);\n}\n.switches .switch-item.active[data-v-323bc627] {\n      background: #2f3054;\n      color: #fff;\n}\n"],sourceRoot:""}])},299:function(e,n,t){var i=t(282);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(231)("dba9624e",i,!0)},303:function(e,n,t){var i=t(286);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(231)("4b0cf07f",i,!0)},324:function(e,n,t){t(303);var i=t(3)(t(266),t(330),"data-v-323bc627",null);e.exports=i.exports},326:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:"slide"}},[t("div",{staticClass:"user-center"},[t("div",{staticClass:"back",on:{click:e.back}},[t("i",{staticClass:"icon"},[e._v("")])]),e._v(" "),t("div",{staticClass:"switches-wrapper"},[t("v-switches",{attrs:{switches:e.switches,currentIndex:e.currentIndex},on:{switch:e.switchItem}})],1),e._v(" "),t("div",{ref:"playBtn",staticClass:"play",on:{click:e.playAll}},[t("i",{staticClass:"icon"},[e._v("")]),e._v(" "),t("span",{staticClass:"text"},[e._v("播放全部")])]),e._v(" "),t("div",{ref:"listWrapper",staticClass:"list-wrapper"},[0===e.currentIndex?t("v-scroll",{ref:"favoriteList",staticClass:"list-scroll",attrs:{data:e.favoriteList}},[t("div",{staticClass:"list-inner"},[t("v-song-list",{attrs:{"song-lists":e.favoriteList,operate:!1},on:{select:e.selectSong}})],1)]):e._e(),e._v(" "),1===e.currentIndex?t("v-scroll",{ref:"playList",staticClass:"list-scroll",attrs:{data:e.playHistory}},[t("div",{staticClass:"list-inner"},[t("v-song-list",{attrs:{"song-lists":e.playHistory,operate:!1},on:{select:e.selectSong}})],1)]):e._e()],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.noResult,expression:"noResult"}],staticClass:"no-result-wrapper"},[t("span",[e._v(e._s(e.noResultDesc))])])])])},staticRenderFns:[]}},330:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ul",{staticClass:"switches"},e._l(e.switches,function(n,i){return t("li",{key:i,staticClass:"switch-item",class:{active:e.currentIndex===i},on:{click:function(n){return e.switchItem(i)}}},[t("span",[e._v(e._s(n.name))])])}),0)},staticRenderFns:[]}}});
//# sourceMappingURL=2.74b2225d4dac016921b0.js.map