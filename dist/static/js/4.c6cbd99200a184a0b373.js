webpackJsonp([4],{NSSj:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Dd8w"),s=e.n(i),o=e("kvay"),a=e("NYxO"),r=e("m40h"),c=e("T452"),u=e("PvFA"),d={data:function(){return{songs:[]}},computed:s()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},Object(a.c)(["disc"])),created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;this.disc.dissid?Object(r.c)(this.disc.dissid).then(function(n){if("string"==typeof n){var e=n.match(/^\w+\(({.+})\)$/);e&&(n=JSON.parse(e[1]))}n.code===c.a&&(t.songs=t._nomalizeSongs(n.cdlist[0].songlist))}):this.$router.back()},_nomalizeSongs:function(t){var n=[];return t.forEach(function(t){t.songid&&t.albumid&&n.push(Object(u.a)(t))}),n}},components:{MusicList:o.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var g=e("VU/8")(d,f,!1,function(t){e("iDAO")},"data-v-068f5e59",null);n.default=g.exports},iDAO:function(t,n){},m40h:function(t,n,e){"use strict";n.b=function(){var t=a()({},d.b,{platform:"h5",uin:0,needNewCode:1});return Object(r.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,d.c)},n.a=function(){var t=a()({},d.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return u.a.get("/api/getDiscList",{params:t}).then(function(t){return s.a.resolve(t.data)})},n.c=function(t){var n=a()({},d.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,g_tk:67232076});return u.a.get("/api/getSongList",{params:n}).then(function(t){return s.a.resolve(t.data)})};var i=e("//Fk"),s=e.n(i),o=e("woOf"),a=e.n(o),r=e("Gak4"),c=e("mtWM"),u=e.n(c),d=e("T452")}});