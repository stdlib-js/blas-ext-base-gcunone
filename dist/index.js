"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var b=g(function(F,p){
function h(e,r,s,v,a,n,t){var c,u,f,l,o,i,q,x;for(c=r.data,u=a.data,f=r.accessors[0],l=a.accessors[1],o=!0,i=v,q=t,x=0;x<e;x++)o&&f(c,i)&&(o=!1),l(u,q,o),i+=s,q+=n;return a}p.exports=h
});var y=g(function(G,P){
var d=require('@stdlib/array-base-arraylike2object/dist'),w=b();function z(e,r,s,v,a,n,t){var c,u,f,l,o,i;if(e<=0)return a;if(u=d(r),f=d(a),u.accessorProtocol||f.accessorProtocol)return w(e,u,s,v,f,n,t),a;for(c=!0,l=v,o=t,i=0;i<e;i++)c&&r[l]&&(c=!1),a[o]=c,l+=s,o+=n;return a}P.exports=z
});var m=g(function(H,k){
var j=require('@stdlib/strided-base-stride2offset/dist'),A=y();function B(e,r,s,v,a){var n=j(e,s),t=j(e,a);return A(e,r,s,n,v,a,t)}k.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=m(),D=y();C(R,"ndarray",D);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
