(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="170",Gm=0,Rd=1,Wm=2,wu=1,Xm=2,pi=3,ei=0,on=1,Vn=2,yi=0,ji=1,zo=2,Pd=3,Fd=4,qm=5,xs=100,$m=101,Ym=102,jm=103,Km=104,Jm=200,Zm=201,Qm=202,tg=203,rh=204,oh=205,eg=206,ng=207,ig=208,sg=209,rg=210,og=211,ag=212,lg=213,cg=214,ah=0,lh=1,ch=2,Cr=3,hh=4,uh=5,dh=6,fh=7,Kp=0,hg=1,ug=2,Mi=0,dg=1,fg=2,pg=3,mg=4,gg=5,_g=6,vg=7,Jp=300,Rr=301,Pr=302,ph=303,mh=304,Bl=306,Vo=1e3,Yi=1001,gh=1002,cn=1003,xg=1004,ca=1005,pn=1006,nc=1007,Ts=1008,ni=1009,Zp=1010,Qp=1011,Ho=1012,Eu=1013,Us=1014,Kn=1015,Qn=1016,Tu=1017,Au=1018,Fr=1020,t0=35902,e0=1021,n0=1022,Pn=1023,i0=1024,s0=1025,gr=1026,Dr=1027,kl=1028,Cu=1029,r0=1030,Ru=1031,Pu=1033,ja=33776,Ka=33777,Ja=33778,Za=33779,_h=35840,vh=35841,xh=35842,yh=35843,Mh=36196,bh=37492,Sh=37496,wh=37808,Eh=37809,Th=37810,Ah=37811,Ch=37812,Rh=37813,Ph=37814,Fh=37815,Dh=37816,Lh=37817,Ih=37818,Uh=37819,Nh=37820,Oh=37821,Qa=36492,Bh=36494,kh=36495,o0=36283,zh=36284,Vh=36285,Hh=36286,yg=3200,Mg=3201,a0=0,bg=1,qi="",$e="srgb",zr="srgb-linear",zl="linear",Ee="srgb",Vs=7680,Dd=519,Sg=512,wg=513,Eg=514,l0=515,Tg=516,Ag=517,Cg=518,Rg=519,Ld=35044,Rs=35048,Id="300 es",xi=2e3,pl=2001;class Vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ic=Math.PI/180,Gh=180/Math.PI;function Hr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Ze(i,t,e){return Math.max(t,Math.min(e,i))}function Pg(i,t){return(i%t+t)%t}function sc(i,t,e){return(1-e)*i+e*t}function Kr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,s,r,o,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],g=s[3],m=s[6],M=s[1],x=s[4],v=s[7],I=s[2],T=s[5],R=s[8];return r[0]=o*_+a*M+l*I,r[3]=o*g+a*x+l*T,r[6]=o*m+a*v+l*R,r[1]=c*_+h*M+u*I,r[4]=c*g+h*x+u*T,r[7]=c*m+h*v+u*R,r[2]=d*_+f*M+p*I,r[5]=d*g+f*x+p*T,r[8]=d*m+f*v+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rc.makeScale(t,e)),this}rotate(t){return this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new ee;function c0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ml(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fg(){const i=ml("canvas");return i.style.display="block",i}const Ud={};function mo(i){i in Ud||(Ud[i]=!0,console.warn(i))}function Dg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Lg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ig(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pe={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ee&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ee&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qi?zl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Nd=[.64,.33,.3,.6,.15,.06],Od=[.2126,.7152,.0722],Bd=[.3127,.329],kd=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zd=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pe.define({[zr]:{primaries:Nd,whitePoint:Bd,transfer:zl,toXYZ:kd,fromXYZ:zd,luminanceCoefficients:Od,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:Nd,whitePoint:Bd,transfer:Ee,toXYZ:kd,fromXYZ:zd,luminanceCoefficients:Od,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});let Hs;class Ug{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hs===void 0&&(Hs=ml("canvas")),Hs.width=t.width,Hs.height=t.height;const n=Hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ml("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ng=0;class h0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Hr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oc(s[o].image)):r.push(oc(s[o]))}else r=oc(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function oc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ug.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Og=0;class an extends Vr{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=Yi,s=Yi,r=pn,o=Ts,a=Pn,l=ni,c=an.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Hr(),this.name="",this.source=new h0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Jp;an.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(f+1)/2,I=(m+1)/2,T=(h+d)/4,R=(u+_)/4,F=(p+g)/4;return x>v&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=R/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=F/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=F/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bg extends Vr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new h0(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Bg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class u0 extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kg extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==p){let g=1-a;const m=l*d+c*f+h*p+u*_,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const I=Math.sqrt(x),T=Math.atan2(I,m*M);g=Math.sin(g*T)/I,a=Math.sin(a*T)/I}const v=a*M;if(l=l*g+d*v,c=c*g+f*v,h=h*g+p*v,u=u*g+_*v,g===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ac.copy(this).projectOnVector(t),this.sub(ac)}reflect(t){return this.sub(ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ac=new P,Vd=new ns;class Bs{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ha.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(t.matrixWorld),this.union(ha)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jr),ua.subVectors(this.max,Jr),Gs.subVectors(t.a,Jr),Ws.subVectors(t.b,Jr),Xs.subVectors(t.c,Jr),Pi.subVectors(Ws,Gs),Fi.subVectors(Xs,Ws),ss.subVectors(Gs,Xs);let e=[0,-Pi.z,Pi.y,0,-Fi.z,Fi.y,0,-ss.z,ss.y,Pi.z,0,-Pi.x,Fi.z,0,-Fi.x,ss.z,0,-ss.x,-Pi.y,Pi.x,0,-Fi.y,Fi.x,0,-ss.y,ss.x,0];return!lc(e,Gs,Ws,Xs,ua)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,Gs,Ws,Xs,ua))?!1:(da.crossVectors(Pi,Fi),e=[da.x,da.y,da.z],lc(e,Gs,Ws,Xs,ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,ha=new Bs,Gs=new P,Ws=new P,Xs=new P,Pi=new P,Fi=new P,ss=new P,Jr=new P,ua=new P,da=new P,rs=new P;function lc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rs.fromArray(i,r);const a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=t.dot(rs),c=e.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const zg=new Bs,Zr=new P,cc=new P;class Gr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zr.subVectors(t,this.center);const e=Zr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zr.copy(t.center).add(cc)),this.expandByPoint(Zr.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new P,hc=new P,fa=new P,Di=new P,uc=new P,pa=new P,dc=new P;class d0{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){hc.copy(t).add(e).multiplyScalar(.5),fa.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(hc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fa),a=Di.dot(this.direction),l=-Di.dot(fa),c=Di.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(hc).addScaledVector(fa,d),f}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,s,r){uc.subVectors(e,t),pa.subVectors(n,t),dc.crossVectors(uc,pa);let o=this.direction.dot(dc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,t);const l=a*this.direction.dot(pa.crossVectors(Di,pa));if(l<0)return null;const c=a*this.direction.dot(uc.cross(Di));if(c<0||l+c>o)return null;const h=-a*Di.dot(dc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/qs.setFromMatrixColumn(t,0).length(),r=1/qs.setFromMatrixColumn(t,1).length(),o=1/qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vg,t,Hg)}lookAt(t,e,n){const s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Li.crossVectors(n,_n),Li.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Li.crossVectors(n,_n)),Li.normalize(),ma.crossVectors(_n,Li),s[0]=Li.x,s[4]=ma.x,s[8]=_n.x,s[1]=Li.y,s[5]=ma.y,s[9]=_n.y,s[2]=Li.z,s[6]=ma.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],x=n[7],v=n[11],I=n[15],T=s[0],R=s[4],F=s[8],w=s[12],y=s[1],L=s[5],V=s[9],k=s[13],W=s[2],Y=s[6],q=s[10],j=s[14],X=s[3],ct=s[7],mt=s[11],At=s[15];return r[0]=o*T+a*y+l*W+c*X,r[4]=o*R+a*L+l*Y+c*ct,r[8]=o*F+a*V+l*q+c*mt,r[12]=o*w+a*k+l*j+c*At,r[1]=h*T+u*y+d*W+f*X,r[5]=h*R+u*L+d*Y+f*ct,r[9]=h*F+u*V+d*q+f*mt,r[13]=h*w+u*k+d*j+f*At,r[2]=p*T+_*y+g*W+m*X,r[6]=p*R+_*L+g*Y+m*ct,r[10]=p*F+_*V+g*q+m*mt,r[14]=p*w+_*k+g*j+m*At,r[3]=M*T+x*y+v*W+I*X,r[7]=M*R+x*L+v*Y+I*ct,r[11]=M*F+x*V+v*q+I*mt,r[15]=M*w+x*k+v*j+I*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],M=u*g*c-_*d*c+_*l*f-a*g*f-u*l*m+a*d*m,x=p*d*c-h*g*c-p*l*f+o*g*f+h*l*m-o*d*m,v=h*_*c-p*u*c+p*a*f-o*_*f-h*a*m+o*u*m,I=p*u*l-h*_*l-p*a*d+o*_*d+h*a*g-o*u*g,T=e*M+n*x+s*v+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=M*R,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*m-n*d*m)*R,t[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*m+n*l*m)*R,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*R,t[4]=x*R,t[5]=(h*g*r-p*d*r+p*s*f-e*g*f-h*s*m+e*d*m)*R,t[6]=(p*l*r-o*g*r-p*s*c+e*g*c+o*s*m-e*l*m)*R,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*R,t[8]=v*R,t[9]=(p*u*r-h*_*r-p*n*f+e*_*f+h*n*m-e*u*m)*R,t[10]=(o*_*r-p*a*r+p*n*c-e*_*c-o*n*m+e*a*m)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*R,t[12]=I*R,t[13]=(h*_*s-p*u*s+p*n*d-e*_*d-h*n*g+e*u*g)*R,t[14]=(p*a*s-o*_*s-p*n*l+e*_*l+o*n*g-e*a*g)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,_=o*h,g=o*u,m=a*u,M=l*c,x=l*h,v=l*u,I=n.x,T=n.y,R=n.z;return s[0]=(1-(_+m))*I,s[1]=(f+v)*I,s[2]=(p-x)*I,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+m))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(p+x)*R,s[9]=(g-M)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=qs.set(s[0],s[1],s[2]).length();const o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Nn.copy(this);const c=1/r,h=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=xi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,p;if(a===xi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===pl)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,f=(n+s)*h;let p,_;if(a===xi)p=(o+r)*u,_=-2*u;else if(a===pl)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qs=new P,Nn=new oe,Vg=new P(0,0,0),Hg=new P(1,1,1),Li=new P,ma=new P,_n=new P,Hd=new oe,Gd=new ns;class Dn{constructor(t=0,e=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gd.setFromEuler(this),this.setFromQuaternion(Gd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class f0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gg=0;const Wd=new P,$s=new ns,hi=new oe,ga=new P,Qr=new P,Wg=new P,Xg=new ns,Xd=new P(1,0,0),qd=new P(0,1,0),$d=new P(0,0,1),Yd={type:"added"},qg={type:"removed"},Ys={type:"childadded",child:null},fc={type:"childremoved",child:null};class Ke extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new P,e=new Dn,n=new ns,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new ee}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(Xd,t)}rotateY(t){return this.rotateOnAxis(qd,t)}rotateZ(t){return this.rotateOnAxis($d,t)}translateOnAxis(t,e){return Wd.copy(t).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xd,t)}translateY(t){return this.translateOnAxis(qd,t)}translateZ(t){return this.translateOnAxis($d,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ga.copy(t):ga.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Qr,ga,this.up):hi.lookAt(ga,Qr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(hi),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yd),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qg),fc.child=t,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yd),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,t,Wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Xg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ke.DEFAULT_UP=new P(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new P,ui=new P,pc=new P,di=new P,js=new P,Ks=new P,jd=new P,mc=new P,gc=new P,_c=new P,vc=new Ue,xc=new Ue,yc=new Ue;class Hn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),On.subVectors(t,e),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){On.subVectors(s,e),ui.subVectors(n,e),pc.subVectors(t,e);const o=On.dot(On),a=On.dot(ui),l=On.dot(pc),c=ui.dot(ui),h=ui.dot(pc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return vc.setScalar(0),xc.setScalar(0),yc.setScalar(0),vc.fromBufferAttribute(t,e),xc.fromBufferAttribute(t,n),yc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(vc,r.x),o.addScaledVector(xc,r.y),o.addScaledVector(yc,r.z),o}static isFrontFacing(t,e,n,s){return On.subVectors(n,e),ui.subVectors(t,e),On.cross(ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),On.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,n),Ks.subVectors(r,n),mc.subVectors(t,n);const l=js.dot(mc),c=Ks.dot(mc);if(l<=0&&c<=0)return e.copy(n);gc.subVectors(t,s);const h=js.dot(gc),u=Ks.dot(gc);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(js,o);_c.subVectors(t,r);const f=js.dot(_c),p=Ks.dot(_c);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ks,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return jd.subVectors(r,s),a=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(jd,a);const m=1/(g+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(js,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Mc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=Pg(t,1),e=Ze(e,0,1),n=Ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Mc(o,r,t+1/3),this.g=Mc(o,r,t),this.b=Mc(o,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=p0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return pe.fromWorkingColorSpace(en.copy(this),t),Math.round(Ze(en.r*255,0,255))*65536+Math.round(Ze(en.g*255,0,255))*256+Math.round(Ze(en.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(en.copy(this),e);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=$e){pe.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,s=en.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(_a);const n=sc(Ii.h,_a.h,e),s=sc(Ii.s,_a.s,e),r=sc(Ii.l,_a.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new vt;vt.NAMES=p0;let $g=0;class Wr extends Vr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Hr(),this.name="",this.blending=ji,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rh&&(n.blendSrc=this.blendSrc),this.blendDst!==oh&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ks extends Wr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new P,va=new nt;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ld,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Kr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ld&&(t.usage=this.usage),t}}class m0 extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class g0 extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yg=0;const En=new oe,bc=new Ke,Js=new P,vn=new Bs,to=new Bs,We=new P;class Le extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(c0(t)?g0:m0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return bc.lookAt(t),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(vn.min,to.min),vn.expandByPoint(We),We.addVectors(vn.max,to.max),vn.expandByPoint(We)):(vn.expandByPoint(to.min),vn.expandByPoint(to.max))}vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(t,c),We.add(Js)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new P,l[F]=new P;const c=new P,h=new P,u=new P,d=new nt,f=new nt,p=new nt,_=new P,g=new P;function m(F,w,y){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),a[F].add(_),a[w].add(_),a[y].add(_),l[F].add(g),l[w].add(g),l[y].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let F=0,w=M.length;F<w;++F){const y=M[F],L=y.start,V=y.count;for(let k=L,W=L+V;k<W;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const x=new P,v=new P,I=new P,T=new P;function R(F){I.fromBufferAttribute(s,F),T.copy(I);const w=a[F];x.copy(w),x.sub(I.multiplyScalar(I.dot(w))).normalize(),v.crossVectors(T,w);const L=v.dot(l[F])<0?-1:1;o.setXYZW(F,x.x,x.y,x.z,L)}for(let F=0,w=M.length;F<w;++F){const y=M[F],L=y.start,V=y.count;for(let k=L,W=L+V;k<W;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kd=new oe,os=new d0,xa=new Gr,Jd=new P,ya=new P,Ma=new P,ba=new P,Sc=new P,Sa=new P,Zd=new P,wa=new P;class me extends Ke{constructor(t=new Le,e=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Sc.fromBufferAttribute(u,t),o?Sa.addScaledVector(Sc,h):Sa.addScaledVector(Sc.sub(e),h))}e.add(Sa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(xa.containsPoint(os.origin)===!1&&(os.intersectSphere(xa,Jd)===null||os.origin.distanceToSquared(Jd)>(t.far-t.near)**2))&&(Kd.copy(r).invert(),os.copy(t.ray).applyMatrix4(Kd),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,I=x;v<I;v+=3){const T=a.getX(v),R=a.getX(v+1),F=a.getX(v+2);s=Ea(this,m,t,n,c,h,u,T,R,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const M=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);s=Ea(this,o,t,n,c,h,u,M,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,I=x;v<I;v+=3){const T=v,R=v+1,F=v+2;s=Ea(this,m,t,n,c,h,u,T,R,F),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const M=g,x=g+1,v=g+2;s=Ea(this,o,t,n,c,h,u,M,x,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function jg(i,t,e,n,s,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ei,a),l===null)return null;wa.copy(a),wa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wa);return c<e.near||c>e.far?null:{distance:c,point:wa.clone(),object:i}}function Ea(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ya),i.getVertexPosition(l,Ma),i.getVertexPosition(c,ba);const h=jg(i,t,e,n,ya,Ma,ba,Zd);if(h){const u=new P;Hn.getBarycoord(Zd,ya,Ma,ba,u),s&&(h.uv=Hn.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(h.normal=Hn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};Hn.getNormal(ya,Ma,ba,d.normal),h.face=d,h.barycoord=u}return h}class Ti extends Le{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function p(_,g,m,M,x,v,I,T,R,F,w){const y=v/R,L=I/F,V=v/2,k=I/2,W=T/2,Y=R+1,q=F+1;let j=0,X=0;const ct=new P;for(let mt=0;mt<q;mt++){const At=mt*L-k;for(let Jt=0;Jt<Y;Jt++){const xe=Jt*y-V;ct[_]=xe*M,ct[g]=At*x,ct[m]=W,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[g]=0,ct[m]=T>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Jt/R),u.push(1-mt/F),j+=1}}for(let mt=0;mt<F;mt++)for(let At=0;At<R;At++){const Jt=d+At+Y*mt,xe=d+At+Y*(mt+1),Z=d+(At+1)+Y*(mt+1),ot=d+(At+1)+Y*mt;l.push(Jt,xe,ot),l.push(xe,Z,ot),X+=6}a.addGroup(f,X,w),f+=X,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){const t={};for(let e=0;e<i.length;e++){const n=Lr(i[e]);for(const s in n)t[s]=n[s]}return t}function Kg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Go={clone:Lr,merge:ln};var Jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Wr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jg,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=Kg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class v0 extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=xi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new P,Qd=new nt,tf=new nt;class yn extends v0{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ic*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gh*2*Math.atan(Math.tan(ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,Qd,tf),e.subVectors(tf,Qd)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ic*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zs=-90,Qs=1;class Qg extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(Zs,Qs,t,e);s.layers=this.layers,this.add(s);const r=new yn(Zs,Qs,t,e);r.layers=this.layers,this.add(r);const o=new yn(Zs,Qs,t,e);o.layers=this.layers,this.add(o);const a=new yn(Zs,Qs,t,e);a.layers=this.layers,this.add(a);const l=new yn(Zs,Qs,t,e);l.layers=this.layers,this.add(l);const c=new yn(Zs,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class x0 extends an{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Rr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class t_ extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new x0(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ti(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:yi});r.uniforms.tEquirect.value=e;const o=new me(s,r),a=e.minFilter;return e.minFilter===Ts&&(e.minFilter=pn),new Qg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const wc=new P,e_=new P,n_=new ee;class us{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wc.subVectors(n,e).cross(e_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||n_.getNormalMatrix(t),s=this.coplanarPoint(wc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Gr,Ta=new P;class Fu{constructor(t=new us,e=new us,n=new us,s=new us,r=new us,o=new us){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xi){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,g-f,v-m).normalize(),n[1].setComponents(l+r,d+c,g+f,v+m).normalize(),n[2].setComponents(l+o,d+h,g+p,v+M).normalize(),n[3].setComponents(l-o,d-h,g-p,v-M).normalize(),n[4].setComponents(l-a,d-u,g-_,v-x).normalize(),e===xi)n[5].setComponents(l+a,d+u,g+_,v+x).normalize();else if(e===pl)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ta.x=s.normal.x>0?t.max.x:t.min.x,Ta.y=s.normal.y>0?t.max.y:t.min.y,Ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y0(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function i_(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ai extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const M=m*d-o;for(let x=0;x<c;x++){const v=x*u-r;p.push(v,-M,0),_.push(0,0,1),g.push(x/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const x=M+c*m,v=M+c*(m+1),I=M+1+c*(m+1),T=M+1+c*m;f.push(x,v,T),f.push(v,I,T)}this.setIndex(f),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}var s_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,f_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,__=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,v_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,C_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,R_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I_="gl_FragColor = linearToOutputTexel( gl_FragColor );",U_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,V_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,K_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ev=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,av=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Av=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,h1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:s_,alphahash_pars_fragment:r_,alphamap_fragment:o_,alphamap_pars_fragment:a_,alphatest_fragment:l_,alphatest_pars_fragment:c_,aomap_fragment:h_,aomap_pars_fragment:u_,batching_pars_vertex:d_,batching_vertex:f_,begin_vertex:p_,beginnormal_vertex:m_,bsdfs:g_,iridescence_fragment:__,bumpmap_pars_fragment:v_,clipping_planes_fragment:x_,clipping_planes_pars_fragment:y_,clipping_planes_pars_vertex:M_,clipping_planes_vertex:b_,color_fragment:S_,color_pars_fragment:w_,color_pars_vertex:E_,color_vertex:T_,common:A_,cube_uv_reflection_fragment:C_,defaultnormal_vertex:R_,displacementmap_pars_vertex:P_,displacementmap_vertex:F_,emissivemap_fragment:D_,emissivemap_pars_fragment:L_,colorspace_fragment:I_,colorspace_pars_fragment:U_,envmap_fragment:N_,envmap_common_pars_fragment:O_,envmap_pars_fragment:B_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:K_,envmap_vertex:z_,fog_vertex:V_,fog_pars_vertex:H_,fog_fragment:G_,fog_pars_fragment:W_,gradientmap_pars_fragment:X_,lightmap_pars_fragment:q_,lights_lambert_fragment:$_,lights_lambert_pars_fragment:Y_,lights_pars_begin:j_,lights_toon_fragment:J_,lights_toon_pars_fragment:Z_,lights_phong_fragment:Q_,lights_phong_pars_fragment:tv,lights_physical_fragment:ev,lights_physical_pars_fragment:nv,lights_fragment_begin:iv,lights_fragment_maps:sv,lights_fragment_end:rv,logdepthbuf_fragment:ov,logdepthbuf_pars_fragment:av,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:cv,map_fragment:hv,map_pars_fragment:uv,map_particle_fragment:dv,map_particle_pars_fragment:fv,metalnessmap_fragment:pv,metalnessmap_pars_fragment:mv,morphinstance_vertex:gv,morphcolor_vertex:_v,morphnormal_vertex:vv,morphtarget_pars_vertex:xv,morphtarget_vertex:yv,normal_fragment_begin:Mv,normal_fragment_maps:bv,normal_pars_fragment:Sv,normal_pars_vertex:wv,normal_vertex:Ev,normalmap_pars_fragment:Tv,clearcoat_normal_fragment_begin:Av,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Rv,iridescence_pars_fragment:Pv,opaque_fragment:Fv,packing:Dv,premultiplied_alpha_fragment:Lv,project_vertex:Iv,dithering_fragment:Uv,dithering_pars_fragment:Nv,roughnessmap_fragment:Ov,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:zv,shadowmap_vertex:Vv,shadowmask_pars_fragment:Hv,skinbase_vertex:Gv,skinning_pars_vertex:Wv,skinning_vertex:Xv,skinnormal_vertex:qv,specularmap_fragment:$v,specularmap_pars_fragment:Yv,tonemapping_fragment:jv,tonemapping_pars_fragment:Kv,transmission_fragment:Jv,transmission_pars_fragment:Zv,uv_pars_fragment:Qv,uv_pars_vertex:t1,uv_vertex:e1,worldpos_vertex:n1,background_vert:i1,background_frag:s1,backgroundCube_vert:r1,backgroundCube_frag:o1,cube_vert:a1,cube_frag:l1,depth_vert:c1,depth_frag:h1,distanceRGBA_vert:u1,distanceRGBA_frag:d1,equirect_vert:f1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:_1,meshbasic_frag:v1,meshlambert_vert:x1,meshlambert_frag:y1,meshmatcap_vert:M1,meshmatcap_frag:b1,meshnormal_vert:S1,meshnormal_frag:w1,meshphong_vert:E1,meshphong_frag:T1,meshphysical_vert:A1,meshphysical_frag:C1,meshtoon_vert:R1,meshtoon_frag:P1,points_vert:F1,points_frag:D1,shadow_vert:L1,shadow_frag:I1,sprite_vert:U1,sprite_frag:N1},ut={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Yn={basic:{uniforms:ln([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:ln([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new vt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:ln([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:ln([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:ln([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new vt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:ln([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:ln([ut.points,ut.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:ln([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:ln([ut.common,ut.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:ln([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:ln([ut.sprite,ut.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:ln([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:ln([ut.lights,ut.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Yn.physical={uniforms:ln([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const Aa={r:0,b:0,g:0},ls=new Dn,O1=new oe;function B1(i,t,e,n,s,r,o){const a=new vt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=p(M);v===null?m(a,l):v&&v.isColor&&(m(v,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,x){const v=p(x);v&&(v.isCubeTexture||v.mapping===Bl)?(h===void 0&&(h=new me(new Ti(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Lr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ls.copy(x.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(ls)),h.material.toneMapped=pe.getTransfer(v.colorSpace)!==Ee,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new me(new Ai(2,2),new rn({name:"BackgroundMaterial",uniforms:Lr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pe.getTransfer(v.colorSpace)!==Ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(Aa,_0(i)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:g}}function k1(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,L,V,k,W){let Y=!1;const q=u(k,V,L);r!==q&&(r=q,c(r.object)),Y=f(y,k,V,W),Y&&p(y,k,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(y,L,V,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,V){const k=V.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Y=W[L.id];Y===void 0&&(Y={},W[L.id]=Y);let q=Y[k];return q===void 0&&(q=d(l()),Y[k]=q),q}function d(y){const L=[],V=[],k=[];for(let W=0;W<e;W++)L[W]=0,V[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,L,V,k){const W=r.attributes,Y=L.attributes;let q=0;const j=V.getAttributes();for(const X in j)if(j[X].location>=0){const mt=W[X];let At=Y[X];if(At===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(At=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(At=y.instanceColor)),mt===void 0||mt.attribute!==At||At&&mt.data!==At.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function p(y,L,V,k){const W={},Y=L.attributes;let q=0;const j=V.getAttributes();for(const X in j)if(j[X].location>=0){let mt=Y[X];mt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor));const At={};At.attribute=mt,mt&&mt.data&&(At.data=mt.data),W[X]=At,q++}r.attributes=W,r.attributesNum=q,r.index=k}function _(){const y=r.newAttributes;for(let L=0,V=y.length;L<V;L++)y[L]=0}function g(y){m(y,0)}function m(y,L){const V=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;V[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),W[y]!==L&&(i.vertexAttribDivisor(y,L),W[y]=L)}function M(){const y=r.newAttributes,L=r.enabledAttributes;for(let V=0,k=L.length;V<k;V++)L[V]!==y[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function x(y,L,V,k,W,Y,q){q===!0?i.vertexAttribIPointer(y,L,V,W,Y):i.vertexAttribPointer(y,L,V,k,W,Y)}function v(y,L,V,k){_();const W=k.attributes,Y=V.getAttributes(),q=L.defaultAttributeValues;for(const j in Y){const X=Y[j];if(X.location>=0){let ct=W[j];if(ct===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const mt=ct.normalized,At=ct.itemSize,Jt=t.get(ct);if(Jt===void 0)continue;const xe=Jt.buffer,Z=Jt.type,ot=Jt.bytesPerElement,Pt=Z===i.INT||Z===i.UNSIGNED_INT||ct.gpuType===Eu;if(ct.isInterleavedBufferAttribute){const lt=ct.data,kt=lt.stride,$t=ct.offset;if(lt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<X.locationSize;Wt++)m(X.location+Wt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Wt=0;Wt<X.locationSize;Wt++)g(X.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Wt=0;Wt<X.locationSize;Wt++)x(X.location+Wt,At/X.locationSize,Z,mt,kt*ot,($t+At/X.locationSize*Wt)*ot,Pt)}else{if(ct.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let lt=0;lt<X.locationSize;lt++)g(X.location+lt);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let lt=0;lt<X.locationSize;lt++)x(X.location+lt,At/X.locationSize,Z,mt,At*ot,At/X.locationSize*lt*ot,Pt)}}else if(q!==void 0){const mt=q[j];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(X.location,mt);break;case 3:i.vertexAttrib3fv(X.location,mt);break;case 4:i.vertexAttrib4fv(X.location,mt);break;default:i.vertexAttrib1fv(X.location,mt)}}}}M()}function I(){F();for(const y in n){const L=n[y];for(const V in L){const k=L[V];for(const W in k)h(k[W].object),delete k[W];delete L[V]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const V in L){const k=L[V];for(const W in k)h(k[W].object),delete k[W];delete L[V]}delete n[y.id]}function R(y){for(const L in n){const V=n[L];if(V[y.id]===void 0)continue;const k=V[y.id];for(const W in k)h(k[W].object),delete k[W];delete V[y.id]}}function F(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function z1(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_]*d[_];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function V1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const F=R===Qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ni&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Kn&&!F)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:I,maxSamples:T}}function H1(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new us,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,x=M*4;let v=m.clippingState||null;l.value=v,v=h(p,d,x,f);for(let I=0;I!==x;++I)v[I]=e[I];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function G1(i){let t=new WeakMap;function e(o,a){return a===ph?o.mapping=Rr:a===mh&&(o.mapping=Pr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ph||a===mh)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new t_(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Vl extends v0{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hr=4,ef=[.125,.215,.35,.446,.526,.582],ys=20,Ec=new Vl,nf=new vt;let Tc=null,Ac=0,Cc=0,Rc=!1;const ds=(1+Math.sqrt(5))/2,tr=1/ds,sf=[new P(-ds,tr,0),new P(ds,tr,0),new P(-tr,0,ds),new P(tr,0,ds),new P(0,ds,-tr),new P(0,ds,tr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class rf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tc,Ac,Cc),this._renderer.xr.enabled=Rc,t.scissorTest=!1,Ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Qn,format:Pn,colorSpace:zr,depthBuffer:!1},s=of(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W1(r)),this._blurMaterial=X1(r,t,e)}return s}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,Ec)}_sceneToCubeUV(t,e,n,s){const a=new yn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nf),h.toneMapping=Mi,h.autoClear=!1;const f=new ks({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),p=new me(new Ti,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(nf),_=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const x=this._cubeSize;Ca(s,M*x,m>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(p,a),h.render(t,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Rr||t.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ca(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ec)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sf[(s-r-1)%sf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new me(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):ys;g>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ys}`);const m=[];let M=0;for(let R=0;R<ys;++R){const F=R/_,w=Math.exp(-F*F/2);m.push(w),R===0?M+=w:R<g&&(M+=2*w)}for(let R=0;R<m.length;R++)m[R]=m[R]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const v=this._sizeLods[s],I=3*v*(s>x-hr?s-x+hr:0),T=4*(this._cubeSize-v);Ca(e,I,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Ec)}}function W1(i){const t=[],e=[],n=[];let s=i;const r=i-hr+1+ef.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-hr?l=ef[o-i+hr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,M=new Float32Array(_*p*f),x=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,F=T>2?0:-1,w=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];M.set(w,_*p*T),x.set(d,g*p*T);const y=[T,T,T,T,T,T];v.set(y,m*p*T)}const I=new Le;I.setAttribute("position",new Be(M,_)),I.setAttribute("uv",new Be(x,g)),I.setAttribute("faceIndex",new Be(v,m)),t.push(I),s>hr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function of(i,t,e){const n=new Fn(i,t,e);return n.texture.mapping=Bl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ca(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function X1(i,t,e){const n=new Float32Array(ys),s=new P(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function af(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function lf(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ph||l===mh,h=l===Rr||l===Pr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new rf(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new rf(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $1(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&mo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y1(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const _=f[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,v=M.length;x<v;x+=3){const I=M[x+0],T=M[x+1],R=M[x+2];d.push(I,T,T,R,R,I)}}else if(p!==void 0){const M=p.array;_=p.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const I=x+0,T=x+1,R=x+2;d.push(I,T,T,R,R,I)}}else return;const g=new(c0(d)?g0:m0)(d,1);g.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function j1(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let M=0;M<p;M++)m+=f[M]*_[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function K1(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function J1(i,t,e){const n=new WeakMap,s=new Ue;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let I=a.attributes.position.count*v,T=1;I>t.maxTextureSize&&(T=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*T*4*u),F=new u0(R,I,T,u);F.type=Kn,F.needsUpdate=!0;const w=v*4;for(let L=0;L<u;L++){const V=m[L],k=M[L],W=x[L],Y=I*T*4*L;for(let q=0;q<V.count;q++){const j=q*w;p===!0&&(s.fromBufferAttribute(V,q),R[Y+j+0]=s.x,R[Y+j+1]=s.y,R[Y+j+2]=s.z,R[Y+j+3]=0),_===!0&&(s.fromBufferAttribute(k,q),R[Y+j+4]=s.x,R[Y+j+5]=s.y,R[Y+j+6]=s.z,R[Y+j+7]=0),g===!0&&(s.fromBufferAttribute(W,q),R[Y+j+8]=s.x,R[Y+j+9]=s.y,R[Y+j+10]=s.z,R[Y+j+11]=W.itemSize===4?s.w:1)}}d={count:u,texture:F,size:new nt(I,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Z1(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class M0 extends an{constructor(t,e,n,s,r,o,a,l,c,h=gr){if(h!==gr&&h!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gr&&(n=Us),n===void 0&&h===Dr&&(n=Fr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const b0=new an,cf=new M0(1,1),S0=new u0,w0=new kg,E0=new x0,hf=[],uf=[],df=new Float32Array(16),ff=new Float32Array(9),pf=new Float32Array(4);function Xr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=hf[s];if(r===void 0&&(r=new Float32Array(s),hf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hl(i,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Q1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function ix(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),Ge(e,n)}}function sx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;ff.set(n),i.uniformMatrix3fv(this.addr,!1,ff),Ge(e,n)}}function rx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;df.set(n),i.uniformMatrix4fv(this.addr,!1,df),Ge(e,n)}}function ox(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ax(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function hx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function fx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function px(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cf.compareFunction=l0,r=cf):r=b0,e.setTexture2D(t||r,s)}function mx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||w0,s)}function gx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||E0,s)}function _x(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||S0,s)}function vx(i){switch(i){case 5126:return Q1;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ox;case 35667:case 35671:return ax;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return hx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}function xx(i,t){i.uniform1fv(this.addr,t)}function yx(i,t){const e=Xr(t,this.size,2);i.uniform2fv(this.addr,e)}function Mx(i,t){const e=Xr(t,this.size,3);i.uniform3fv(this.addr,e)}function bx(i,t){const e=Xr(t,this.size,4);i.uniform4fv(this.addr,e)}function Sx(i,t){const e=Xr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wx(i,t){const e=Xr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ex(i,t){const e=Xr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tx(i,t){i.uniform1iv(this.addr,t)}function Ax(i,t){i.uniform2iv(this.addr,t)}function Cx(i,t){i.uniform3iv(this.addr,t)}function Rx(i,t){i.uniform4iv(this.addr,t)}function Px(i,t){i.uniform1uiv(this.addr,t)}function Fx(i,t){i.uniform2uiv(this.addr,t)}function Dx(i,t){i.uniform3uiv(this.addr,t)}function Lx(i,t){i.uniform4uiv(this.addr,t)}function Ix(i,t,e){const n=this.cache,s=t.length,r=Hl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||b0,r[o])}function Ux(i,t,e){const n=this.cache,s=t.length,r=Hl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||w0,r[o])}function Nx(i,t,e){const n=this.cache,s=t.length,r=Hl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||E0,r[o])}function Ox(i,t,e){const n=this.cache,s=t.length,r=Hl(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||S0,r[o])}function Bx(i){switch(i){case 5126:return xx;case 35664:return yx;case 35665:return Mx;case 35666:return bx;case 35674:return Sx;case 35675:return wx;case 35676:return Ex;case 5124:case 35670:return Tx;case 35667:case 35671:return Ax;case 35668:case 35672:return Cx;case 35669:case 35673:return Rx;case 5125:return Px;case 36294:return Fx;case 36295:return Dx;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ox}}class kx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vx(e.type)}}class zx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bx(e.type)}}class Vx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Pc=/(\w+)(\])?(\[|\.)?/g;function mf(i,t){i.seq.push(t),i.map[t.id]=t}function Hx(i,t,e){const n=i.name,s=n.length;for(Pc.lastIndex=0;;){const r=Pc.exec(n),o=Pc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mf(e,c===void 0?new kx(a,i,t):new zx(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Vx(a),mf(e,u)),e=u}}}class tl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Hx(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function gf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gx=37297;let Wx=0;function Xx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const _f=new ee;function qx(i){pe._getMatrix(_f,pe.workingColorSpace,i);const t=`mat3( ${_f.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(i)){case zl:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Xx(i.getShaderSource(t),o)}else return s}function $x(i,t){const e=qx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yx(i,t){let e;switch(t){case dg:e="Linear";break;case fg:e="Reinhard";break;case pg:e="Cineon";break;case mg:e="ACESFilmic";break;case _g:e="AgX";break;case vg:e="Neutral";break;case gg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ra=new P;function jx(){pe.getLuminanceCoefficients(Ra);const i=Ra.x.toFixed(4),t=Ra.y.toFixed(4),e=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function Jx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function go(i){return i!==""}function xf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(i){return i.replace(Qx,ey)}const ty=new Map;function ey(i,t){let e=ie[t];if(e===void 0){const n=ty.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wh(e)}const ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(i){return i.replace(ny,iy)}function iy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function ry(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rr:case Pr:t="ENVMAP_TYPE_CUBE";break;case Bl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pr:t="ENVMAP_MODE_REFRACTION";break}return t}function ay(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kp:t="ENVMAP_BLENDING_MULTIPLY";break;case hg:t="ENVMAP_BLENDING_MIX";break;case ug:t="ENVMAP_BLENDING_ADD";break}return t}function ly(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cy(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=sy(e),c=ry(e),h=oy(e),u=ay(e),d=ly(e),f=Kx(e),p=Jx(r),_=s.createProgram();let g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(go).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(go).join(`
`),m.length>0&&(m+=`
`)):(g=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),m=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?ie.tonemapping_pars_fragment:"",e.toneMapping!==Mi?Yx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,$x("linearToOutputTexel",e.outputColorSpace),jx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(go).join(`
`)),o=Wh(o),o=xf(o,e),o=yf(o,e),a=Wh(a),a=xf(a,e),a=yf(a,e),o=Mf(o),a=Mf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+g+o,v=M+m+a,I=gf(s,s.VERTEX_SHADER,x),T=gf(s,s.FRAGMENT_SHADER,v);s.attachShader(_,I),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(L){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(T).trim();let Y=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,T);else{const j=vf(s,I,"vertex"),X=vf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+j+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||W==="")&&(q=!1);q&&(L.diagnostics={runnable:Y,programLog:V,vertexShader:{log:k,prefix:g},fragmentShader:{log:W,prefix:m}})}s.deleteShader(I),s.deleteShader(T),F=new tl(s,_),w=Zx(s,_)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Gx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=T,this}let hy=0;class uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dy(t),e.set(t,n)),n}}class dy{constructor(t){this.id=hy++,this.code=t,this.usedTimes=0}}function fy(i,t,e,n,s,r,o){const a=new f0,l=new uy,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,y,L,V,k){const W=V.fog,Y=k.geometry,q=w.isMeshStandardMaterial?V.environment:null,j=(w.isMeshStandardMaterial?e:t).get(w.envMap||q),X=j&&j.mapping===Bl?j.image.height:null,ct=p[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,At=mt!==void 0?mt.length:0;let Jt=0;Y.morphAttributes.position!==void 0&&(Jt=1),Y.morphAttributes.normal!==void 0&&(Jt=2),Y.morphAttributes.color!==void 0&&(Jt=3);let xe,Z,ot,Pt;if(ct){const Se=Yn[ct];xe=Se.vertexShader,Z=Se.fragmentShader}else xe=w.vertexShader,Z=w.fragmentShader,l.update(w),ot=l.getVertexShaderID(w),Pt=l.getFragmentShaderID(w);const lt=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),$t=k.isInstancedMesh===!0,Wt=k.isBatchedMesh===!0,fe=!!w.map,tt=!!w.matcap,rt=!!j,D=!!w.aoMap,Nt=!!w.lightMap,it=!!w.bumpMap,St=!!w.normalMap,ht=!!w.displacementMap,Vt=!!w.emissiveMap,Mt=!!w.metalnessMap,A=!!w.roughnessMap,b=w.anisotropy>0,z=w.clearcoat>0,K=w.dispersion>0,et=w.iridescence>0,J=w.sheen>0,Ft=w.transmission>0,dt=b&&!!w.anisotropyMap,bt=z&&!!w.clearcoatMap,ae=z&&!!w.clearcoatNormalMap,st=z&&!!w.clearcoatRoughnessMap,wt=et&&!!w.iridescenceMap,Ht=et&&!!w.iridescenceThicknessMap,Xt=J&&!!w.sheenColorMap,Et=J&&!!w.sheenRoughnessMap,he=!!w.specularMap,ne=!!w.specularColorMap,Te=!!w.specularIntensityMap,N=Ft&&!!w.transmissionMap,pt=Ft&&!!w.thicknessMap,$=!!w.gradientMap,Q=!!w.alphaMap,xt=w.alphaTest>0,gt=!!w.alphaHash,Zt=!!w.extensions;let Ie=Mi;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Qe={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:xe,fragmentShader:Z,defines:w.defines,customVertexShaderID:ot,customFragmentShaderID:Pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Wt,batchingColor:Wt&&k._colorsTexture!==null,instancing:$t,instancingColor:$t&&k.instanceColor!==null,instancingMorph:$t&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:zr,alphaToCoverage:!!w.alphaToCoverage,map:fe,matcap:tt,envMap:rt,envMapMode:rt&&j.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:Nt,bumpMap:it,normalMap:St,displacementMap:d&&ht,emissiveMap:Vt,normalMapObjectSpace:St&&w.normalMapType===bg,normalMapTangentSpace:St&&w.normalMapType===a0,metalnessMap:Mt,roughnessMap:A,anisotropy:b,anisotropyMap:dt,clearcoat:z,clearcoatMap:bt,clearcoatNormalMap:ae,clearcoatRoughnessMap:st,dispersion:K,iridescence:et,iridescenceMap:wt,iridescenceThicknessMap:Ht,sheen:J,sheenColorMap:Xt,sheenRoughnessMap:Et,specularMap:he,specularColorMap:ne,specularIntensityMap:Te,transmission:Ft,transmissionMap:N,thicknessMap:pt,gradientMap:$,opaque:w.transparent===!1&&w.blending===ji&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:gt,combine:w.combine,mapUv:fe&&_(w.map.channel),aoMapUv:D&&_(w.aoMap.channel),lightMapUv:Nt&&_(w.lightMap.channel),bumpMapUv:it&&_(w.bumpMap.channel),normalMapUv:St&&_(w.normalMap.channel),displacementMapUv:ht&&_(w.displacementMap.channel),emissiveMapUv:Vt&&_(w.emissiveMap.channel),metalnessMapUv:Mt&&_(w.metalnessMap.channel),roughnessMapUv:A&&_(w.roughnessMap.channel),anisotropyMapUv:dt&&_(w.anisotropyMap.channel),clearcoatMapUv:bt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(w.sheenRoughnessMap.channel),specularMapUv:he&&_(w.specularMap.channel),specularColorMapUv:ne&&_(w.specularColorMap.channel),specularIntensityMapUv:Te&&_(w.specularIntensityMap.channel),transmissionMapUv:N&&_(w.transmissionMap.channel),thicknessMapUv:pt&&_(w.thicknessMap.channel),alphaMapUv:Q&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(St||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(fe||Q),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Jt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:fe&&w.map.isVideoTexture===!0&&pe.getTransfer(w.map.colorSpace)===Ee,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&pe.getTransfer(w.emissiveMap.colorSpace)===Ee,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vn,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function m(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)y.push(L),y.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(M(y,w),x(y,w),y.push(i.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function x(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const y=p[w.type];let L;if(y){const V=Yn[y];L=Go.clone(V.uniforms)}else L=w.uniforms;return L}function I(w,y){let L;for(let V=0,k=h.length;V<k;V++){const W=h[V];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new cy(i,y,w,r),h.push(L)),L}function T(w){if(--w.usedTimes===0){const y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:I,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:F}}function py(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function my(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,p,_,g){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(u,d,f,p,_,g){const m=o(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||my),n.length>1&&n.sort(d||Sf),s.length>1&&s.sort(d||Sf)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function gy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new wf,i.set(n,[o])):s>=r.length?(o=new wf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function _y(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new vt};break;case"SpotLight":e={position:new P,direction:new P,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function vy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xy=0;function yy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function My(i){const t=new _y,e=vy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new oe,o=new oe;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,M=0,x=0,v=0,I=0,T=0,R=0;c.sort(yy);for(let w=0,y=c.length;w<y;w++){const L=c[w],V=L.color,k=L.intensity,W=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*k,u+=V.g*k,d+=V.b*k;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],k);R++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,X=e.get(L);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=q,f++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(V).multiplyScalar(k),q.distance=W,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[_]=q;const j=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,j.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=j.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Y,v++}_++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(V).multiplyScalar(k),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=q,g++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const j=L.shadow,X=e.get(L);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=Y,n.pointShadowMatrix[p]=L.shadow.matrix,x++}n.point[p]=q,p++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(k),q.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[m]=q,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==f||F.pointLength!==p||F.spotLength!==_||F.rectAreaLength!==g||F.hemiLength!==m||F.numDirectionalShadows!==M||F.numPointShadows!==x||F.numSpotShadows!==v||F.numSpotMaps!==I||F.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,F.directionalLength=f,F.pointLength=p,F.spotLength=_,F.rectAreaLength=g,F.hemiLength=m,F.numDirectionalShadows=M,F.numPointShadows=x,F.numSpotShadows=v,F.numSpotMaps=I,F.numLightProbes=R,n.version=xy++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const x=c[m];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Ef(i){const t=new My(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function by(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ef(i),t.set(s,[a])):r>=o.length?(a=new Ef(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Sy extends Wr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wy extends Wr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ey=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ty=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ay(i,t,e){let n=new Fu;const s=new nt,r=new nt,o=new Ue,a=new Sy({depthPacking:Mg}),l=new wy,c={},h=e.maxTextureSize,u={[ei]:on,[on]:ei,[Vn]:Vn},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Ey,fragmentShader:Ty}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Le;p.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new me(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let m=this.type;this.render=function(T,R,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const w=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(yi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=m!==pi&&this.type===pi,W=m===pi&&this.type!==pi;for(let Y=0,q=T.length;Y<q;Y++){const j=T[Y],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ct=X.getFrameExtents();if(s.multiply(ct),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,X.mapSize.y=r.y)),X.map===null||k===!0||W===!0){const At=this.type!==pi?{minFilter:cn,magFilter:cn}:{};X.map!==null&&X.map.dispose(),X.map=new Fn(s.x,s.y,At),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const mt=X.getViewportCount();for(let At=0;At<mt;At++){const Jt=X.getViewport(At);o.set(r.x*Jt.x,r.y*Jt.y,r.x*Jt.z,r.y*Jt.w),V.viewport(o),X.updateMatrices(j,At),n=X.getFrustum(),v(R,F,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===pi&&M(X,F),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,y,L)};function M(T,R){const F=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,F,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,F,f,_,null)}function x(T,R,F,w){let y=null;const L=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)y=L;else if(y=F.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=y.uuid,k=R.uuid;let W=c[V];W===void 0&&(W={},c[V]=W);let Y=W[k];Y===void 0&&(Y=y.clone(),W[k]=Y,R.addEventListener("dispose",I)),y=Y}if(y.visible=R.visible,y.wireframe=R.wireframe,w===pi?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=i.properties.get(y);V.light=F}return y}function v(T,R,F,w,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===pi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);const k=t.update(T),W=T.material;if(Array.isArray(W)){const Y=k.groups;for(let q=0,j=Y.length;q<j;q++){const X=Y[q],ct=W[X.materialIndex];if(ct&&ct.visible){const mt=x(T,ct,w,y);T.onBeforeShadow(i,T,R,F,k,mt,X),i.renderBufferDirect(F,null,k,mt,T,X),T.onAfterShadow(i,T,R,F,k,mt,X)}}}else if(W.visible){const Y=x(T,W,w,y);T.onBeforeShadow(i,T,R,F,k,Y,null),i.renderBufferDirect(F,null,k,Y,T,null),T.onAfterShadow(i,T,R,F,k,Y,null)}}const V=T.children;for(let k=0,W=V.length;k<W;k++)v(V[k],R,F,w,y)}function I(T){T.target.removeEventListener("dispose",I);for(const F in c){const w=c[F],y=T.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}const Cy={[ah]:lh,[ch]:dh,[hh]:fh,[Cr]:uh,[lh]:ah,[dh]:ch,[fh]:hh,[uh]:Cr};function Ry(i,t){function e(){let N=!1;const pt=new Ue;let $=null;const Q=new Ue(0,0,0,0);return{setMask:function(xt){$!==xt&&!N&&(i.colorMask(xt,xt,xt,xt),$=xt)},setLocked:function(xt){N=xt},setClear:function(xt,gt,Zt,Ie,Qe){Qe===!0&&(xt*=Ie,gt*=Ie,Zt*=Ie),pt.set(xt,gt,Zt,Ie),Q.equals(pt)===!1&&(i.clearColor(xt,gt,Zt,Ie),Q.copy(pt))},reset:function(){N=!1,$=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,$=null,Q=null,xt=null;return{setReversed:function(gt){if(pt!==gt){const Zt=t.get("EXT_clip_control");pt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Ie=xt;xt=null,this.setClear(Ie)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?lt(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(gt){$!==gt&&!N&&(i.depthMask(gt),$=gt)},setFunc:function(gt){if(pt&&(gt=Cy[gt]),Q!==gt){switch(gt){case ah:i.depthFunc(i.NEVER);break;case lh:i.depthFunc(i.ALWAYS);break;case ch:i.depthFunc(i.LESS);break;case Cr:i.depthFunc(i.LEQUAL);break;case hh:i.depthFunc(i.EQUAL);break;case uh:i.depthFunc(i.GEQUAL);break;case dh:i.depthFunc(i.GREATER);break;case fh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=gt}},setLocked:function(gt){N=gt},setClear:function(gt){xt!==gt&&(pt&&(gt=1-gt),i.clearDepth(gt),xt=gt)},reset:function(){N=!1,$=null,Q=null,xt=null,pt=!1}}}function s(){let N=!1,pt=null,$=null,Q=null,xt=null,gt=null,Zt=null,Ie=null,Qe=null;return{setTest:function(Se){N||(Se?lt(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(Se){pt!==Se&&!N&&(i.stencilMask(Se),pt=Se)},setFunc:function(Se,Ln,oi){($!==Se||Q!==Ln||xt!==oi)&&(i.stencilFunc(Se,Ln,oi),$=Se,Q=Ln,xt=oi)},setOp:function(Se,Ln,oi){(gt!==Se||Zt!==Ln||Ie!==oi)&&(i.stencilOp(Se,Ln,oi),gt=Se,Zt=Ln,Ie=oi)},setLocked:function(Se){N=Se},setClear:function(Se){Qe!==Se&&(i.clearStencil(Se),Qe=Se)},reset:function(){N=!1,pt=null,$=null,Q=null,xt=null,gt=null,Zt=null,Ie=null,Qe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,M=null,x=null,v=null,I=null,T=null,R=new vt(0,0,0),F=0,w=!1,y=null,L=null,V=null,k=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=j>=2);let ct=null,mt={};const At=i.getParameter(i.SCISSOR_BOX),Jt=i.getParameter(i.VIEWPORT),xe=new Ue().fromArray(At),Z=new Ue().fromArray(Jt);function ot(N,pt,$,Q){const xt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(N,gt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<$;Zt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(pt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return gt}const Pt={};Pt[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Pt[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pt[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(Cr),it(!1),St(Rd),lt(i.CULL_FACE),D(yi);function lt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function kt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function $t(N,pt){return u[N]!==pt?(i.bindFramebuffer(N,pt),u[N]=pt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function Wt(N,pt){let $=f,Q=!1;if(N){$=d.get(pt),$===void 0&&($=[],d.set(pt,$));const xt=N.textures;if($.length!==xt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Zt=xt.length;gt<Zt;gt++)$[gt]=i.COLOR_ATTACHMENT0+gt;$.length=xt.length,Q=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Q=!0);Q&&i.drawBuffers($)}function fe(N){return p!==N?(i.useProgram(N),p=N,!0):!1}const tt={[xs]:i.FUNC_ADD,[$m]:i.FUNC_SUBTRACT,[Ym]:i.FUNC_REVERSE_SUBTRACT};tt[jm]=i.MIN,tt[Km]=i.MAX;const rt={[Jm]:i.ZERO,[Zm]:i.ONE,[Qm]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[rg]:i.SRC_ALPHA_SATURATE,[ig]:i.DST_COLOR,[eg]:i.DST_ALPHA,[tg]:i.ONE_MINUS_SRC_COLOR,[oh]:i.ONE_MINUS_SRC_ALPHA,[sg]:i.ONE_MINUS_DST_COLOR,[ng]:i.ONE_MINUS_DST_ALPHA,[og]:i.CONSTANT_COLOR,[ag]:i.ONE_MINUS_CONSTANT_COLOR,[lg]:i.CONSTANT_ALPHA,[cg]:i.ONE_MINUS_CONSTANT_ALPHA};function D(N,pt,$,Q,xt,gt,Zt,Ie,Qe,Se){if(N===yi){_===!0&&(kt(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),N!==qm){if(N!==g||Se!==w){if((m!==xs||v!==xs)&&(i.blendEquation(i.FUNC_ADD),m=xs,v=xs),Se)switch(N){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.ONE,i.ONE);break;case Pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,x=null,I=null,T=null,R.set(0,0,0),F=0,g=N,w=Se}return}xt=xt||pt,gt=gt||$,Zt=Zt||Q,(pt!==m||xt!==v)&&(i.blendEquationSeparate(tt[pt],tt[xt]),m=pt,v=xt),($!==M||Q!==x||gt!==I||Zt!==T)&&(i.blendFuncSeparate(rt[$],rt[Q],rt[gt],rt[Zt]),M=$,x=Q,I=gt,T=Zt),(Ie.equals(R)===!1||Qe!==F)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Qe),R.copy(Ie),F=Qe),g=N,w=!1}function Nt(N,pt){N.side===Vn?kt(i.CULL_FACE):lt(i.CULL_FACE);let $=N.side===on;pt&&($=!$),it($),N.blending===ji&&N.transparent===!1?D(yi):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function St(N){N!==Gm?(lt(i.CULL_FACE),N!==L&&(N===Rd?i.cullFace(i.BACK):N===Wm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),L=N}function ht(N){N!==V&&(q&&i.lineWidth(N),V=N)}function Vt(N,pt,$){N?(lt(i.POLYGON_OFFSET_FILL),(k!==pt||W!==$)&&(i.polygonOffset(pt,$),k=pt,W=$)):kt(i.POLYGON_OFFSET_FILL)}function Mt(N){N?lt(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+Y-1),ct!==N&&(i.activeTexture(N),ct=N)}function b(N,pt,$){$===void 0&&(ct===null?$=i.TEXTURE0+Y-1:$=ct);let Q=mt[$];Q===void 0&&(Q={type:void 0,texture:void 0},mt[$]=Q),(Q.type!==N||Q.texture!==pt)&&(ct!==$&&(i.activeTexture($),ct=$),i.bindTexture(N,pt||Pt[N]),Q.type=N,Q.texture=pt)}function z(){const N=mt[ct];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xt(N){xe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function Et(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function he(N,pt){let $=c.get(pt);$===void 0&&($=new WeakMap,c.set(pt,$));let Q=$.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(pt,N.name),$.set(N,Q))}function ne(N,pt){const Q=c.get(pt).get(N);l.get(pt)!==Q&&(i.uniformBlockBinding(pt,Q,N.__bindingPointIndex),l.set(pt,Q))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,mt={},u={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,M=null,x=null,v=null,I=null,T=null,R=new vt(0,0,0),F=0,w=!1,y=null,L=null,V=null,k=null,W=null,xe.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:kt,bindFramebuffer:$t,drawBuffers:Wt,useProgram:fe,setBlending:D,setMaterial:Nt,setFlipSided:it,setCullFace:St,setLineWidth:ht,setPolygonOffset:Vt,setScissorTest:Mt,activeTexture:A,bindTexture:b,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:wt,texImage3D:Ht,updateUBOMapping:he,uniformBlockBinding:ne,texStorage2D:ae,texStorage3D:st,texSubImage2D:J,texSubImage3D:Ft,compressedTexSubImage2D:dt,compressedTexSubImage3D:bt,scissor:Xt,viewport:Et,reset:Te}}function Tf(i,t,e,n){const s=Py(n);switch(e){case e0:return i*t;case i0:return i*t;case s0:return i*t*2;case kl:return i*t/s.components*s.byteLength;case Cu:return i*t/s.components*s.byteLength;case r0:return i*t*2/s.components*s.byteLength;case Ru:return i*t*2/s.components*s.byteLength;case n0:return i*t*3/s.components*s.byteLength;case Pn:return i*t*4/s.components*s.byteLength;case Pu:return i*t*4/s.components*s.byteLength;case ja:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vh:case yh:return Math.max(i,16)*Math.max(t,8)/4;case _h:case xh:return Math.max(i,8)*Math.max(t,8)/2;case Mh:case bh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Nh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qa:case Bh:case kh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case o0:case zh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vh:case Hh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Py(i){switch(i){case ni:case Zp:return{byteLength:1,components:1};case Ho:case Qp:case Qn:return{byteLength:2,components:1};case Tu:case Au:return{byteLength:2,components:4};case Us:case Eu:case Kn:return{byteLength:4,components:1};case t0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Fy(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,b){return f?new OffscreenCanvas(A,b):ml("canvas")}function _(A,b,z){let K=1;const et=Mt(A);if((et.width>z||et.height>z)&&(K=z/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(K*et.width),Ft=Math.floor(K*et.height);u===void 0&&(u=p(J,Ft));const dt=b?p(J,Ft):u;return dt.width=J,dt.height=Ft,dt.getContext("2d").drawImage(A,0,0,J,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Ft+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,b,z,K,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=b;if(b===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),b===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),b===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),b===i.RGBA){const Ft=et?zl:pe.getTransfer(K);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Ft===Ee?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(A,b){let z;return A?b===null||b===Us||b===Fr?z=i.DEPTH24_STENCIL8:b===Kn?z=i.DEPTH32F_STENCIL8:b===Ho&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Us||b===Fr?z=i.DEPTH_COMPONENT24:b===Kn?z=i.DEPTH_COMPONENT32F:b===Ho&&(z=i.DEPTH_COMPONENT16),z}function I(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==pn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){const b=A.target;b.removeEventListener("dispose",T),F(b),b.isVideoTexture&&h.delete(b)}function R(A){const b=A.target;b.removeEventListener("dispose",R),y(b)}function F(A){const b=n.get(A);if(b.__webglInit===void 0)return;const z=A.source,K=d.get(z);if(K){const et=K[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(A),Object.keys(K).length===0&&d.delete(z)}n.remove(A)}function w(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const z=A.source,K=d.get(z);delete K[b.__cacheKey],o.memory.textures--}function y(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let et=0;et<b.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[K][et]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=A.textures;for(let K=0,et=z.length;K<et;K++){const J=n.get(z[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(A)}let L=0;function V(){L=0}function k(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function W(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function Y(A,b){const z=n.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,A,b);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function q(A,b){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Z(z,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function j(A,b){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Z(z,A,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function X(A,b){const z=n.get(A);if(A.version>0&&z.__version!==A.version){ot(z,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const ct={[Vo]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[gh]:i.MIRRORED_REPEAT},mt={[cn]:i.NEAREST,[xg]:i.NEAREST_MIPMAP_NEAREST,[ca]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[nc]:i.LINEAR_MIPMAP_NEAREST,[Ts]:i.LINEAR_MIPMAP_LINEAR},At={[Sg]:i.NEVER,[Rg]:i.ALWAYS,[wg]:i.LESS,[l0]:i.LEQUAL,[Eg]:i.EQUAL,[Cg]:i.GEQUAL,[Tg]:i.GREATER,[Ag]:i.NOTEQUAL};function Jt(A,b){if(b.type===Kn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===pn||b.magFilter===nc||b.magFilter===ca||b.magFilter===Ts||b.minFilter===pn||b.minFilter===nc||b.minFilter===ca||b.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ct[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ct[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ct[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,mt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,mt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,At[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===cn||b.minFilter!==ca&&b.minFilter!==Ts||b.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function xe(A,b){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));const K=b.source;let et=d.get(K);et===void 0&&(et={},d.set(K,et));const J=W(b);if(J!==A.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),et[J].usedTimes++;const Ft=et[A.__cacheKey];Ft!==void 0&&(et[A.__cacheKey].usedTimes--,Ft.usedTimes===0&&w(b)),A.__cacheKey=J,A.__webglTexture=et[J].texture}return z}function Z(A,b,z){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const et=xe(A,b),J=b.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+z);const Ft=n.get(J);if(J.version!==Ft.__version||et===!0){e.activeTexture(i.TEXTURE0+z);const dt=pe.getPrimaries(pe.workingColorSpace),bt=b.colorSpace===qi?null:pe.getPrimaries(b.colorSpace),ae=b.colorSpace===qi||dt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let st=_(b.image,!1,s.maxTextureSize);st=Vt(b,st);const wt=r.convert(b.format,b.colorSpace),Ht=r.convert(b.type);let Xt=x(b.internalFormat,wt,Ht,b.colorSpace,b.isVideoTexture);Jt(K,b);let Et;const he=b.mipmaps,ne=b.isVideoTexture!==!0,Te=Ft.__version===void 0||et===!0,N=J.dataReady,pt=I(b,st);if(b.isDepthTexture)Xt=v(b.format===Dr,b.type),Te&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Xt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Xt,st.width,st.height,0,wt,Ht,null));else if(b.isDataTexture)if(he.length>0){ne&&Te&&e.texStorage2D(i.TEXTURE_2D,pt,Xt,he[0].width,he[0].height);for(let $=0,Q=he.length;$<Q;$++)Et=he[$],ne?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,$,Xt,Et.width,Et.height,0,wt,Ht,Et.data);b.generateMipmaps=!1}else ne?(Te&&e.texStorage2D(i.TEXTURE_2D,pt,Xt,st.width,st.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,wt,Ht,st.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,st.width,st.height,0,wt,Ht,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Xt,he[0].width,he[0].height,st.depth);for(let $=0,Q=he.length;$<Q;$++)if(Et=he[$],b.format!==Pn)if(wt!==null)if(ne){if(N)if(b.layerUpdates.size>0){const xt=Tf(Et.width,Et.height,b.format,b.type);for(const gt of b.layerUpdates){const Zt=Et.data.subarray(gt*xt/Et.data.BYTES_PER_ELEMENT,(gt+1)*xt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,gt,Et.width,Et.height,1,wt,Zt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,st.depth,wt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Xt,Et.width,Et.height,st.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,st.depth,wt,Ht,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Xt,Et.width,Et.height,st.depth,0,wt,Ht,Et.data)}else{ne&&Te&&e.texStorage2D(i.TEXTURE_2D,pt,Xt,he[0].width,he[0].height);for(let $=0,Q=he.length;$<Q;$++)Et=he[$],b.format!==Pn?wt!==null?ne?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Xt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Ht,Et.data):e.texImage2D(i.TEXTURE_2D,$,Xt,Et.width,Et.height,0,wt,Ht,Et.data)}else if(b.isDataArrayTexture)if(ne){if(Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Xt,st.width,st.height,st.depth),N)if(b.layerUpdates.size>0){const $=Tf(st.width,st.height,b.format,b.type);for(const Q of b.layerUpdates){const xt=st.data.subarray(Q*$/st.data.BYTES_PER_ELEMENT,(Q+1)*$/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,wt,Ht,xt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,wt,Ht,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,st.width,st.height,st.depth,0,wt,Ht,st.data);else if(b.isData3DTexture)ne?(Te&&e.texStorage3D(i.TEXTURE_3D,pt,Xt,st.width,st.height,st.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,wt,Ht,st.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,st.width,st.height,st.depth,0,wt,Ht,st.data);else if(b.isFramebufferTexture){if(Te)if(ne)e.texStorage2D(i.TEXTURE_2D,pt,Xt,st.width,st.height);else{let $=st.width,Q=st.height;for(let xt=0;xt<pt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Xt,$,Q,0,wt,Ht,null),$>>=1,Q>>=1}}else if(he.length>0){if(ne&&Te){const $=Mt(he[0]);e.texStorage2D(i.TEXTURE_2D,pt,Xt,$.width,$.height)}for(let $=0,Q=he.length;$<Q;$++)Et=he[$],ne?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt,Ht,Et):e.texImage2D(i.TEXTURE_2D,$,Xt,wt,Ht,Et);b.generateMipmaps=!1}else if(ne){if(Te){const $=Mt(st);e.texStorage2D(i.TEXTURE_2D,pt,Xt,$.width,$.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Ht,st)}else e.texImage2D(i.TEXTURE_2D,0,Xt,wt,Ht,st);g(b)&&m(K),Ft.__version=J.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ot(A,b,z){if(b.image.length!==6)return;const K=xe(A,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const J=n.get(et);if(et.version!==J.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const Ft=pe.getPrimaries(pe.workingColorSpace),dt=b.colorSpace===qi?null:pe.getPrimaries(b.colorSpace),bt=b.colorSpace===qi||Ft===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const ae=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let Q=0;Q<6;Q++)!ae&&!st?wt[Q]=_(b.image[Q],!0,s.maxCubemapSize):wt[Q]=st?b.image[Q].image:b.image[Q],wt[Q]=Vt(b,wt[Q]);const Ht=wt[0],Xt=r.convert(b.format,b.colorSpace),Et=r.convert(b.type),he=x(b.internalFormat,Xt,Et,b.colorSpace),ne=b.isVideoTexture!==!0,Te=J.__version===void 0||K===!0,N=et.dataReady;let pt=I(b,Ht);Jt(i.TEXTURE_CUBE_MAP,b);let $;if(ae){ne&&Te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,he,Ht.width,Ht.height);for(let Q=0;Q<6;Q++){$=wt[Q].mipmaps;for(let xt=0;xt<$.length;xt++){const gt=$[xt];b.format!==Pn?Xt!==null?ne?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,gt.width,gt.height,Xt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,he,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,0,0,gt.width,gt.height,Xt,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt,he,gt.width,gt.height,0,Xt,Et,gt.data)}}}else{if($=b.mipmaps,ne&&Te){$.length>0&&pt++;const Q=Mt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,he,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){ne?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,wt[Q].width,wt[Q].height,Xt,Et,wt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,he,wt[Q].width,wt[Q].height,0,Xt,Et,wt[Q].data);for(let xt=0;xt<$.length;xt++){const Zt=$[xt].image[Q].image;ne?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Zt.width,Zt.height,Xt,Et,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,he,Zt.width,Zt.height,0,Xt,Et,Zt.data)}}else{ne?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Xt,Et,wt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,he,Xt,Et,wt[Q]);for(let xt=0;xt<$.length;xt++){const gt=$[xt];ne?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,0,0,Xt,Et,gt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xt+1,he,Xt,Et,gt.image[Q])}}}g(b)&&m(i.TEXTURE_CUBE_MAP),J.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Pt(A,b,z,K,et,J){const Ft=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),bt=x(z.internalFormat,Ft,dt,z.colorSpace),ae=n.get(b),st=n.get(z);if(st.__renderTarget=b,!ae.__hasExternalTextures){const wt=Math.max(1,b.width>>J),Ht=Math.max(1,b.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,bt,wt,Ht,b.depth,0,Ft,dt,null):e.texImage2D(et,J,bt,wt,Ht,0,Ft,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,st.__webglTexture,0,it(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,st.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const K=b.depthTexture,et=K&&K.isDepthTexture?K.type:null,J=v(b.stencilBuffer,et),Ft=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=it(b);St(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,J,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,J,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,J,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,A)}else{const K=b.textures;for(let et=0;et<K.length;et++){const J=K[et],Ft=r.convert(J.format,J.colorSpace),dt=r.convert(J.type),bt=x(J.internalFormat,Ft,dt,J.colorSpace),ae=it(b);z&&St(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,bt,b.width,b.height):St(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,bt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,bt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const et=K.__webglTexture,J=it(b);if(b.depthTexture.format===gr)St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===Dr)St(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function $t(A){const b=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=K}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");kt(b.__webglFramebuffer,A)}else if(z){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),lt(b.__webglDepthbuffer[K],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),lt(b.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,b,z){const K=n.get(A);b!==void 0&&Pt(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&$t(A)}function fe(A){const b=A.texture,z=n.get(A),K=n.get(b);A.addEventListener("dispose",R);const et=A.textures,J=A.isWebGLCubeRenderTarget===!0,Ft=et.length>1;if(Ft||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let bt=0;bt<b.mipmaps.length;bt++)z.__webglFramebuffer[dt][bt]=i.createFramebuffer()}else z.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)z.__webglFramebuffer[dt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let dt=0,bt=et.length;dt<bt;dt++){const ae=n.get(et[dt]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&St(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const bt=et[dt];z.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);const ae=r.convert(bt.format,bt.colorSpace),st=r.convert(bt.type),wt=x(bt.internalFormat,ae,st,bt.colorSpace,A.isXRRenderTarget===!0),Ht=it(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,wt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)Pt(z.__webglFramebuffer[dt][bt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt);else Pt(z.__webglFramebuffer[dt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(b)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let dt=0,bt=et.length;dt<bt;dt++){const ae=et[dt],st=n.get(ae);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),Jt(i.TEXTURE_2D,ae),Pt(z.__webglFramebuffer,A,ae,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),g(ae)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,K.__webglTexture),Jt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)Pt(z.__webglFramebuffer[bt],A,b,i.COLOR_ATTACHMENT0,dt,bt);else Pt(z.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,dt,0);g(b)&&m(dt),e.unbindTexture()}A.depthBuffer&&$t(A)}function tt(A){const b=A.textures;for(let z=0,K=b.length;z<K;z++){const et=b[z];if(g(et)){const J=M(A),Ft=n.get(et).__webglTexture;e.bindTexture(J,Ft),m(J),e.unbindTexture()}}}const rt=[],D=[];function Nt(A){if(A.samples>0){if(St(A)===!1){const b=A.textures,z=A.width,K=A.height;let et=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(A),dt=b.length>1;if(dt)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[bt]);const ae=n.get(b[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,et,i.NEAREST),l===!0&&(rt.length=0,D.length=0,rt.push(i.COLOR_ATTACHMENT0+bt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(rt.push(J),D.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[bt]);const ae=n.get(b[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,ae,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function it(A){return Math.min(s.maxSamples,A.samples)}function St(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ht(A){const b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Vt(A,b){const z=A.colorSpace,K=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==zr&&z!==qi&&(pe.getTransfer(z)===Ee?(K!==Pn||et!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Mt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=Wt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=St}function Dy(i,t){function e(n,s=qi){let r;const o=pe.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Tu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Au)return i.UNSIGNED_SHORT_5_5_5_1;if(n===t0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zp)return i.BYTE;if(n===Qp)return i.SHORT;if(n===Ho)return i.UNSIGNED_SHORT;if(n===Eu)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===e0)return i.ALPHA;if(n===n0)return i.RGB;if(n===Pn)return i.RGBA;if(n===i0)return i.LUMINANCE;if(n===s0)return i.LUMINANCE_ALPHA;if(n===gr)return i.DEPTH_COMPONENT;if(n===Dr)return i.DEPTH_STENCIL;if(n===kl)return i.RED;if(n===Cu)return i.RED_INTEGER;if(n===r0)return i.RG;if(n===Ru)return i.RG_INTEGER;if(n===Pu)return i.RGBA_INTEGER;if(n===ja||n===Ka||n===Ja||n===Za)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_h||n===vh||n===xh||n===yh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_h)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mh||n===bh||n===Sh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mh||n===bh)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sh)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wh||n===Eh||n===Th||n===Ah||n===Ch||n===Rh||n===Ph||n===Fh||n===Dh||n===Lh||n===Ih||n===Uh||n===Nh||n===Oh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wh)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eh)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ch)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ph)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fh)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dh)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lh)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uh)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nh)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===Bh||n===kh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===o0||n===zh||n===Vh||n===Hh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ly extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ve extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iy={type:"move"};class Fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Iy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ny=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new an,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new rn({vertexShader:Uy,fragmentShader:Ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class By extends Vr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=new Oy,g=e.getContextAttributes();let m=null,M=null;const x=[],v=[],I=new nt;let T=null;const R=new yn;R.viewport=new Ue;const F=new yn;F.viewport=new Ue;const w=[R,F],y=new Ly;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ot=x[Z];return ot===void 0&&(ot=new Fc,x[Z]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Z){let ot=x[Z];return ot===void 0&&(ot=new Fc,x[Z]=ot),ot.getGripSpace()},this.getHand=function(Z){let ot=x[Z];return ot===void 0&&(ot=new Fc,x[Z]=ot),ot.getHandSpace()};function k(Z){const ot=v.indexOf(Z.inputSource);if(ot===-1)return;const Pt=x[ot];Pt!==void 0&&(Pt.update(Z.inputSource,Z.frame,c||o),Pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<x.length;Z++){const ot=v[Z];ot!==null&&(v[Z]=null,x[Z].disconnect(ot))}L=null,V=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,s=null,M=null,xe.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Fn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,Pt=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?Dr:gr,Pt=g.stencil?Fr:Us);const kt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Fn(d.textureWidth,d.textureHeight,{format:Pn,type:ni,depthTexture:new M0(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(Z){for(let ot=0;ot<Z.removed.length;ot++){const Pt=Z.removed[ot],lt=v.indexOf(Pt);lt>=0&&(v[lt]=null,x[lt].disconnect(Pt))}for(let ot=0;ot<Z.added.length;ot++){const Pt=Z.added[ot];let lt=v.indexOf(Pt);if(lt===-1){for(let $t=0;$t<x.length;$t++)if($t>=v.length){v.push(Pt),lt=$t;break}else if(v[$t]===null){v[$t]=Pt,lt=$t;break}if(lt===-1)break}const kt=x[lt];kt&&kt.connect(Pt)}}const q=new P,j=new P;function X(Z,ot,Pt){q.setFromMatrixPosition(ot.matrixWorld),j.setFromMatrixPosition(Pt.matrixWorld);const lt=q.distanceTo(j),kt=ot.projectionMatrix.elements,$t=Pt.projectionMatrix.elements,Wt=kt[14]/(kt[10]-1),fe=kt[14]/(kt[10]+1),tt=(kt[9]+1)/kt[5],rt=(kt[9]-1)/kt[5],D=(kt[8]-1)/kt[0],Nt=($t[8]+1)/$t[0],it=Wt*D,St=Wt*Nt,ht=lt/(-D+Nt),Vt=ht*-D;if(ot.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Vt),Z.translateZ(ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),kt[10]===-1)Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Mt=Wt+ht,A=fe+ht,b=it-Vt,z=St+(lt-Vt),K=tt*fe/A*Mt,et=rt*fe/A*Mt;Z.projectionMatrix.makePerspective(b,z,K,et,Mt,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ct(Z,ot){ot===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ot.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ot=Z.near,Pt=Z.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Pt=_.depthFar)),y.near=F.near=R.near=ot,y.far=F.far=R.far=Pt,(L!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,V=y.far),R.layers.mask=Z.layers.mask|2,F.layers.mask=Z.layers.mask|4,y.layers.mask=R.layers.mask|F.layers.mask;const lt=Z.parent,kt=y.cameras;ct(y,lt);for(let $t=0;$t<kt.length;$t++)ct(kt[$t],lt);kt.length===2?X(y,R,F):y.projectionMatrix.copy(R.projectionMatrix),mt(Z,y,lt)};function mt(Z,ot,Pt){Pt===null?Z.matrix.copy(ot.matrixWorld):(Z.matrix.copy(Pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ot.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Gh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let At=null;function Jt(Z,ot){if(h=ot.getViewerPose(c||o),p=ot,h!==null){const Pt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let lt=!1;Pt.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let $t=0;$t<Pt.length;$t++){const Wt=Pt[$t];let fe=null;if(f!==null)fe=f.getViewport(Wt);else{const rt=u.getViewSubImage(d,Wt);fe=rt.viewport,$t===0&&(t.setRenderTargetTextures(M,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(M))}let tt=w[$t];tt===void 0&&(tt=new yn,tt.layers.enable($t),tt.viewport=new Ue,w[$t]=tt),tt.matrix.fromArray(Wt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Wt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(fe.x,fe.y,fe.width,fe.height),$t===0&&(y.matrix.copy(tt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(tt)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const $t=u.getDepthInformation(Pt[0]);$t&&$t.isValid&&$t.texture&&_.init(t,$t,s.renderState)}}for(let Pt=0;Pt<x.length;Pt++){const lt=v[Pt],kt=x[Pt];lt!==null&&kt!==void 0&&kt.update(lt,ot,c||o)}At&&At(Z,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),p=null}const xe=new y0;xe.setAnimationLoop(Jt),this.setAnimationLoop=function(Z){At=Z},this.dispose=function(){}}}const cs=new Dn,ky=new oe;function zy(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,_0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===on&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===on&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=t.get(m),x=M.envMap,v=M.envMapRotation;x&&(g.envMap.value=x,cs.copy(v),cs.x*=-1,cs.y*=-1,cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),g.envMapRotation.value.setFromMatrix4(ky.makeRotationFromEuler(cs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vy(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=s[M.id];v===void 0&&(p(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));const I=x.program;n.updateUBOMapping(M,I);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){const x=u();M.__bindingPointIndex=x;const v=i.createBuffer(),I=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=s[M.id],v=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,R=v.length;T<R;T++){const F=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,y=F.length;w<y;w++){const L=F[w];if(f(L,T,w,I)===!0){const V=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Y=0;Y<k.length;Y++){const q=k[Y],j=_(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,V+W,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,v,I){const T=M.value,R=x+"_"+v;if(I[R]===void 0)return typeof T=="number"||typeof T=="boolean"?I[R]=T:I[R]=T.clone(),!0;{const F=I[R];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return I[R]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function p(M){const x=M.uniforms;let v=0;const I=16;for(let R=0,F=x.length;R<F;R++){const w=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,L=w.length;y<L;y++){const V=w[y],k=Array.isArray(V.value)?V.value:[V.value];for(let W=0,Y=k.length;W<Y;W++){const q=k[W],j=_(q),X=v%I,ct=X%j.boundary,mt=X+ct;v+=ct,mt!==0&&I-mt<j.storage&&(v+=I-mt),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=j.storage}}}const T=v%I;return T>0&&(v+=I-T),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class Hy{constructor(t={}){const{canvas:e=Fg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Mi,this.toneMappingExposure=1;const v=this;let I=!1,T=0,R=0,F=null,w=-1,y=null;const L=new Ue,V=new Ue;let k=null;const W=new vt(0);let Y=0,q=e.width,j=e.height,X=1,ct=null,mt=null;const At=new Ue(0,0,q,j),Jt=new Ue(0,0,q,j);let xe=!1;const Z=new Fu;let ot=!1,Pt=!1;const lt=new oe,kt=new oe,$t=new P,Wt=new Ue,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function rt(){return F===null?X:1}let D=n;function Nt(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Su}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){const O="webgl2";if(D=Nt(O,E),D===null)throw Nt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let it,St,ht,Vt,Mt,A,b,z,K,et,J,Ft,dt,bt,ae,st,wt,Ht,Xt,Et,he,ne,Te,N;function pt(){it=new $1(D),it.init(),ne=new Dy(D,it),St=new V1(D,it,t,ne),ht=new Ry(D,it),St.reverseDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),Vt=new K1(D),Mt=new py,A=new Fy(D,it,ht,Mt,St,ne,Vt),b=new G1(v),z=new q1(v),K=new i_(D),Te=new k1(D,K),et=new Y1(D,K,Vt,Te),J=new Z1(D,et,K,Vt),Xt=new J1(D,St,A),st=new H1(Mt),Ft=new fy(v,b,z,it,St,Te,st),dt=new zy(v,Mt),bt=new gy,ae=new by(it),Ht=new B1(v,b,z,ht,J,f,l),wt=new Ay(v,J,St),N=new Vy(D,Vt,St,ht),Et=new z1(D,it,Vt),he=new j1(D,it,Vt),Vt.programs=Ft.programs,v.capabilities=St,v.extensions=it,v.properties=Mt,v.renderLists=bt,v.shadowMap=wt,v.state=ht,v.info=Vt}pt();const $=new By(v,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(q,j,!1))},this.getSize=function(E){return E.set(q,j)},this.setSize=function(E,O,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,j=O,e.width=Math.floor(E*X),e.height=Math.floor(O*X),H===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(q*X,j*X).floor()},this.setDrawingBufferSize=function(E,O,H){q=E,j=O,X=H,e.width=Math.floor(E*H),e.height=Math.floor(O*H),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(At)},this.setViewport=function(E,O,H,G){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,O,H,G),ht.viewport(L.copy(At).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Jt)},this.setScissor=function(E,O,H,G){E.isVector4?Jt.set(E.x,E.y,E.z,E.w):Jt.set(E,O,H,G),ht.scissor(V.copy(Jt).multiplyScalar(X).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){ht.setScissorTest(xe=E)},this.setOpaqueSort=function(E){ct=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(E=!0,O=!0,H=!0){let G=0;if(E){let B=!1;if(F!==null){const at=F.texture.format;B=at===Pu||at===Ru||at===Cu}if(B){const at=F.texture.type,_t=at===ni||at===Us||at===Ho||at===Fr||at===Tu||at===Au,Lt=Ht.getClearColor(),It=Ht.getClearAlpha(),Yt=Lt.r,Qt=Lt.g,Ut=Lt.b;_t?(p[0]=Yt,p[1]=Qt,p[2]=Ut,p[3]=It,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Yt,_[1]=Qt,_[2]=Ut,_[3]=It,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}O&&(G|=D.DEPTH_BUFFER_BIT),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),bt.dispose(),ae.dispose(),Mt.dispose(),b.dispose(),z.dispose(),J.dispose(),Te.dispose(),N.dispose(),Ft.dispose(),$.dispose(),$.removeEventListener("sessionstart",Md),$.removeEventListener("sessionend",bd),is.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=Vt.autoReset,O=wt.enabled,H=wt.autoUpdate,G=wt.needsUpdate,B=wt.type;pt(),Vt.autoReset=E,wt.enabled=O,wt.autoUpdate=H,wt.needsUpdate=G,wt.type=B}function gt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Zt(E){const O=E.target;O.removeEventListener("dispose",Zt),Ie(O)}function Ie(E){Qe(E),Mt.remove(E)}function Qe(E){const O=Mt.get(E).programs;O!==void 0&&(O.forEach(function(H){Ft.releaseProgram(H)}),E.isShaderMaterial&&Ft.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,H,G,B,at){O===null&&(O=fe);const _t=B.isMesh&&B.matrixWorld.determinant()<0,Lt=zm(E,O,H,G,B);ht.setMaterial(G,_t);let It=H.index,Yt=1;if(G.wireframe===!0){if(It=et.getWireframeAttribute(H),It===void 0)return;Yt=2}const Qt=H.drawRange,Ut=H.attributes.position;let ge=Qt.start*Yt,Ae=(Qt.start+Qt.count)*Yt;at!==null&&(ge=Math.max(ge,at.start*Yt),Ae=Math.min(Ae,(at.start+at.count)*Yt)),It!==null?(ge=Math.max(ge,0),Ae=Math.min(Ae,It.count)):Ut!=null&&(ge=Math.max(ge,0),Ae=Math.min(Ae,Ut.count));const Ce=Ae-ge;if(Ce<0||Ce===1/0)return;Te.setup(B,G,Lt,H,It);let hn,ye=Et;if(It!==null&&(hn=K.get(It),ye=he,ye.setIndex(hn)),B.isMesh)G.wireframe===!0?(ht.setLineWidth(G.wireframeLinewidth*rt()),ye.setMode(D.LINES)):ye.setMode(D.TRIANGLES);else if(B.isLine){let Ot=G.linewidth;Ot===void 0&&(Ot=1),ht.setLineWidth(Ot*rt()),B.isLineSegments?ye.setMode(D.LINES):B.isLineLoop?ye.setMode(D.LINE_LOOP):ye.setMode(D.LINE_STRIP)}else B.isPoints?ye.setMode(D.POINTS):B.isSprite&&ye.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ye.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ye.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ot=B._multiDrawStarts,ai=B._multiDrawCounts,Me=B._multiDrawCount,In=It?K.get(It).bytesPerElement:1,zs=Mt.get(G).currentProgram.getUniforms();for(let gn=0;gn<Me;gn++)zs.setValue(D,"_gl_DrawID",gn),ye.render(Ot[gn]/In,ai[gn])}else if(B.isInstancedMesh)ye.renderInstances(ge,Ce,B.count);else if(H.isInstancedBufferGeometry){const Ot=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ai=Math.min(H.instanceCount,Ot);ye.renderInstances(ge,Ce,ai)}else ye.render(ge,Ce)};function Se(E,O,H){E.transparent===!0&&E.side===Vn&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,la(E,O,H),E.side=ei,E.needsUpdate=!0,la(E,O,H),E.side=Vn):la(E,O,H)}this.compile=function(E,O,H=null){H===null&&(H=E),m=ae.get(H),m.init(O),x.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const G=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const at=B.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const Lt=at[_t];Se(Lt,H,B),G.add(Lt)}else Se(at,H,B),G.add(at)}),x.pop(),m=null,G},this.compileAsync=function(E,O,H=null){const G=this.compile(E,O,H);return new Promise(B=>{function at(){if(G.forEach(function(_t){Mt.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){B(E);return}setTimeout(at,10)}it.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Ln=null;function oi(E){Ln&&Ln(E)}function Md(){is.stop()}function bd(){is.start()}const is=new y0;is.setAnimationLoop(oi),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(E){Ln=E,$.setAnimationLoop(E),E===null?is.stop():is.start()},$.addEventListener("sessionstart",Md),$.addEventListener("sessionend",bd),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,F),m=ae.get(E,x.length),m.init(O),x.push(m),kt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(kt),Pt=this.localClippingEnabled,ot=st.init(this.clippingPlanes,Pt),g=bt.get(E,M.length),g.init(),M.push(g),$.enabled===!0&&$.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&ec(at,O,-1/0,v.sortObjects)}ec(E,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ct,mt),tt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,tt&&Ht.addToRenderList(g,E),this.info.render.frame++,ot===!0&&st.beginShadows();const H=m.state.shadowsArray;wt.render(H,E,O),ot===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,B=g.transmissive;if(m.setupLights(),O.isArrayCamera){const at=O.cameras;if(B.length>0)for(let _t=0,Lt=at.length;_t<Lt;_t++){const It=at[_t];wd(G,B,E,It)}tt&&Ht.render(E);for(let _t=0,Lt=at.length;_t<Lt;_t++){const It=at[_t];Sd(g,E,It,It.viewport)}}else B.length>0&&wd(G,B,E,O),tt&&Ht.render(E),Sd(g,E,O);F!==null&&(A.updateMultisampleRenderTarget(F),A.updateRenderTargetMipmap(F)),E.isScene===!0&&E.onAfterRender(v,E,O),Te.resetDefaultState(),w=-1,y=null,x.pop(),x.length>0?(m=x[x.length-1],ot===!0&&st.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function ec(E,O,H,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){G&&Wt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(kt);const _t=J.update(E),Lt=E.material;Lt.visible&&g.push(E,_t,Lt,H,Wt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){const _t=J.update(E),Lt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Wt.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Wt.copy(_t.boundingSphere.center)),Wt.applyMatrix4(E.matrixWorld).applyMatrix4(kt)),Array.isArray(Lt)){const It=_t.groups;for(let Yt=0,Qt=It.length;Yt<Qt;Yt++){const Ut=It[Yt],ge=Lt[Ut.materialIndex];ge&&ge.visible&&g.push(E,_t,ge,H,Wt.z,Ut)}}else Lt.visible&&g.push(E,_t,Lt,H,Wt.z,null)}}const at=E.children;for(let _t=0,Lt=at.length;_t<Lt;_t++)ec(at[_t],O,H,G)}function Sd(E,O,H,G){const B=E.opaque,at=E.transmissive,_t=E.transparent;m.setupLightsView(H),ot===!0&&st.setGlobalState(v.clippingPlanes,H),G&&ht.viewport(L.copy(G)),B.length>0&&aa(B,O,H),at.length>0&&aa(at,O,H),_t.length>0&&aa(_t,O,H),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function wd(E,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Fn(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Qn:ni,minFilter:Ts,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const at=m.state.transmissionRenderTarget[G.id],_t=G.viewport||L;at.setSize(_t.z,_t.w);const Lt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(W),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),tt&&Ht.render(H);const It=v.toneMapping;v.toneMapping=Mi;const Yt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),ot===!0&&st.setGlobalState(v.clippingPlanes,G),aa(E,H,G),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),it.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Ut=0,ge=O.length;Ut<ge;Ut++){const Ae=O[Ut],Ce=Ae.object,hn=Ae.geometry,ye=Ae.material,Ot=Ae.group;if(ye.side===Vn&&Ce.layers.test(G.layers)){const ai=ye.side;ye.side=on,ye.needsUpdate=!0,Ed(Ce,H,G,hn,ye,Ot),ye.side=ai,ye.needsUpdate=!0,Qt=!0}}Qt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}v.setRenderTarget(Lt),v.setClearColor(W,Y),Yt!==void 0&&(G.viewport=Yt),v.toneMapping=It}function aa(E,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let B=0,at=E.length;B<at;B++){const _t=E[B],Lt=_t.object,It=_t.geometry,Yt=G===null?_t.material:G,Qt=_t.group;Lt.layers.test(H.layers)&&Ed(Lt,O,H,It,Yt,Qt)}}function Ed(E,O,H,G,B,at){E.onBeforeRender(v,O,H,G,B,at),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,O,H,G,E,at),B.transparent===!0&&B.side===Vn&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,v.renderBufferDirect(H,O,G,B,E,at),B.side=ei,B.needsUpdate=!0,v.renderBufferDirect(H,O,G,B,E,at),B.side=Vn):v.renderBufferDirect(H,O,G,B,E,at),E.onAfterRender(v,O,H,G,B,at)}function la(E,O,H){O.isScene!==!0&&(O=fe);const G=Mt.get(E),B=m.state.lights,at=m.state.shadowsArray,_t=B.state.version,Lt=Ft.getParameters(E,B.state,at,O,H),It=Ft.getProgramCacheKey(Lt);let Yt=G.programs;G.environment=E.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(E.isMeshStandardMaterial?z:b).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Yt===void 0&&(E.addEventListener("dispose",Zt),Yt=new Map,G.programs=Yt);let Qt=Yt.get(It);if(Qt!==void 0){if(G.currentProgram===Qt&&G.lightsStateVersion===_t)return Ad(E,Lt),Qt}else Lt.uniforms=Ft.getUniforms(E),E.onBeforeCompile(Lt,v),Qt=Ft.acquireProgram(Lt,It),Yt.set(It,Qt),G.uniforms=Lt.uniforms;const Ut=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=st.uniform),Ad(E,Lt),G.needsLights=Hm(E),G.lightsStateVersion=_t,G.needsLights&&(Ut.ambientLightColor.value=B.state.ambient,Ut.lightProbe.value=B.state.probe,Ut.directionalLights.value=B.state.directional,Ut.directionalLightShadows.value=B.state.directionalShadow,Ut.spotLights.value=B.state.spot,Ut.spotLightShadows.value=B.state.spotShadow,Ut.rectAreaLights.value=B.state.rectArea,Ut.ltc_1.value=B.state.rectAreaLTC1,Ut.ltc_2.value=B.state.rectAreaLTC2,Ut.pointLights.value=B.state.point,Ut.pointLightShadows.value=B.state.pointShadow,Ut.hemisphereLights.value=B.state.hemi,Ut.directionalShadowMap.value=B.state.directionalShadowMap,Ut.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ut.spotShadowMap.value=B.state.spotShadowMap,Ut.spotLightMatrix.value=B.state.spotLightMatrix,Ut.spotLightMap.value=B.state.spotLightMap,Ut.pointShadowMap.value=B.state.pointShadowMap,Ut.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Qt,G.uniformsList=null,Qt}function Td(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=tl.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Ad(E,O){const H=Mt.get(E);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function zm(E,O,H,G,B){O.isScene!==!0&&(O=fe),A.resetTextureUnits();const at=O.fog,_t=G.isMeshStandardMaterial?O.environment:null,Lt=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:zr,It=(G.isMeshStandardMaterial?z:b).get(G.envMap||_t),Yt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Qt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ut=!!H.morphAttributes.position,ge=!!H.morphAttributes.normal,Ae=!!H.morphAttributes.color;let Ce=Mi;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ce=v.toneMapping);const hn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ye=hn!==void 0?hn.length:0,Ot=Mt.get(G),ai=m.state.lights;if(ot===!0&&(Pt===!0||E!==y)){const wn=E===y&&G.id===w;st.setState(G,E,wn)}let Me=!1;G.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==ai.state.version||Ot.outputColorSpace!==Lt||B.isBatchedMesh&&Ot.batching===!1||!B.isBatchedMesh&&Ot.batching===!0||B.isBatchedMesh&&Ot.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ot.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ot.instancing===!1||!B.isInstancedMesh&&Ot.instancing===!0||B.isSkinnedMesh&&Ot.skinning===!1||!B.isSkinnedMesh&&Ot.skinning===!0||B.isInstancedMesh&&Ot.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ot.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ot.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ot.instancingMorph===!1&&B.morphTexture!==null||Ot.envMap!==It||G.fog===!0&&Ot.fog!==at||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==st.numPlanes||Ot.numIntersection!==st.numIntersection)||Ot.vertexAlphas!==Yt||Ot.vertexTangents!==Qt||Ot.morphTargets!==Ut||Ot.morphNormals!==ge||Ot.morphColors!==Ae||Ot.toneMapping!==Ce||Ot.morphTargetsCount!==ye)&&(Me=!0):(Me=!0,Ot.__version=G.version);let In=Ot.currentProgram;Me===!0&&(In=la(G,O,B));let zs=!1,gn=!1,Yr=!1;const Re=In.getUniforms(),Gn=Ot.uniforms;if(ht.useProgram(In.program)&&(zs=!0,gn=!0,Yr=!0),G.id!==w&&(w=G.id,gn=!0),zs||y!==E){ht.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),Lg(lt),Ig(lt),Re.setValue(D,"projectionMatrix",lt)):Re.setValue(D,"projectionMatrix",E.projectionMatrix),Re.setValue(D,"viewMatrix",E.matrixWorldInverse);const Ci=Re.map.cameraPosition;Ci!==void 0&&Ci.setValue(D,$t.setFromMatrixPosition(E.matrixWorld)),St.logarithmicDepthBuffer&&Re.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Re.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,gn=!0,Yr=!0)}if(B.isSkinnedMesh){Re.setOptional(D,B,"bindMatrix"),Re.setOptional(D,B,"bindMatrixInverse");const wn=B.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Re.setValue(D,"boneTexture",wn.boneTexture,A))}B.isBatchedMesh&&(Re.setOptional(D,B,"batchingTexture"),Re.setValue(D,"batchingTexture",B._matricesTexture,A),Re.setOptional(D,B,"batchingIdTexture"),Re.setValue(D,"batchingIdTexture",B._indirectTexture,A),Re.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Re.setValue(D,"batchingColorTexture",B._colorsTexture,A));const jr=H.morphAttributes;if((jr.position!==void 0||jr.normal!==void 0||jr.color!==void 0)&&Xt.update(B,H,In),(gn||Ot.receiveShadow!==B.receiveShadow)&&(Ot.receiveShadow=B.receiveShadow,Re.setValue(D,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Gn.envMap.value=It,Gn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Gn.envMapIntensity.value=O.environmentIntensity),gn&&(Re.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Vm(Gn,Yr),at&&G.fog===!0&&dt.refreshFogUniforms(Gn,at),dt.refreshMaterialUniforms(Gn,G,X,j,m.state.transmissionRenderTarget[E.id]),tl.upload(D,Td(Ot),Gn,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(tl.upload(D,Td(Ot),Gn,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Re.setValue(D,"center",B.center),Re.setValue(D,"modelViewMatrix",B.modelViewMatrix),Re.setValue(D,"normalMatrix",B.normalMatrix),Re.setValue(D,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wn=G.uniformsGroups;for(let Ci=0,Ri=wn.length;Ci<Ri;Ci++){const Cd=wn[Ci];N.update(Cd,In),N.bind(Cd,In)}}return In}function Vm(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Hm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,O,H){Mt.get(E.texture).__webglTexture=O,Mt.get(E.depthTexture).__webglTexture=H;const G=Mt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const H=Mt.get(E);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,H=0){F=E,T=O,R=H;let G=!0,B=null,at=!1,_t=!1;if(E){const It=Mt.get(E);if(It.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(It.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(It.__hasExternalTextures)A.rebindTextures(E,Mt.get(E.texture).__webglTexture,Mt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(It.__boundDepthTexture!==Ut){if(Ut!==null&&Mt.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Yt=E.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(_t=!0);const Qt=Mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qt[O])?B=Qt[O][H]:B=Qt[O],at=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?B=Mt.get(E).__webglMultisampledFramebuffer:Array.isArray(Qt)?B=Qt[H]:B=Qt,L.copy(E.viewport),V.copy(E.scissor),k=E.scissorTest}else L.copy(At).multiplyScalar(X).floor(),V.copy(Jt).multiplyScalar(X).floor(),k=xe;if(ht.bindFramebuffer(D.FRAMEBUFFER,B)&&G&&ht.drawBuffers(E,B),ht.viewport(L),ht.scissor(V),ht.setScissorTest(k),at){const It=Mt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,It.__webglTexture,H)}else if(_t){const It=Mt.get(E.texture),Yt=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,H||0,Yt)}w=-1},this.readRenderTargetPixels=function(E,O,H,G,B,at,_t){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Lt=Lt[_t]),Lt){ht.bindFramebuffer(D.FRAMEBUFFER,Lt);try{const It=E.texture,Yt=It.format,Qt=It.type;if(!St.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&H>=0&&H<=E.height-B&&D.readPixels(O,H,G,B,ne.convert(Yt),ne.convert(Qt),at)}finally{const It=F!==null?Mt.get(F).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,O,H,G,B,at,_t){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Lt=Lt[_t]),Lt){const It=E.texture,Yt=It.format,Qt=It.type;if(!St.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-G&&H>=0&&H<=E.height-B){ht.bindFramebuffer(D.FRAMEBUFFER,Lt);const Ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),D.readPixels(O,H,G,B,ne.convert(Yt),ne.convert(Qt),0);const ge=F!==null?Mt.get(F).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,ge);const Ae=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Dg(D,Ae,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(Ut),D.deleteSync(Ae),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,H=0){E.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-H),B=Math.floor(E.image.width*G),at=Math.floor(E.image.height*G),_t=O!==null?O.x:0,Lt=O!==null?O.y:0;A.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,_t,Lt,B,at),ht.unbindTexture()},this.copyTextureToTexture=function(E,O,H=null,G=null,B=0){E.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],O=arguments[2],B=arguments[3]||0,H=null);let at,_t,Lt,It,Yt,Qt,Ut,ge,Ae;const Ce=E.isCompressedTexture?E.mipmaps[B]:E.image;H!==null?(at=H.max.x-H.min.x,_t=H.max.y-H.min.y,Lt=H.isBox3?H.max.z-H.min.z:1,It=H.min.x,Yt=H.min.y,Qt=H.isBox3?H.min.z:0):(at=Ce.width,_t=Ce.height,Lt=Ce.depth||1,It=0,Yt=0,Qt=0),G!==null?(Ut=G.x,ge=G.y,Ae=G.z):(Ut=0,ge=0,Ae=0);const hn=ne.convert(O.format),ye=ne.convert(O.type);let Ot;O.isData3DTexture?(A.setTexture3D(O,0),Ot=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Ot=D.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Ot=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const ai=D.getParameter(D.UNPACK_ROW_LENGTH),Me=D.getParameter(D.UNPACK_IMAGE_HEIGHT),In=D.getParameter(D.UNPACK_SKIP_PIXELS),zs=D.getParameter(D.UNPACK_SKIP_ROWS),gn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,It),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qt);const Yr=E.isDataArrayTexture||E.isData3DTexture,Re=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Gn=Mt.get(E),jr=Mt.get(O),wn=Mt.get(Gn.__renderTarget),Ci=Mt.get(jr.__renderTarget);ht.bindFramebuffer(D.READ_FRAMEBUFFER,wn.__webglFramebuffer),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ri=0;Ri<Lt;Ri++)Yr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(E).__webglTexture,B,Qt+Ri),E.isDepthTexture?(Re&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.get(O).__webglTexture,B,Ae+Ri),D.blitFramebuffer(It,Yt,at,_t,Ut,ge,at,_t,D.DEPTH_BUFFER_BIT,D.NEAREST)):Re?D.copyTexSubImage3D(Ot,B,Ut,ge,Ae+Ri,It,Yt,at,_t):D.copyTexSubImage2D(Ot,B,Ut,ge,Ae+Ri,It,Yt,at,_t);ht.bindFramebuffer(D.READ_FRAMEBUFFER,null),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Re?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ot,B,Ut,ge,Ae,at,_t,Lt,hn,ye,Ce.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,B,Ut,ge,Ae,at,_t,Lt,hn,Ce.data):D.texSubImage3D(Ot,B,Ut,ge,Ae,at,_t,Lt,hn,ye,Ce):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Ut,ge,at,_t,hn,ye,Ce.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Ut,ge,Ce.width,Ce.height,hn,Ce.data):D.texSubImage2D(D.TEXTURE_2D,B,Ut,ge,at,_t,hn,ye,Ce);D.pixelStorei(D.UNPACK_ROW_LENGTH,ai),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me),D.pixelStorei(D.UNPACK_SKIP_PIXELS,In),D.pixelStorei(D.UNPACK_SKIP_ROWS,zs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gn),B===0&&O.generateMipmaps&&D.generateMipmap(Ot),ht.unbindTexture()},this.copyTextureToTexture3D=function(E,O,H=null,G=null,B=0){return E.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],O=arguments[3],B=arguments[4]||0),mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,H,G,B)},this.initRenderTarget=function(E){Mt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ht.unbindTexture()},this.resetState=function(){T=0,R=0,F=null,ht.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}class Lu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new vt(t),this.near=e,this.far=n}clone(){return new Lu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xh extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Iu extends an{constructor(t=null,e=1,n=1,s,r,o,a,l,c=cn,h=cn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Af extends Be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const er=new oe,Cf=new oe,Pa=[],Rf=new Bs,Gy=new oe,eo=new me,no=new Gr;class Mn extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Af(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gy)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),Rf.copy(t.boundingBox).applyMatrix4(er),this.boundingBox.union(Rf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),no.copy(t.boundingSphere).applyMatrix4(er),this.boundingSphere.union(no)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(n),t.ray.intersectsSphere(no)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),Cf.multiplyMatrices(n,er),eo.matrixWorld=Cf,eo.raycast(t,Pa);for(let o=0,a=Pa.length;o<a;o++){const l=Pa[o];l.instanceId=r,l.object=this,e.push(l)}Pa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Af(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Iu(new Float32Array(s*this.count),s,this.count,kl,Kn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Wy extends Wr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pf=new oe,qh=new d0,Fa=new Gr,Da=new P;class Xy extends Ke{constructor(t=new Le,e=new Wy){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,t.ray.intersectsSphere(Fa)===!1)return;Pf.copy(s).invert(),qh.copy(t.ray).applyMatrix4(Pf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const g=c.getX(p);Da.fromBufferAttribute(u,g),Ff(Da,g,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Da.fromBufferAttribute(u,p),Ff(Da,p,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ff(i,t,e,n,s,r,o){const a=qh.distanceSqToPoint(i);if(a<e){const l=new P;qh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ea extends an{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],o=[],a=new P,l=new oe;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ze(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Uu extends ri{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qy extends Uu{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const La=new P,Dc=new Nu,Lc=new Nu,Ic=new Nu;class T0 extends ri{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(La.subVectors(s[0],s[1]).add(s[0]),c=La);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(La.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=La),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Dc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,g),Lc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,g),Ic.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Lc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ic.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Dc.calc(l),Lc.calc(l),Ic.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Df(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function $y(i,t){const e=1-i;return e*e*t}function Yy(i,t){return 2*(1-i)*i*t}function jy(i,t){return i*i*t}function So(i,t,e,n){return $y(i,t)+Yy(i,e)+jy(i,n)}function Ky(i,t){const e=1-i;return e*e*e*t}function Jy(i,t){const e=1-i;return 3*e*e*i*t}function Zy(i,t){return 3*(1-i)*i*i*t}function Qy(i,t){return i*i*i*t}function wo(i,t,e,n,s){return Ky(i,t)+Jy(i,e)+Zy(i,n)+Qy(i,s)}class A0 extends ri{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wo(t,s.x,r.x,o.x,a.x),wo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tM extends ri{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wo(t,s.x,r.x,o.x,a.x),wo(t,s.y,r.y,o.y,a.y),wo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class C0 extends ri{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eM extends ri{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R0 extends ri{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(So(t,s.x,r.x,o.x),So(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P0 extends ri{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(So(t,s.x,r.x,o.x),So(t,s.y,r.y,o.y),So(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class F0 extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Df(a,l.x,c.x,h.x,u.x),Df(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var gl=Object.freeze({__proto__:null,ArcCurve:qy,CatmullRomCurve3:T0,CubicBezierCurve:A0,CubicBezierCurve3:tM,EllipseCurve:Uu,LineCurve:C0,LineCurve3:eM,QuadraticBezierCurve:R0,QuadraticBezierCurve3:P0,SplineCurve:F0});class nM extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new gl[s.type]().fromJSON(s))}return this}}class _l extends nM{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new C0(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new R0(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new A0(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new F0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Uu(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class na extends Le{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ze(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new P,d=new nt,f=new P,p=new P,_=new P;let g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let M=0;M<=e;M++){const x=n+M*h*s,v=Math.sin(x),I=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*I,o.push(u.x,u.y,u.z),d.x=M/e,d.y=T/(t.length-1),a.push(d.x,d.y);const R=l[3*T+0]*v,F=l[3*T+1],w=l[3*T+0]*I;c.push(R,F,w)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const v=x+M*t.length,I=v,T=v+t.length,R=v+t.length+1,F=v+1;r.push(I,T,F),r.push(R,F,T)}this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("uv",new re(a,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.points,t.segments,t.phiStart,t.phiLength)}}class Ou extends na{constructor(t=1,e=1,n=4,s=8){const r=new _l;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ou(t.radius,t.length,t.capSegments,t.radialSegments)}}class Bu extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new P,h=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(a,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ki extends Le{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function M(){const v=new P,I=new P;let T=0;const R=(e-t)/n;for(let F=0;F<=r;F++){const w=[],y=F/r,L=y*(e-t)+t;for(let V=0;V<=s;V++){const k=V/s,W=k*l+a,Y=Math.sin(W),q=Math.cos(W);I.x=L*Y,I.y=-y*n+g,I.z=L*q,u.push(I.x,I.y,I.z),v.set(Y,R,q).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-y),w.push(p++)}_.push(w)}for(let F=0;F<s;F++)for(let w=0;w<r;w++){const y=_[w][F],L=_[w+1][F],V=_[w+1][F+1],k=_[w][F+1];(t>0||w!==0)&&(h.push(y,L,k),T+=3),(e>0||w!==r-1)&&(h.push(L,V,k),T+=3)}c.addGroup(m,T,0),m+=T}function x(v){const I=p,T=new nt,R=new P;let F=0;const w=v===!0?t:e,y=v===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),p++;const L=p;for(let V=0;V<=s;V++){const W=V/s*l+a,Y=Math.cos(W),q=Math.sin(W);R.x=w*q,R.y=g*y,R.z=w*Y,u.push(R.x,R.y,R.z),d.push(0,y,0),T.x=Y*.5+.5,T.y=q*.5*y+.5,f.push(T.x,T.y),p++}for(let V=0;V<s;V++){const k=I+V,W=L+V;v===!0?h.push(W,W+1,k):h.push(W+1,W,k),F+=3}c.addGroup(m,F,v===!0?1:2),m+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gl extends Ki{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Gl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wl extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new P,v=new P,I=new P;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],v),f(e[T+2],I),l(x,v,I,M)}function l(M,x,v,I){const T=I+1,R=[];for(let F=0;F<=T;F++){R[F]=[];const w=M.clone().lerp(v,F/T),y=x.clone().lerp(v,F/T),L=T-F;for(let V=0;V<=L;V++)V===0&&F===T?R[F][V]=w:R[F][V]=w.clone().lerp(y,V/L)}for(let F=0;F<T;F++)for(let w=0;w<2*(T-F)-1;w++){const y=Math.floor(w/2);w%2===0?(d(R[F][y+1]),d(R[F+1][y]),d(R[F][y])):(d(R[F][y+1]),d(R[F+1][y+1]),d(R[F+1][y]))}}function c(M){const x=new P;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(M),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const M=new P;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const v=g(M)/2/Math.PI+.5,I=m(M)/Math.PI+.5;o.push(v,1-I)}p(),u()}function u(){for(let M=0;M<o.length;M+=6){const x=o[M+0],v=o[M+2],I=o[M+4],T=Math.max(x,v,I),R=Math.min(x,v,I);T>.9&&R<.1&&(x<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function p(){const M=new P,x=new P,v=new P,I=new P,T=new nt,R=new nt,F=new nt;for(let w=0,y=0;w<r.length;w+=9,y+=6){M.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),T.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),F.set(o[y+4],o[y+5]),I.copy(M).add(x).add(v).divideScalar(3);const L=g(I);_(T,y+0,M,L),_(R,y+2,x,L),_(F,y+4,v,L)}}function _(M,x,v,I){I<0&&M.x===1&&(o[x]=M.x-1),v.x===0&&v.z===0&&(o[x]=I/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.vertices,t.indices,t.radius,t.details)}}class Xl extends Wl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xl(t.radius,t.detail)}}class Ji extends _l{constructor(t){super(t),this.uuid=Hr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new _l().fromJSON(s))}return this}}const iM={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=D0(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=lM(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let p=e;p<s;p+=e)u=i[p],d=i[p+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Wo(r,o,e,a,l,f,0),o}};function D0(i,t,e,n,s){let r,o;if(s===xM(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Lf(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Lf(r,i[r],i[r+1],o);return o&&ql(o,o.next)&&(qo(o),o=o.next),o}function Ns(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ql(e,e.next)||De(e.prev,e,e.next)===0)){if(qo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&fM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?rM(i,n,s,r):sM(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),qo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=oM(Ns(i),t,e),Wo(i,t,e,n,s,r,2)):o===2&&aM(i,t,e,n,s,r):Wo(Ns(i),t,e,n,s,r,1);break}}}function sM(i){const t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ur(s,a,r,l,o,c,p.x,p.y)&&De(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function rM(i,t,e,n){const s=i.prev,r=i,o=i.next;if(De(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=$h(f,p,t,e,n),M=$h(_,g,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=m&&v&&v.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&ur(a,h,l,u,c,d,x.x,x.y)&&De(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ur(a,h,l,u,c,d,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&ur(a,h,l,u,c,d,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=g&&v!==s&&v!==o&&ur(a,h,l,u,c,d,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function oM(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ql(s,r)&&L0(s,n,n.next,r)&&Xo(s,r)&&Xo(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),qo(n),qo(n.next),n=i=r),n=n.next}while(n!==i);return Ns(n)}function aM(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&gM(o,a)){let l=I0(o,a);o=Ns(o,o.next),l=Ns(l,l.next),Wo(o,t,e,n,s,r,0),Wo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function lM(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=D0(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(mM(c));for(s.sort(cM),r=0;r<s.length;r++)e=hM(s[r],e);return e}function cM(i,t){return i.x-t.x}function hM(i,t){const e=uM(i,t);if(!e)return t;const n=I0(e,i);return Ns(n,n.next),Ns(e,e.next)}function uM(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ur(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Xo(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&dM(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function dM(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function fM(i,t,e,n){let s=i;do s.z===0&&(s.z=$h(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pM(s)}function pM(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function $h(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function mM(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ur(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function gM(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!_M(i,t)&&(Xo(i,t)&&Xo(t,i)&&vM(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||ql(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ql(i,t){return i.x===t.x&&i.y===t.y}function L0(i,t,e,n){const s=Ua(De(i,t,e)),r=Ua(De(i,t,n)),o=Ua(De(e,n,i)),a=Ua(De(e,n,t));return!!(s!==r&&o!==a||s===0&&Ia(i,e,t)||r===0&&Ia(i,n,t)||o===0&&Ia(e,i,n)||a===0&&Ia(e,t,n))}function Ia(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ua(i){return i>0?1:i<0?-1:0}function _M(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&L0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xo(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function vM(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function I0(i,t){const e=new Yh(i.i,i.x,i.y),n=new Yh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lf(i,t,e,n){const s=new Yh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xM(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Zi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Zi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];If(t),Uf(n,t);let o=t.length;e.forEach(If);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Uf(n,e[l]);const a=iM.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function If(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $l extends Le{constructor(t=new Ji([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:yM;let x,v=!1,I,T,R,F;m&&(x=m.getSpacedPoints(h),v=!0,d=!1,I=m.computeFrenetFrames(h,!1),T=new P,R=new P,F=new P),d||(g=0,f=0,p=0,_=0);const w=a.extractPoints(c);let y=w.shape;const L=w.holes;if(!Zi.isClockWise(y)){y=y.reverse();for(let tt=0,rt=L.length;tt<rt;tt++){const D=L[tt];Zi.isClockWise(D)&&(L[tt]=D.reverse())}}const k=Zi.triangulateShape(y,L),W=y;for(let tt=0,rt=L.length;tt<rt;tt++){const D=L[tt];y=y.concat(D)}function Y(tt,rt,D){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(rt,D)}const q=y.length,j=k.length;function X(tt,rt,D){let Nt,it,St;const ht=tt.x-rt.x,Vt=tt.y-rt.y,Mt=D.x-tt.x,A=D.y-tt.y,b=ht*ht+Vt*Vt,z=ht*A-Vt*Mt;if(Math.abs(z)>Number.EPSILON){const K=Math.sqrt(b),et=Math.sqrt(Mt*Mt+A*A),J=rt.x-Vt/K,Ft=rt.y+ht/K,dt=D.x-A/et,bt=D.y+Mt/et,ae=((dt-J)*A-(bt-Ft)*Mt)/(ht*A-Vt*Mt);Nt=J+ht*ae-tt.x,it=Ft+Vt*ae-tt.y;const st=Nt*Nt+it*it;if(st<=2)return new nt(Nt,it);St=Math.sqrt(st/2)}else{let K=!1;ht>Number.EPSILON?Mt>Number.EPSILON&&(K=!0):ht<-Number.EPSILON?Mt<-Number.EPSILON&&(K=!0):Math.sign(Vt)===Math.sign(A)&&(K=!0),K?(Nt=-Vt,it=ht,St=Math.sqrt(b)):(Nt=ht,it=Vt,St=Math.sqrt(b/2))}return new nt(Nt/St,it/St)}const ct=[];for(let tt=0,rt=W.length,D=rt-1,Nt=tt+1;tt<rt;tt++,D++,Nt++)D===rt&&(D=0),Nt===rt&&(Nt=0),ct[tt]=X(W[tt],W[D],W[Nt]);const mt=[];let At,Jt=ct.concat();for(let tt=0,rt=L.length;tt<rt;tt++){const D=L[tt];At=[];for(let Nt=0,it=D.length,St=it-1,ht=Nt+1;Nt<it;Nt++,St++,ht++)St===it&&(St=0),ht===it&&(ht=0),At[Nt]=X(D[Nt],D[St],D[ht]);mt.push(At),Jt=Jt.concat(At)}for(let tt=0;tt<g;tt++){const rt=tt/g,D=f*Math.cos(rt*Math.PI/2),Nt=p*Math.sin(rt*Math.PI/2)+_;for(let it=0,St=W.length;it<St;it++){const ht=Y(W[it],ct[it],Nt);lt(ht.x,ht.y,-D)}for(let it=0,St=L.length;it<St;it++){const ht=L[it];At=mt[it];for(let Vt=0,Mt=ht.length;Vt<Mt;Vt++){const A=Y(ht[Vt],At[Vt],Nt);lt(A.x,A.y,-D)}}}const xe=p+_;for(let tt=0;tt<q;tt++){const rt=d?Y(y[tt],Jt[tt],xe):y[tt];v?(R.copy(I.normals[0]).multiplyScalar(rt.x),T.copy(I.binormals[0]).multiplyScalar(rt.y),F.copy(x[0]).add(R).add(T),lt(F.x,F.y,F.z)):lt(rt.x,rt.y,0)}for(let tt=1;tt<=h;tt++)for(let rt=0;rt<q;rt++){const D=d?Y(y[rt],Jt[rt],xe):y[rt];v?(R.copy(I.normals[tt]).multiplyScalar(D.x),T.copy(I.binormals[tt]).multiplyScalar(D.y),F.copy(x[tt]).add(R).add(T),lt(F.x,F.y,F.z)):lt(D.x,D.y,u/h*tt)}for(let tt=g-1;tt>=0;tt--){const rt=tt/g,D=f*Math.cos(rt*Math.PI/2),Nt=p*Math.sin(rt*Math.PI/2)+_;for(let it=0,St=W.length;it<St;it++){const ht=Y(W[it],ct[it],Nt);lt(ht.x,ht.y,u+D)}for(let it=0,St=L.length;it<St;it++){const ht=L[it];At=mt[it];for(let Vt=0,Mt=ht.length;Vt<Mt;Vt++){const A=Y(ht[Vt],At[Vt],Nt);v?lt(A.x,A.y+x[h-1].y,x[h-1].x+D):lt(A.x,A.y,u+D)}}}Z(),ot();function Z(){const tt=s.length/3;if(d){let rt=0,D=q*rt;for(let Nt=0;Nt<j;Nt++){const it=k[Nt];kt(it[2]+D,it[1]+D,it[0]+D)}rt=h+g*2,D=q*rt;for(let Nt=0;Nt<j;Nt++){const it=k[Nt];kt(it[0]+D,it[1]+D,it[2]+D)}}else{for(let rt=0;rt<j;rt++){const D=k[rt];kt(D[2],D[1],D[0])}for(let rt=0;rt<j;rt++){const D=k[rt];kt(D[0]+q*h,D[1]+q*h,D[2]+q*h)}}n.addGroup(tt,s.length/3-tt,0)}function ot(){const tt=s.length/3;let rt=0;Pt(W,rt),rt+=W.length;for(let D=0,Nt=L.length;D<Nt;D++){const it=L[D];Pt(it,rt),rt+=it.length}n.addGroup(tt,s.length/3-tt,1)}function Pt(tt,rt){let D=tt.length;for(;--D>=0;){const Nt=D;let it=D-1;it<0&&(it=tt.length-1);for(let St=0,ht=h+g*2;St<ht;St++){const Vt=q*St,Mt=q*(St+1),A=rt+Nt+Vt,b=rt+it+Vt,z=rt+it+Mt,K=rt+Nt+Mt;$t(A,b,z,K)}}}function lt(tt,rt,D){l.push(tt),l.push(rt),l.push(D)}function kt(tt,rt,D){Wt(tt),Wt(rt),Wt(D);const Nt=s.length/3,it=M.generateTopUV(n,s,Nt-3,Nt-2,Nt-1);fe(it[0]),fe(it[1]),fe(it[2])}function $t(tt,rt,D,Nt){Wt(tt),Wt(rt),Wt(Nt),Wt(rt),Wt(D),Wt(Nt);const it=s.length/3,St=M.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);fe(St[0]),fe(St[1]),fe(St[3]),fe(St[1]),fe(St[2]),fe(St[3])}function Wt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function fe(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return MM(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new gl[s.type]().fromJSON(s)),new $l(n,t.options)}}const yM={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-u),new nt(d,1-p),new nt(_,1-m)]:[new nt(a,1-l),new nt(h,1-u),new nt(f,1-p),new nt(g,1-m)]}};function MM(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ku extends Wl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ku(t.radius,t.detail)}}class Yl extends Le{constructor(t=new Ji([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(o,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;Zi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const M=p[g];Zi.isClockWise(M)===!0&&(p[g]=M.reverse())}const _=Zi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const M=p[g];f=f.concat(M)}for(let g=0,m=f.length;g<m;g++){const M=f[g];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,m=_.length;g<m;g++){const M=_[g],x=M[0]+u,v=M[1]+u,I=M[2]+u;n.push(x,v,I),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return bM(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Yl(n,t.curveSegments)}}function bM(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class qr extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const M=[],x=m/n;let v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){const T=I/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(T+v,1-x),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const x=h[m][M+1],v=h[m][M],I=h[m+1][M],T=h[m+1][M+1];(m!==0||o>0)&&f.push(x,v,T),(m!==n-1||l<Math.PI)&&f.push(v,I,T)}this.setIndex(f),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zu extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){const _=p/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){const _=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,M=(s+1)*f+p;o.push(_,g,M),o.push(g,m,M)}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zu(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Vu extends Le{constructor(t=new P0(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new nt;let h=new P;const u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function _(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),M(),m()}function g(x){h=t.getPointAt(x/e,h);const v=o.normals[x],I=o.binormals[x];for(let T=0;T<=s;T++){const R=T/s*Math.PI*2,F=Math.sin(R),w=-Math.cos(R);l.x=w*v.x+F*I.x,l.y=w*v.y+F*I.y,l.z=w*v.z+F*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const I=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),R=(s+1)*x+v,F=(s+1)*(x-1)+v;p.push(I,T,F),p.push(T,R,F)}}function M(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)c.x=x/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Vu(new gl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class SM extends Wr{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new vt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Hu extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wM extends Hu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Uc=new oe,Nf=new P,Of=new P;class EM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fu,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Nf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nf),Of.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Of),e.updateMatrixWorld(),Uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class TM extends EM{constructor(){super(new Vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AM extends Hu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new TM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class CM extends Hu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class RM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Bf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Bf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);const U0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ia{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const PM=new Vl(-1,1,1,-1,0,1);class FM extends Le{constructor(){super(),this.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new re([0,2,0,0,2,0],2))}}const DM=new FM;class N0{constructor(t){this._mesh=new me(DM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,PM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class O0 extends ia{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Go.clone(t.uniforms),this.material=new rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new N0(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class kf extends ia{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class LM extends ia{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class IM{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new O0(U0),this.copyPass.material.blending=yi,this.clock=new RM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}kf!==void 0&&(o instanceof kf?n=!0:o instanceof LM&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class UM extends ia{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new vt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const NM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ir extends ia{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(r,o,{type:Qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Fn(r,o,{type:Qn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Fn(r,o,{type:Qn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=NM;this.highPassUniforms=Go.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=U0;this.copyUniforms=Go.clone(h.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:zo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new vt,this.oldClearAlpha=1,this.basic=new ks,this.fsQuad=new N0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ir.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ir.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new rn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new rn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ir.BlurDirectionX=new nt(1,0);Ir.BlurDirectionY=new nt(0,1);const B0="pumpkin-dash-settings-v1",vr={window:{label:"Fit window",size:null},"1280x720":{label:"1280 × 720 (HD)",size:[1280,720]},"1920x1080":{label:"1920 × 1080 (Full HD)",size:[1920,1080]},"1080x1920":{label:"1080 × 1920 (Vertical)",size:[1080,1920]}},Ps={low:{label:"Low",pixelRatio:1,bloom:!1,bloomStrength:0,shadows:0,shadowBox:16,msaa:0,particles:.4,fogFar:38,ahead:52,lodScale:.55,cull:!0},med:{label:"Medium",pixelRatio:1.25,bloom:!0,bloomStrength:.5,bloomScale:.25,shadows:1024,shadowBox:18,msaa:4,particles:.7,fogFar:45,ahead:60},high:{label:"High",pixelRatio:1.5,bloom:!0,bloomStrength:.6,shadows:1024,shadowBox:15,msaa:4,particles:1,fogFar:45,ahead:66}},io={quality:"high",resolution:"window",musicVolume:.7,sfxVolume:.9,roundLength:60,seed:"1031",watermark:"",cleanRecording:!0,autoRes:!1,roundSelection:"all",exportSize:"1920x1080"};function OM(){let i={};try{i=JSON.parse(localStorage.getItem(B0)||"{}")||{}}catch{i={}}const t={...io,...i};return Ps[t.quality]||(t.quality=io.quality),vr[t.resolution]||(t.resolution=io.resolution),(!vr[t.exportSize]||t.exportSize==="window")&&(t.exportSize=io.exportSize),t.roundLength=Math.min(180,Math.max(15,Number(t.roundLength)||io.roundLength)),t}function zf(i){try{localStorage.setItem(B0,JSON.stringify(i))}catch{}}const BM={uniforms:{tDiffuse:{value:null},uBlur:{value:0},uRes:{value:new nt(1,1)},uVignette:{value:.45}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uBlur;
    uniform vec2 uRes;
    uniform float uVignette;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      if (uBlur > 0.01) {
        vec3 acc = c.rgb;
        float n = 1.0;
        for (int i = 0; i < 32; i++) {
          float fi = float(i);
          float r = sqrt((fi + 0.5) / 32.0) * uBlur;
          float a = fi * 2.39996;
          vec2 o = vec2(cos(a), sin(a)) * r / uRes.y;
          o.x *= uRes.y / uRes.x;
          acc += texture2D(tDiffuse, vUv + o).rgb;
          n += 1.0;
        }
        c.rgb = acc / n;
      }
      vec2 d = vUv - 0.5;
      d.x *= uRes.x / uRes.y;
      float v = smoothstep(0.35, 1.05, length(d) * 1.15);
      c.rgb *= 1.0 - v * uVignette;
      gl_FragColor = c;
      #include <colorspace_fragment>
    }`},Vf=2560*1440;class kM extends Ir{constructor(...t){super(...t),this.scale=.5}setSize(t,e){super.setSize(Math.max(2,Math.round(t*this.scale*2)),Math.max(2,Math.round(e*this.scale*2)))}}const zM=1920;class VM{constructor(t,e){this.canvas=t,this.stage=e;const n=new Hy({canvas:t,antialias:!1,powerPreference:"high-performance",alpha:!1,preserveDrawingBuffer:!1});n.info.autoReset=!1,n.setPixelRatio(1),n.outputColorSpace=$e,n.toneMapping=Mi,n.shadowMap.enabled=!0,n.shadowMap.type=wu,this.renderer=n,this.width=2,this.height=2,this.quality=Ps.high,this.resolutionKey="window",this.dynScale=1,this.bypassPost=!1;const s=new Fn(2,2,{type:Qn,samples:4});this.composer=new IM(n,s),this.composer.setPixelRatio(1),this.renderPass=new UM(new Xh,new yn),this.bloom=new kM(new nt(256,256),.6,.42,.8),this.finish=new O0(BM),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(this.finish),this.hudCanvas=document.createElement("canvas"),this.hudCanvas.width=2,this.hudCanvas.height=2,this.hudCanvas.id="hud",this.hudCanvas.style.cssText="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none;display:none;",t.after(this.hudCanvas),this.hudInScene=!1,this.hudCtx=this.hudCanvas.getContext("2d"),this.hudScene=new Xh,this.hudCam=new Vl(-1,1,1,-1,0,1),this.hudMat=new ks({transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.hudQuad=new me(new Ai(2,2),this.hudMat),this.hudQuad.frustumCulled=!1,this.hudScene.add(this.hudQuad),this._makeHudTexture(),this.hudVisible=!0,this.hudDirty=!0,this.hudBlank=!1,this.onResize=null,window.addEventListener("resize",()=>this.resize())}_makeHudTexture(){this.hudTex&&this.hudTex.dispose(),this.hudTex=new ea(this.hudCanvas),this.hudTex.colorSpace=$e,this.hudTex.minFilter=pn,this.hudTex.magFilter=pn,this.hudTex.generateMipmaps=!1,this.hudMat.map=this.hudTex,this.hudMat.needsUpdate=!0}get aspect(){return this.width/this.height}setQuality(t){this.quality=Ps[t]||Ps.high,this.bloom.enabled=!!this.quality.bloom,this.bloom.strength=this.quality.bloomStrength||.6;const e=this.quality.bloomScale||.5;this.bloom.scale!==e&&(this.bloom.scale=e,this.width=0);const n=this.quality.msaa??4;for(const s of[this.composer.renderTarget1,this.composer.renderTarget2])s.samples!==n&&(s.samples=n,s.dispose());this.resize()}setResolution(t){this.resolutionKey=vr[t]?t:"window",this.resize()}setDynScale(t){t=Math.min(1,Math.max(.5,t)),!(Math.abs(t-this.dynScale)<.001)&&(this.dynScale=t,this.resize())}setBlur(t){this.finish.uniforms.uBlur.value=t*(this.height/1080)}resize(){const t=Math.max(2,this.stage.clientWidth||window.innerWidth),e=Math.max(2,this.stage.clientHeight||window.innerHeight),n=vr[this.resolutionKey]&&vr[this.resolutionKey].size;let s,r;if(n){[s,r]=n;const a=Math.min(t/s,e/r);this.canvas.style.width=Math.floor(s*a)+"px",this.canvas.style.height=Math.floor(r*a)+"px",this.hudCanvas.style.width=this.canvas.style.width,this.hudCanvas.style.height=this.canvas.style.height}else{const a=Math.min(window.devicePixelRatio||1,this.quality.pixelRatio)*this.dynScale;if(s=Math.round(t*a),r=Math.round(e*a),s*r>Vf){const l=Math.sqrt(Vf/(s*r));s=Math.round(s*l),r=Math.round(r*l)}this.canvas.style.width="100%",this.canvas.style.height="100%",this.hudCanvas.style.width="100%",this.hudCanvas.style.height="100%"}if(s===this.width&&r===this.height)return;this.width=s,this.height=r,this.renderer.setSize(s,r,!1),this.composer.setSize(s,r),this.finish.uniforms.uRes.value.set(s,r);const o=Math.min(1,zM/Math.max(s,r));this.hudCanvas.width=Math.max(2,Math.round(s*o)),this.hudCanvas.height=Math.max(2,Math.round(r*o)),this._makeHudTexture(),this.hudDirty=!0,this.onResize&&this.onResize(s,r)}setHudInScene(t){t!==this.hudInScene&&(this.hudInScene=t,this.hudDirty=!0)}render(t,e){this.renderer.info.reset(),this.renderPass.scene=t,this.renderPass.camera=e,this.bypassPost?(this.renderer.setRenderTarget(null),this.renderer.render(t,e)):this.composer.render();const n=this.hudVisible&&!this.hudBlank,s=n&&!this.hudInScene?"block":"none";if(this.hudCanvas.style.display!==s&&(this.hudCanvas.style.display=s),n&&this.hudInScene){this.hudDirty&&(this.hudTex.needsUpdate=!0,this.hudDirty=!1);const r=this.renderer;r.autoClear=!1,r.render(this.hudScene,this.hudCam),r.autoClear=!0}}}class HM{constructor(t){this.fn=t,this.running=!1,this.last=0,this._tick=this._tick.bind(this)}start(){this.running||(this.running=!0,this.last=performance.now(),requestAnimationFrame(this._tick))}stop(){this.running=!1}_tick(t){if(!this.running)return;const e=Math.min(.1,Math.max(0,(t-this.last)/1e3));this.last=t;try{this.fn(e,t/1e3)}catch(n){console.error(n)}requestAnimationFrame(this._tick)}}const Na={ArrowLeft:"left",KeyA:"left",ArrowRight:"right",KeyD:"right",ArrowUp:"jump",KeyW:"jump",ArrowDown:"duck",KeyS:"duck",Space:"punch",KeyF:"punch",Escape:"pause",KeyP:"pause"},GM=[{action:"left",label:"◀",cls:"tc-left"},{action:"right",label:"▶",cls:"tc-right"},{action:"jump",label:"▲",cls:"tc-jump"},{action:"duck",label:"▼",cls:"tc-duck"},{action:"punch",label:"PUNCH",cls:"tc-punch"}];class Ms{constructor(){this.listeners=[],this.touchEl=null,this.active=!1,this.held=new Set,window.addEventListener("keydown",t=>{const e=Na[t.code];if(e){if(this.active)document.activeElement&&document.activeElement!==document.body&&Ms.blurActive();else{const n=t.target&&t.target.tagName;if(n==="INPUT"||n==="SELECT"||n==="TEXTAREA")return}t.preventDefault(),!(t.repeat||this.held.has(t.code))&&(this.held.add(t.code),this.emit(e,!0))}},!0),window.addEventListener("keyup",t=>{if(!this.held.delete(t.code))return;const e=Na[t.code];for(const n of this.held)if(Na[n]===e)return;this.emit(e,!1)},!0),window.addEventListener("blur",()=>this.releaseAll())}on(t){this.listeners.push(t)}emit(t,e=!0){for(const n of this.listeners)n(t,e)}releaseAll(){const t=new Set;for(const e of this.held)t.add(Na[e]);this.held.clear();for(const e of t)this.emit(e,!1)}buildTouch(t){const e=document.createElement("div");e.className="touch-controls hidden";for(const n of GM){const s=document.createElement("button");s.className="tc-btn "+n.cls,s.textContent=n.label,s.setAttribute("aria-label",n.action),s.tabIndex=-1;let r=!1;const o=l=>{l.preventDefault(),!r&&(r=!0,s.classList.add("down"),this.emit(n.action,!0))},a=()=>{r&&(r=!1,s.classList.remove("down"),this.emit(n.action,!1))};s.addEventListener("touchstart",o,{passive:!1}),s.addEventListener("touchend",l=>{l.preventDefault(),a()},{passive:!1}),s.addEventListener("touchcancel",a),s.addEventListener("pointerdown",l=>{l.pointerType!=="touch"&&o(l)});for(const l of["pointerup","pointerleave","pointercancel"])s.addEventListener(l,c=>{c.pointerType!=="touch"&&a()});e.appendChild(s)}t.appendChild(e),this.touchEl=e}showTouch(t){this.touchEl&&this.touchEl.classList.toggle("hidden",!t)}static isTouch(){return window.matchMedia&&window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window}static blurActive(){document.activeElement&&document.activeElement.blur&&document.activeElement.blur()}}function WM(i){let t=i>>>0;return function(){t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Fs(i,t){let e=Math.imul(i|0,668265261)^Math.imul((t|0)+374761393,2246822519)|0;return e^=e>>>15,e=Math.imul(e,739982445),e^=e>>>12,e=Math.imul(e,695872825),e^=e>>>15,e>>>0}function mn(i,t){return Fs(i,t)/4294967296}function XM(i){if(typeof i=="number"&&Number.isFinite(i))return Math.floor(Math.abs(i))>>>0;const t=String(i??"").trim();if(/^\d+$/.test(t))return parseInt(t,10)>>>0;let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}class jl{constructor(t=1){this._next=WM(t>>>0)}next(){return this._next()}range(t,e){return t+(e-t)*this._next()}int(t,e){return t+Math.floor(this._next()*(e-t+1))}pick(t){return t[Math.floor(this._next()*t.length)%t.length]}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}weighted(t){const e=Object.keys(t);let n=0;for(const r of e)n+=Math.max(0,t[r]);let s=this._next()*n;for(const r of e)if(s-=Math.max(0,t[r]),s<=0)return r;return e[e.length-1]}shuffle(t){const e=t.slice();for(let n=e.length-1;n>0;n--){const s=Math.floor(this._next()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}}function Hf(i,{seed:t=1,roundLength:e=i.roundLength,roundIndex:n=-1}={}){const s=[],r=[];let o=0;const a=(c,h,u={})=>{const d={kind:c,start:o,end:o+h,duration:h,...u};return s.push(d),o+=h,d};a("title",i.intro.titleDuration,{text:i.intro.title,sub:i.intro.subtitle}),a("countdown",i.intro.countdownDuration);const l=n>=0&&n<i.rounds.length?[n]:i.rounds.map((c,h)=>h);l.forEach((c,h)=>{const u=i.rounds[c],d=u.length??e,f=a("round",d,{roundIndex:c,round:u,order:h});if(qM(i,u,c,f,new jl(Fs(t,c+1)),r),h<l.length-1){const p=i.rounds[l[h+1]];a("card",i.between.duration,{texts:i.between.texts,next:p})}});for(const c of i.outro)a("outro",c.duration,{text:c.text,sub:c.sub});return r.sort((c,h)=>c.t-h.t),r.forEach((c,h)=>c.id=h+1),{segments:s,events:r,duration:o,speed:i.speed,order:l}}function qM(i,t,e,n,s,r){const o={...i.variants,...t.variants||{}},a={},l=_=>{const g=_==="left"||_==="right"?"dodge":_,m=o[g]||[];return m.length?((!a[g]||!a[g].length)&&(a[g]=s.shuffle(m)),a[g].pop()):null},c=(_,g,m)=>{r.push({t:_,type:g,variant:m||l(g),round:e})};if(Array.isArray(t.script)&&t.script.length){for(const _ of t.script)_.at>=0&&_.at<=n.duration&&c(n.start+_.at,_.type,_.variant);return}const h=n.start+i.roundLeadIn,u=n.end-i.roundTail,d=t.every||[3,4],f=[];let p=h;for(;p<=u;){let _=s.weighted(t.mix);for(let g=0;g<4&&f.length>=2&&f[0]===_&&f[1]===_;g++)_=s.weighted(t.mix);f.unshift(_),f.length>2&&f.pop(),c(p,_),_==="punch"&&t.backToBack&&s.chance(t.backToBack.chance)&&p+t.backToBack.gap<=u&&(p+=t.backToBack.gap,c(p,"punch")),p+=s.range(d[0],d[1])}}function Gf(i,t){const e=i.segments;for(let n=e.length-1;n>=0;n--)if(t>=e[n].start)return n;return 0}const vl={time:{value:0},rimColor:{value:new vt("#E2B8FF")},rimStrength:{value:.55}};let Ni=null;function $M(){if(Ni)return Ni;const i=new Uint8Array([84,84,84,255,168,168,168,255,255,255,255,255]);return Ni=new Iu(i,3,1,Pn),Ni.minFilter=cn,Ni.magFilter=cn,Ni.generateMipmaps=!1,Ni.needsUpdate=!0,Ni}function YM(i){i.uniforms.uRimColor=vl.rimColor,i.uniforms.uRimStrength=vl.rimStrength,i.fragmentShader=`uniform vec3 uRimColor;
uniform float uRimStrength;
`+i.fragmentShader.replace("#include <opaque_fragment>",`{
        float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
        outgoingLight += uRimColor * smoothstep(0.62, 0.84, rimF) * uRimStrength * (0.35 + 0.65 * diffuseColor.rgb);
      }
      #include <opaque_fragment>`)}function jM(i,t){i.uniforms.uTime=vl.time,i.vertexShader=`uniform float uTime;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        float ph = 0.0;
        #ifdef USE_INSTANCING
          ph = instanceMatrix[3].x * 0.35 + instanceMatrix[3].z * 0.27;
        #endif
        float hh = max(position.y, 0.0);
        float bend = hh * hh * ${t.toFixed(4)};
        transformed.x += sin(uTime * 1.7 + ph) * bend;
        transformed.z += cos(uTime * 1.3 + ph * 1.3) * bend * 0.6;
      }`)}const xr=new Map;function je(i={}){const e=!i.map?"toon"+JSON.stringify(i):null;if(e&&xr.has(e))return xr.get(e);const n=new SM({color:i.color??16777215,vertexColors:!!i.vc,gradientMap:$M(),flatShading:!!i.flat,side:i.double?Vn:ei,transparent:!!i.transparent,opacity:i.opacity??1,emissive:i.emissive??0,emissiveIntensity:i.ei??1,map:i.map??null,alphaTest:i.alphaTest??0});i.nofog&&(n.fog=!1);const s=i.sway||0;return n.onBeforeCompile=r=>{YM(r),s&&jM(r,s)},n.customProgramCacheKey=()=>"rim"+s,e&&xr.set(e,n),n}function el(i=16777215,t=1,e={}){const n="glow"+JSON.stringify([i,t,e]);if(xr.has(n))return xr.get(n);const s=new ks({color:new vt(i).multiplyScalar(t),vertexColors:!!e.vc,transparent:!!e.transparent||!!e.additive,opacity:e.opacity??1,side:e.double?Vn:ei,blending:e.additive?zo:ji,depthWrite:!e.additive&&!e.transparent,toneMapped:!1});return e.nofog&&(s.fog=!1),xr.set(n,s),s}const we={get body(){return je({vc:!0})},get flat(){return je({vc:!0,flat:!0})},get glow(){return el(16777215,1,{vc:!0})},get flicker(){return el(16777215,1,{vc:!0,key:"flicker"})},get bodyNoFog(){return je({vc:!0,nofog:!0})},get glowNoFog(){return el(16777215,1,{vc:!0,nofog:!0})}};function KM(i){vl.time.value=i;const t=.9+.07*Math.sin(i*13)+.05*Math.sin(i*23.7+1.3)+.04*Math.sin(i*5.3);we.flicker.color.setScalar(t)}const $i=Math.PI/180,Dt={eye:1.3,hfov:72,portraitVfov:74,horizon:.38,bobAmp:.03,bobHz:2.8,bobRoll:.4*$i,jumpDur:.7,jumpApex:2.1,duckDepth:-.9,duckIn:.15,duckHold:.4,duckOut:.2,duckRoll:-7*$i,dodgeDist:2,dodgeIn:.22,dodgeHold:.45,dodgeOut:.35,dodgeBank:7*$i,punchDur:.32,punchLunge:.25},Bn={dodgeIn:.16,duckIn:.09,duckMin:.35,duckOut:.14,fastFall:.12,buffer:.3},Wf={jump:Dt.jumpDur,duck:Dt.duckIn+Dt.duckHold+Dt.duckOut,left:Dt.dodgeIn+Dt.dodgeHold+Dt.dodgeOut,right:Dt.dodgeIn+Dt.dodgeHold+Dt.dodgeOut,punch:Dt.punchDur},Nc={jump:"v",duck:"v",left:"h",right:"h",punch:"p"},k0=i=>1-Math.pow(1-i,3),JM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,jh=i=>1-(1-i)*(1-i),ZM=i=>-(Math.cos(Math.PI*i)-1)/2;function Xf(i){const t=i/Dt.jumpDur;return t<=0||t>=1?0:4*Dt.jumpApex*t*(1-t)}function QM(i){if(i<=0)return 0;if(i<Dt.duckIn)return jh(i/Dt.duckIn);const t=i-Dt.duckIn;if(t<Dt.duckHold)return 1;const e=t-Dt.duckHold;return e<Dt.duckOut?1-ZM(e/Dt.duckOut):0}function tb(i){if(i<=0)return 0;if(i<Dt.dodgeIn)return k0(i/Dt.dodgeIn);const t=i-Dt.dodgeIn;if(t<Dt.dodgeHold)return 1;const e=t-Dt.dodgeHold;return e<Dt.dodgeOut?1-JM(e/Dt.dodgeOut):0}function eb(i){if(i<=0)return 0;if(i<Dt.dodgeIn)return Math.sin(i/Dt.dodgeIn*Math.PI);const t=i-Dt.dodgeIn-Dt.dodgeHold;return t>0&&t<Dt.dodgeOut?-.6*Math.sin(t/Dt.dodgeOut*Math.PI):0}const nb=i=>i*i;class ib{constructor(t,e){this.camera=t,this.track=e,this.mode="auto",this.onStart=null,this.actions=[],this._out={height:0,duck:0,lateral:0,lunge:0,roll:0,pitch:0},this.height=0,this.duck=0,this.lateral=0,this.lunge=0,this.vfov=45,this.pos=new P}reset(){this.actions.length=0,this.height=this.duck=this.lateral=this.lunge=0,this.lane=0,this.laneMove={t0:-1e9,from:0,to:0},this.jumpT=-1e9,this.fall=null,this.duckT=-1e9,this.duckEnd=-1e9,this.duckHeld=!1,this.punchT=-1e9,this.queue=[]}setMode(t){this.mode=t,this.reset()}_jumpH(t){const e=this.fall;if(e&&t>=e.t0){const n=(t-e.t0)/Bn.fastFall;return n>=1?0:e.h0*(1-nb(n))}return Xf(t-this.jumpT)}_airborne(t){return this._jumpH(t)>.05}_duckE(t){const e=t-this.duckT;if(e<0)return 0;const n=e<Bn.duckIn?jh(e/Bn.duckIn):1,s=t-this.duckEnd;return s<=0?n:s>=Bn.duckOut?0:n*(1-jh(s/Bn.duckOut))}_lateral(t){const e=this.laneMove,n=Math.min(1,Math.max(0,(t-e.t0)/Bn.dodgeIn));return e.from+(e.to-e.from)*k0(n)}sample(t){const e=this._out;if(this.mode!=="play")return e.height=this.height,e.duck=this.duck,e.lateral=this.lateral,e;e.height=this._jumpH(t);const n=this._duckE(t);e.duck=Dt.duckDepth*n,e.lateral=this._lateral(t);const s=t-this.punchT;e.lunge=s>=0&&s<Dt.punchDur?Dt.punchLunge*Math.sin(s/Dt.punchDur*Math.PI):0;const r=this.laneMove,o=(t-r.t0)/Bn.dodgeIn,a=Math.sign(r.to-r.from);e.roll=Dt.duckRoll*n+(o>=0&&o<1?-a*Dt.dodgeBank*Math.sin(o*Math.PI):0);const l=t-this.jumpT,c=this.fall,h=c&&t>=c.t0&&c.h0>0?e.height/c.h0:1;return e.pitch=e.height>0?-7*$i*Math.sin(Math.min(1,l/Dt.jumpDur)*Math.PI)*h:0,e}_try(t,e){switch(t){case"left":case"right":{const n=Math.max(-1,Math.min(1,this.lane+(t==="right"?1:-1)));if(n===this.lane)return!0;this.laneMove={t0:e,from:this._lateral(e),to:n*Dt.dodgeDist},this.lane=n;break}case"jump":{if(this._airborne(e))return!1;this._duckE(e)>0&&(this.duckEnd=Math.min(this.duckEnd,e)),this.duckHeld=!1,this.jumpT=e,this.fall=null;break}case"duck":{this._airborne(e)&&!this.fall&&(this.fall={t0:e,h0:this._jumpH(e)});const n=this._duckE(e);this.duckT=n>0?e-Bn.duckIn*(1-Math.sqrt(1-Math.min(1,n))):e,this.duckHeld=!0,this.duckEnd=1/0;break}case"punch":{if(e-this.punchT<Dt.punchDur*.85)return!1;this.punchT=e;break}default:return!0}return this.onStart&&this.onStart(t,e),!0}press(t,e,n=!0){if(!n){t==="duck"&&this.duckHeld&&(this.duckHeld=!1,this.duckEnd=Math.max(e,this.duckT+Bn.duckMin));return}this._try(t,e)||(this.queue=this.queue.filter(s=>s.type!==t),this.queue.push({type:t,t:e}))}_runQueue(t){const e=this.queue;for(let n=0;n<e.length;n++){const s=e[n];if(t-s.t>Bn.buffer){e.splice(n--,1);continue}let r=t;if(s.type==="jump"){const o=this.fall?this.fall.t0+Bn.fastFall:this.jumpT+Dt.jumpDur;r=Math.max(s.t,Math.min(t,o))}else s.type==="punch"&&(r=Math.max(s.t,Math.min(t,this.punchT+Dt.punchDur*.85)));this._try(s.type,r)&&e.splice(n--,1)}}setAspect(t){let e;t>=1?e=2*Math.atan(Math.tan(Dt.hfov/2*$i)/t)/$i:e=Dt.portraitVfov,this.vfov=e,this.camera.fov=e,this.camera.aspect=t,this.camera.updateProjectionMatrix()}busy(t,e){const n=Nc[t];for(const s of this.actions)if(Nc[s.type]===n&&e-s.t0<Wf[s.type]*.85)return!0;return!1}trigger(t,e){return!Nc[t]||this.mode==="play"||this.busy(t,e)?!1:(this.actions.push({type:t,t0:e}),!0)}update(t,e){if(this.mode==="play"){this.queue.length&&this._runQueue(t);const c=this.sample(t);this.height=c.height,this.duck=c.duck,this.lateral=c.lateral,this.lunge=c.lunge,this._place(t,e,c.height,c.duck,c.lateral,c.lunge,c.roll,c.pitch);return}let n=0,s=0,r=0,o=0,a=0,l=0;for(let c=this.actions.length-1;c>=0;c--){const h=this.actions[c],u=t-h.t0;if(u>Wf[h.type]+.05){this.actions.splice(c,1);continue}if(!(u<0))switch(h.type){case"jump":{n+=Xf(u),l-=7*$i*Math.sin(Math.min(1,u/Dt.jumpDur)*Math.PI);break}case"duck":{const d=QM(u);s+=Dt.duckDepth*d,a+=Dt.duckRoll*d;break}case"left":case"right":{const d=h.type==="right"?1:-1;r+=d*Dt.dodgeDist*tb(u),a+=-d*Dt.dodgeBank*eb(u);break}case"punch":{o+=Dt.punchLunge*Math.sin(Math.min(1,u/Dt.punchDur)*Math.PI);break}}}this.height=n,this.duck=s,this.lateral=r,this.lunge=o,this._place(t,e,n,s,r,o,a,l)}_place(t,e,n,s,r,o,a,l){const c=n<.01,h=t*Dt.bobHz*Math.PI*2,u=c?Dt.bobAmp*Math.sin(h):0;a+=c?Dt.bobRoll*Math.sin(h*.5):0;const d=e+o,f=this.track;f.point(d,r,Dt.eye+n+s+u,this.pos),this.camera.position.copy(this.pos);const p=-f.heading(d+6),_=Math.atan((Dt.horizon-.5)*2*Math.tan(this.vfov/2*$i)),g=f.slope(d+5)*.7+_+l;this.camera.rotation.set(g,p,a,"YXZ"),this.camera.updateMatrixWorld()}}const qf=.3,$f=.12,Yf=.15,sb={jump:100,duck:100,left:100,right:100,punch:150,pose:50},jf={jump:"jump",duck:"duck",left:"dodge",right:"dodge",punch:"punch"},Oa=["POW!","BAM!","WHAM!","BOOM!","KAPOW!"],Kf=["NICE!","GREAT!","SUPER!","AWESOME!"],rb=new P;class ob{constructor(t){this.g=t,this.events=[],this.mode="auto",this.prompts=[],this.acted=new Set,this.judged=new Set,this._prompt={type:"",variant:"",start:0,end:0},this.reset()}setSchedule(t,e){this.events=t.events,this.mode=e,this.T=this.g.timeline,this.reset()}reset(){this.lo=0,this.acted.clear(),this.judged.clear(),this.score=0,this.lives=3,this.maxLives=3,this.streak=0,this.prompts.length=0}lead(t){return this.T&&this.T.actionLead[t]||.3}promptStart(t){const e=t.type==="pose"?this.T.posePromptLead:this.T.promptLead;return t.t-this.lead(t.type)-e}update(t){const e=this.events;for(;this.lo<e.length&&e[this.lo].t+1<t;)this.lo++;let n=null,s=0;for(let r=this.lo;r<e.length;r++){const o=e[r],a=this.promptStart(o);if(a>t){if(o.t-4>t)break;continue}t<=o.t+Yf&&(!n||a>=s)&&(n=o,s=a),this.mode==="auto"?this._auto(o,t):this._play(o,t)}if(this.prompts.length=0,n){const r=this._prompt;r.type=n.type,r.variant=n.variant,r.start=s,r.end=n.t+Yf,this.prompts.push(r)}}_auto(t,e){const n=this.g,s=t.id,r=t.t-this.lead(t.type);!this.acted.has(s)&&e>=r&&(this.acted.add(s),t.type!=="pose"&&(n.rig.trigger(t.type,r),t.type!=="punch"&&n.audio.play(jf[t.type]))),!this.judged.has(s)&&e>=t.t&&(this.judged.add(s),t.type==="punch"?(n.manager.hit(s,t.t),n.audio.play("punch"),n.hud.popup(Oa[Fs(s,3)%Oa.length],"#FFE600",e)):t.type==="pose"&&n.audio.play("chime"))}_play(t,e){const n=this.g,s=t.id;if(this.judged.has(s))return;if(t.type==="punch"){e>t.t+$f&&this._fail(t,e);return}if(e<t.t)return;const r=n.rig.sample(t.t);let o=!0;t.type==="jump"?o=r.height>.6:t.type==="duck"?o=r.duck<Dt.duckDepth*.5:t.type==="left"?o=r.lateral<-1:t.type==="right"&&(o=r.lateral>1),o?this._success(t,e):this._fail(t,e)}_success(t,e){const n=this.g;this.judged.add(t.id),this.streak++;const s=this.streak>=5?2:1;this.score+=sb[t.type]*s,t.type==="pose"?(n.audio.play("chime"),n.hud.popup("POSE!","#E6FF00",e)):t.type==="punch"?n.hud.popup(Oa[Fs(t.id,3)%Oa.length],"#FFE600",e):n.hud.popup(Kf[Fs(t.id,4)%Kf.length]+(s>1?" x2":""),"#7CFF5A",e)}_fail(t,e){const n=this.g;this.judged.add(t.id),this.streak=0,this.lives=Math.max(0,this.lives-1),n.hud.flash(e),n.hud.popup("OUCH!","#FF3A3A",e,!0),n.audio.play("hit"),n.effects.burst("hit",n.track.point(n.speed*e+1.2,n.rig.lateral,1.1,rb),12),this.lives<=0&&n.onGameOver()}input(t,e,n=!0){this.mode==="play"&&this.g.rig.press(t,e,n)}started(t,e){if(this.mode!=="play")return;const n=this.g;if(t!=="punch"){n.audio.play(jf[t]);return}let s=null;for(let r=this.lo;r<this.events.length;r++){const o=this.events[r];if(o.t-qf>e)break;if(!(o.type!=="punch"||this.judged.has(o.id))&&e>=o.t-qf&&e<=o.t+$f){s=o;break}}s&&n.manager.hit(s.id,e)?(n.audio.play("punch"),this._success(s,e)):n.audio.play("dodge")}}const so={speed:14,roundLength:60,roundLeadIn:2.6,roundTail:1.6,actionLead:{jump:.35,duck:.35,left:.42,right:.42,punch:.12,pose:.25},promptLead:1,posePromptLead:1.5,intro:{title:"PUMPKIN DASH",subtitle:"HALLOWEEN RUN",titleDuration:3.2,countdownDuration:3.2},between:{duration:3.6,texts:["EXCELLENT!","NEXT LEVEL"]},outro:[{text:"GREAT JOB",sub:"YOU WERE AMAZING!",duration:2.8},{text:"MISSION COMPLETE",sub:"HAPPY HALLOWEEN!",duration:3.8}],variants:{jump:["pumpkinLog","greenPipe","pumpkinBeam","rootArch","glowCrates","broomstick","boneBar","spikedLog","sawblades"],duck:["toxicCrates","flamePendulums","hangingVines","ghostBar"],dodge:["cart","tricycle","cart","spikedBarrels","pipeLane"],punch:["zombie","skeleton","ghost","vampire","scarecrow","mummy"],pose:["heart","chairSquat","highKnee","horsePunch","toeTouch","sideBend","starJump"]},rounds:[{id:"run-jump-duck",label:"ROUND 1",title:"RUN · JUMP · DUCK",music:"normal",every:[3.6,4.4],mix:{jump:1,duck:1}},{id:"punch-time",label:"ROUND 2",title:"PUNCH TIME",music:"heavy",every:[2.5,3.3],mix:{punch:2.2,jump:.9,duck:.9}},{id:"left-right",label:"ROUND 3",title:"LEFT & RIGHT",music:"normal",every:[2.7,3.5],mix:{left:1.3,right:1.3,jump:.6,duck:.6},variants:{dodge:["cart","tricycle","cart","tricycle","spikedBarrels","pipeLane"]}},{id:"mirror-me",label:"ROUND 4",title:"MIRROR ME",music:"normal",every:[3,3.8],mix:{pose:2.4,jump:.7,duck:.7}},{id:"combo-rush",label:"ROUND 5",title:"COMBO RUSH",music:"heavy",every:[2.8,3.2],mix:{jump:1,duck:1,left:1,right:1,punch:1,pose:.6}},{id:"mega-punch",label:"ROUND 6",title:"MEGA PUNCH",music:"heavy",every:[1.2,2],mix:{punch:1},backToBack:{chance:.3,gap:.6}}]},Ba=Math.PI/180,nr=-300,Jf=2048,Zf=new P,Qf=new ns,Oc=new P,ab=new P(0,1,0);class lb{constructor(t=1){this.setSeed(t)}setSeed(t){const e=new jl((t^24301)>>>0);this.p1=e.range(0,Math.PI*2),this.p2=e.range(0,Math.PI*2),this.p3=e.range(0,Math.PI*2),this.p4=e.range(0,Math.PI*2),this.xs=[0],this.ys=[0],this.zs=[0],this.maxS=nr,this._extend(Jf)}heading(t){return 8.5*Ba*Math.sin(t/300*Math.PI*2+this.p1)+4.5*Ba*Math.sin(t/113*Math.PI*2+this.p2)}slope(t){return 2.1*Ba*Math.sin(t/210*Math.PI*2+this.p3)+.9*Ba*Math.sin(t/79*Math.PI*2+this.p4)}_extend(t){const{xs:e,ys:n,zs:s}=this;for(let r=0;r<t;r++){const o=e.length-1,a=nr+o+.5,l=this.heading(a);e.push(e[o]+Math.sin(l)),s.push(s[o]-Math.cos(l)),n.push(n[o]+Math.tan(this.slope(a)))}this.maxS=nr+e.length-1}pos(t,e=new P){for(t<nr&&(t=nr);t>=this.maxS-1;)this._extend(Jf);const n=t-nr,s=Math.floor(n),r=n-s,{xs:o,ys:a,zs:l}=this;return e.set(o[s]+(o[s+1]-o[s])*r,a[s]+(a[s+1]-a[s])*r,l[s]+(l[s+1]-l[s])*r)}point(t,e=0,n=0,s=new P){this.pos(t,s);const r=this.heading(t);return s.x+=Math.cos(r)*e,s.z+=Math.sin(r)*e,s.y+=n,s}matrix(t,e=0,n=0,s=0,r=1,o=new oe){return this.point(t,e,n,Zf),Qf.setFromAxisAngle(ab,-this.heading(t)+s),typeof r=="number"?Oc.set(r,r,r):Oc.set(r[0],r[1],r[2]),o.compose(Zf,Qf,Oc)}}const $o=[{id:"village",ground:"#4F6A2A",grass:"#7E8E2F"},{id:"corn",ground:"#7A5A2C",grass:"#8E8A30"},{id:"cemetery",ground:"#45503A",grass:"#66733A"},{id:"castle",ground:"#5B5765",grass:"#6F7B3A"}],Rn=6,zn=210,z0=zn*$o.length,ka=30,xl=28,cb=new vt,hb=new vt,ub=$o.map(i=>new vt(i.ground)),db=$o.map(i=>new vt(i.grass)),tp=(i,t)=>(i%t+t)%t,ro=i=>i*i*(3-2*i);class fb{lapPos(t){return tp(t+ka,z0)}index(t){return Math.floor(this.lapPos(t)/zn)%$o.length}id(t){return $o[this.index(t)].id}local(t){return tp(t+ka,zn)}localSlot(t){return Math.floor(this.local(t)/Rn)}slotStart(t){return t*Rn-ka%Rn}slotOf(t){return Math.floor((t+ka%Rn)/Rn)}isBridge(t){return this.id(t)==="castle"&&this.localSlot(t)>=xl}bridgeDrop(t){if(this.id(t)!=="castle")return 0;const e=this.local(t),n=xl*Rn;return e<n-6?0:e<n+6?ro((e-(n-6))/12):e>zn-6?ro((zn-e)/6):1}_mix(t,e,n){const s=this.local(t),r=this.index(t),o=e.length;if(s>zn-15){const a=ro((s-(zn-15))/30);return n.copy(e[r]).lerp(e[(r+1)%o],a)}if(s<15){const a=ro((15-s)/30);return n.copy(e[r]).lerp(e[(r+o-1)%o],a)}return n.copy(e[r])}groundColor(t,e=cb){return this._mix(t,ub,e)}grassColor(t,e=hb){return this._mix(t,db,e)}fog(t){const e=this.local(t),n=Math.min(e,zn-e),s=n<28?ro(1-n/28):0,r=this.bridgeDrop(t)*.45;return Math.max(s,r)}}const or=30,ir=6,Eo=2.45,za=[-2.45,-1.6,-.9,-.3,.3,.9,1.6,2.45],Bc=[[2.4,0],[3,0],[4.6,0],[6,0],[9,0],[14,.05],[21,.2],[29,.8],[36,2.4],[44,6]],kc=or*2,Oi=new P,oo=new P,Bi=new vt,ep=new oe,np=new vt("#6E5A4F"),pb=new vt("#3A3448"),mb=new vt,gb=new vt,Va=[1,1,1],_b=[-1,1];function vb(){const i=document.createElement("canvas");i.width=256,i.height=512;const t=i.getContext("2d");t.fillStyle="#D47412",t.fillRect(0,0,256,512);let e=7;const n=()=>(e=e*16807%2147483647)/2147483647;for(let o=0;o<260;o++){const a=n()*256,l=n()*512,c=6+n()*22;t.fillStyle=n()<.5?"rgba(232,141,42,0.35)":"rgba(168,82,5,0.22)",t.beginPath(),t.ellipse(a,l,c,c*.6,0,0,Math.PI*2),t.fill()}for(const o of[-.9,.9]){const a=(o+Eo)/(Eo*2)*256,l=t.createLinearGradient(a-22,0,a+22,0);l.addColorStop(0,"rgba(168,82,5,0)"),l.addColorStop(.3,"rgba(168,82,5,0.85)"),l.addColorStop(.7,"rgba(168,82,5,0.85)"),l.addColorStop(1,"rgba(168,82,5,0)"),t.fillStyle=l,t.fillRect(a-22,0,44,512),t.fillStyle="rgba(240,160,70,0.5)",t.fillRect(a+14,0,3,512),t.fillRect(a-17,0,3,512)}t.fillStyle="rgba(236,150,55,0.35)",t.fillRect(104,0,48,512);for(let o=0;o<420;o++){const a=n()*256,l=n()*512,c=1+n()*3;t.fillStyle=n()<.6?"rgba(120,58,8,0.7)":"rgba(255,190,110,0.7)",t.beginPath(),t.arc(a,l,c,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(120,58,8,0.45)",t.lineWidth=2;for(let o=0;o<14;o++){let a=n()*256,l=n()*512;t.beginPath(),t.moveTo(a,l);for(let c=0;c<4;c++)a+=(n()-.5)*30,l+=6+n()*16,t.lineTo(a,l);t.stroke()}const s=t.createLinearGradient(0,0,256,0);s.addColorStop(0,"rgba(110,50,5,0.55)"),s.addColorStop(.08,"rgba(110,50,5,0)"),s.addColorStop(.92,"rgba(110,50,5,0)"),s.addColorStop(1,"rgba(110,50,5,0.55)"),t.fillStyle=s,t.fillRect(0,0,256,512);const r=new ea(i);return r.colorSpace=$e,r.wrapS=Yi,r.wrapT=Vo,r.anisotropy=8,r}function ip(i,t){const e=new Le,n=i*t;e.setAttribute("position",new Be(new Float32Array(n*3),3)),e.setAttribute("normal",new Be(new Float32Array(n*3),3));const s=[];for(let r=0;r<t-1;r++)for(let o=0;o<i-1;o++){const a=r*i+o,l=a+1,c=a+i,h=c+1;s.push(a,l,c,l,h,c)}return e.setIndex(s),e}class xb{constructor(t,e,n){this.track=e,this.biomes=n,this.seed=1,this.roadMat=je({map:vb()}),this.terrainMat=je({vc:!0,key:"terrain"});const s=or+1;this.chunks=[];for(let o=0;o<ir;o++){const a=ip(za.length,s);a.setAttribute("uv",new Be(new Float32Array(za.length*s*2),2));const l=new me(a,this.roadMat);l.receiveShadow=!0;const c=Bc.length*2,h=ip(c,s);h.setAttribute("color",new Be(new Float32Array(c*s*3),3));const u=new me(h,this.terrainMat);u.receiveShadow=!0,l.renderOrder=u.renderOrder=4,t.add(l,u),this.chunks.push({idx:null,road:l,terrain:u})}const r=new Xl(1,0);this.rocks=new Mn(r,je({flat:!0,key:"rock"}),ir*kc*2),this.rocks.instanceMatrix.setUsage(Rs),this.rocks.castShadow=!0,this.rocks.receiveShadow=!0;for(let o=0;o<this.rocks.count;o++)this.rocks.setColorAt(o,np);t.add(this.rocks)}reset(t){this.seed=t;for(const e of this.chunks)e.idx=null}update(t){const e=Math.floor((t-20)/or);for(let n=0;n<ir;n++){const s=e+n,r=(s%ir+ir)%ir,o=this.chunks[r];o.idx!==s&&this._build(o,s,r)}this._syncRocks()}_build(t,e,n){t.idx=e;const s=this.track,r=this.biomes,o=e*or;s.pos(o,oo),t.road.position.copy(oo),t.terrain.position.copy(oo);const a=t.road.geometry,l=a.attributes.position.array,c=a.attributes.uv.array;let h=0,u=0;for(let I=0;I<=or;I++){const T=o+I;for(let R=0;R<za.length;R++){const F=za[R],w=.03*(1-Math.abs(F)/Eo);s.point(T,F,.02+w,Oi).sub(oo),l[h++]=Oi.x,l[h++]=Oi.y,l[h++]=Oi.z,c[u++]=(F+Eo)/(Eo*2),c[u++]=T/7}}a.attributes.position.needsUpdate=!0,a.attributes.uv.needsUpdate=!0,a.computeVertexNormals(),a.computeBoundingSphere();const d=t.terrain.geometry,f=d.attributes.position.array,p=d.attributes.color.array,_=Bc.length;h=0;let g=0;const m=mb,M=gb;for(let I=0;I<=or;I++){const T=o+I;r.groundColor(T,m),r.grassColor(T,M);const R=r.bridgeDrop(T);for(let F=0;F<_*2;F++){const w=F<_?-1:1,y=w<0?_-1-F:F-_,[L,V]=Bc[y];let k=V;R>0&&L>3.4&&(k=V*(1-R)-9*R);const W=mn(Math.floor(T)*31+F,this.seed);y>=3&&(k+=(W-.5)*.25),s.point(T,w*L,k,Oi).sub(oo),f[h++]=Oi.x,f[h++]=Oi.y,f[h++]=Oi.z,y<=2?Bi.copy(M):Bi.copy(m),R>.5&&y>=3&&Bi.copy(pb);const Y=.92+W*.16;p[g++]=Bi.r*Y,p[g++]=Bi.g*Y,p[g++]=Bi.b*Y}}d.attributes.position.needsUpdate=!0,d.attributes.color.needsUpdate=!0,d.computeVertexNormals(),d.computeBoundingSphere();const x=n*kc*2;let v=0;for(const I of _b)for(let T=0;T<kc;T++){const R=o+T*.5+.25,F=mn(Math.floor(R*2)*7+(I>0?1:0),this.seed+11),w=mn(Math.floor(R*2)*13+(I>0?3:2),this.seed+17),y=.3+F*.07,L=.17+w*.06,V=.3+w*.08;Va[0]=y,Va[1]=L,Va[2]=V,s.matrix(R,I*(2.7+(F-.5)*.08),L*.55,F*6.28,Va,ep),this.rocks.setMatrixAt(x+v,ep),Bi.copy(np).multiplyScalar(.82+w*.36),this.rocks.setColorAt(x+v,Bi),v++}this.rocks.instanceMatrix.needsUpdate=!0,this.rocks.instanceColor&&(this.rocks.instanceColor.needsUpdate=!0),this._rocksDirty=!0}_syncRocks(){this._rocksDirty&&(this._rocksDirty=!1,this.rocks.computeBoundingSphere())}}function yb(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Le;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=sp(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const p=sp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}return l}function sp(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Be(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){const _=h.getComponent(d,p);a.setComponent(d+u,p,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const ao=new P;function Tn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ao.copy(t),ao[n]=0,ao.normalize();const c=.5*o/(o+a),h=1-ao.angleTo(i)/l;return Math.sign(ao[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Mb extends Ti{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new P,l=new P,c=new P(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new P,_=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*r,h[g+1]=c.y*Math.sign(a.y)+l.y*r,h[g+2]=c.z*Math.sign(a.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/f)){case 0:p.set(1,0,0),d[m+0]=Tn(p,l,"z","y",r,n),d[m+1]=1-Tn(p,l,"y","z",r,e);break;case 1:p.set(-1,0,0),d[m+0]=1-Tn(p,l,"z","y",r,n),d[m+1]=1-Tn(p,l,"y","z",r,e);break;case 2:p.set(0,1,0),d[m+0]=1-Tn(p,l,"x","z",r,t),d[m+1]=Tn(p,l,"z","x",r,n);break;case 3:p.set(0,-1,0),d[m+0]=1-Tn(p,l,"x","z",r,t),d[m+1]=1-Tn(p,l,"z","x",r,n);break;case 4:p.set(0,0,1),d[m+0]=1-Tn(p,l,"x","y",r,t),d[m+1]=1-Tn(p,l,"y","x",r,e);break;case 5:p.set(0,0,-1),d[m+0]=Tn(p,l,"x","y",r,t),d[m+1]=1-Tn(p,l,"y","x",r,e);break}}}const rp=new Dn,op=new ns,ap=new P,Ha=new P;let Si=1;function V0(i,t){const e=Si;Si=i;try{return t()}finally{Si=e}}function fn(i,t=6){return Si<.4&&(t=Math.min(t,4)),Si>=1||i<=t?i:Math.max(t,Math.round(i*Si))}function bb(i,t,e){return ap.set(i?i[0]:0,i?i[1]:0,i?i[2]:0),rp.set(t?t[0]:0,t?t[1]:0,t?t[2]:0),op.setFromEuler(rp),e==null?Ha.set(1,1,1):typeof e=="number"?Ha.set(e,e,e):Ha.set(e[0],e[1],e[2]),new oe().compose(ap,op,Ha)}class qt{constructor(){this.parts=[]}add(t,e,n,s,r,o=1){return this.parts.push({geo:t,color:e,m:bb(n,s,r),k:o}),this}addMatrix(t,e,n,s=1){return this.parts.push({geo:t,color:e,m:n.clone(),k:s}),this}get size(){return this.parts.length}build(){if(!this.parts.length)return null;const t=new vt,e=[];for(const s of this.parts){const r=s.geo.index?s.geo.toNonIndexed():s.geo.clone();for(const l of Object.keys(r.attributes))l!=="position"&&l!=="normal"&&r.deleteAttribute(l);r.morphAttributes={},r.clearGroups(),r.attributes.normal||r.computeVertexNormals(),r.applyMatrix4(s.m),t.set(s.color);const o=r.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[l*3]=t.r*s.k,a[l*3+1]=t.g*s.k,a[l*3+2]=t.b*s.k;r.setAttribute("color",new Be(a,3)),e.push(r)}const n=yb(e,!1);for(const s of e)s.dispose();return n.computeBoundingSphere(),n.computeBoundingBox(),n}}const S={box:(i,t,e)=>new Ti(i,t,e),rbox:(i,t,e,n=.06,s=2)=>Si<.75?new Ti(i,t,e):new Mb(i,t,e,s,Math.min(n,i/2,t/2,e/2)*.999),cyl:(i,t,e,n=12,s=!1)=>new Ki(i,t,e,fn(n),1,s),cone:(i,t,e=10)=>new Gl(i,t,fn(e)),sphere:(i,t=14,e=10)=>new qr(i,fn(t),fn(e,4)),ico:(i,t=0)=>new ku(i,Si<.75?Math.max(0,t-1):t),dodeca:i=>new Xl(i,0),capsule:(i,t,e=4,n=10)=>new Ou(i,Math.max(.001,t),fn(e,1),fn(n)),torus:(i,t,e=8,n=20,s=Math.PI*2)=>new zu(i,t,fn(e,3),fn(n),s),plane:(i,t)=>new Ai(i,t),circle:(i,t=16)=>new Bu(i,fn(t))};function Jn(i,t=16,e=0,n=Math.PI*2){return new na(i.map(([s,r])=>new nt(Math.max(5e-4,s),r)),fn(t),e,n)}const zc=[[0,.06],[.32,0],[.68,.05],[.92,.2],[1,.45],[.95,.7],[.76,.9],[.42,.99],[.14,.93],[0,.88]];function ii(i=.5,t=.8,e=8,n=28){const s=Si<.75?zc.filter((a,l)=>l%2===0||l===zc.length-1):zc,r=new na(s.map(([a,l])=>new nt(Math.max(5e-4,a*i),l*t)),fn(n,e)),o=r.attributes.position;for(let a=0;a<o.count;a++){const l=o.getX(a),c=o.getZ(a),h=Math.atan2(c,l),u=.9+.1*Math.abs(Math.cos(h*e/2));o.setX(a,l*u),o.setZ(a,c*u)}return r.computeVertexNormals(),r}function Sb(i="jack"){const t=[],e=n=>{const s=new Ji;n.forEach(([r,o],a)=>a?s.lineTo(r,o):s.moveTo(r,o)),s.closePath(),t.push(s)};if(i==="jack")e([[-.38,.12],[-.1,.12],[-.24,.4]]),e([[.1,.12],[.38,.12],[.24,.4]]),e([[-.07,-.02],[.07,-.02],[0,.1]]),e([[-.44,-.1],[-.3,-.2],[-.18,-.1],[-.06,-.2],[.06,-.1],[.18,-.2],[.3,-.1],[.44,-.1],[.32,-.3],[.12,-.39],[-.12,-.39],[-.32,-.3]]);else if(i==="angry")e([[-.4,.3],[-.08,.14],[-.34,.08]]),e([[.4,.3],[.08,.14],[.34,.08]]),e([[-.42,-.08],[-.28,-.16],[-.2,-.06],[-.1,-.18],[0,-.06],[.1,-.18],[.2,-.06],[.28,-.16],[.42,-.08],[.24,-.34],[-.24,-.34]]);else{const n=r=>{const o=new Ji;o.absellipse(r,.2,.1,.13,0,Math.PI*2,!1,0),t.push(o)};n(-.22),n(.22);const s=new Ji;s.moveTo(-.34,-.08),s.quadraticCurveTo(0,-.5,.34,-.08),s.quadraticCurveTo(0,-.24,-.34,-.08),t.push(s)}return t}function es(i,t,e){const n=new Yl(Sb(i),fn(4,2));n.scale(t,t,1);const s=n.attributes.position;for(let r=0;r<s.count;r++){const o=s.getX(r),a=s.getY(r);s.setZ(r,Math.sqrt(Math.max(0,e*e-o*o-a*a))+.012)}return n.computeVertexNormals(),n}function Pe(i,t,e=t,n=16,s=6){n=fn(n,3),s=fn(s,4);const r=new T0(i.map(h=>new P(h[0],h[1],h[2]))),o=new Vu(r,n,1,s,!1),a=o.attributes.position,l=new P,c=new P;for(let h=0;h<=n;h++){r.getPointAt(h/n,l);const u=t+(e-t)*(h/n);for(let d=0;d<=s;d++){const f=h*(s+1)+d;c.fromBufferAttribute(a,f).sub(l).multiplyScalar(u).add(l),a.setXYZ(f,c.x,c.y,c.z)}}return o.computeVertexNormals(),o}function wb(i=.75,t=22,e=.06){const n=new Ji;for(let o=0;o<t;o++){const a=o/t*Math.PI*2,l=(o+.6)/t*Math.PI*2,c=[Math.cos(a)*i*.82,Math.sin(a)*i*.82],h=[Math.cos(l)*i,Math.sin(l)*i];o===0?n.moveTo(c[0],c[1]):n.lineTo(c[0],c[1]),n.lineTo(h[0],h[1])}n.closePath();const s=new _l;s.absarc(0,0,i*.16,0,Math.PI*2,!0),n.holes.push(s);const r=new $l(n,{depth:e,bevelEnabled:!1,curveSegments:4});return r.translate(0,0,-e/2),r}function Eb(i,t,e=5,n=.05){const s=new Ji;for(let o=0;o<e*2;o++){const a=o/(e*2)*Math.PI*2+Math.PI/2,l=o%2?t:i;o===0?s.moveTo(Math.cos(a)*l,Math.sin(a)*l):s.lineTo(Math.cos(a)*l,Math.sin(a)*l)}s.closePath();const r=new $l(s,{depth:n,bevelEnabled:!0,bevelSize:n*.4,bevelThickness:n*.4,bevelSegments:1});return r.translate(0,0,-n/2),r}const To='"Luckiest Guy", "Bungee", Impact, "Arial Black", sans-serif';function Tb(i,t={}){const e=t.w??1024,n=t.h??192,s=document.createElement("canvas");s.width=e,s.height=n;const r=s.getContext("2d"),o=t.bg??"#3B1260";r.fillStyle=t.border??"#1A0B2E",bs(r,0,0,e,n,n*.22),r.fill(),r.fillStyle=o,bs(r,n*.07,n*.07,e-n*.14,n-n*.14,n*.17),r.fill(),r.globalAlpha=.12,r.fillStyle="#000";for(let u=0;u<9;u++)r.fillRect(n*.1,n*.15+u*n*.08,e-n*.2,2);r.globalAlpha=1;let a=n*.56;r.font=`${a}px ${To}`;const l=e-n*.5,c=r.measureText(i).width;c>l&&(a*=l/c,r.font=`${a}px ${To}`),r.textAlign="center",r.textBaseline="middle",r.lineJoin="round",r.lineWidth=a*.18,r.strokeStyle="#1A0B2E",r.strokeText(i,e/2,n*.54),r.fillStyle=t.fg??"#FFB21E",r.fillText(i,e/2,n*.54);const h=new ea(s);return h.colorSpace=$e,h.anisotropy=4,h}function bs(i,t,e,n,s,r){const o=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+o,e),i.lineTo(t+n-o,e),i.quadraticCurveTo(t+n,e,t+n,e+o),i.lineTo(t+n,e+s-o),i.quadraticCurveTo(t+n,e+s,t+n-o,e+s),i.lineTo(t+o,e+s),i.quadraticCurveTo(t,e+s,t,e+s-o),i.lineTo(t,e+o),i.quadraticCurveTo(t,e,t+o,e),i.closePath()}function lp(i,t){if(i===t)return!0;if(!i||!t||i.length!==t.length)return!1;for(let e=0;e<i.length;e++)if(i[e]!==t[e])return!1;return!0}function Ab(i,t){const e=Object.keys(i.attributes);if(e.length!==Object.keys(t.attributes).length)return!1;for(const n of e){const s=i.attributes[n],r=t.attributes[n];if(!r||s.itemSize!==r.itemSize||!lp(s.array,r.array))return!1}return lp(i.index&&i.index.array,t.index&&t.index.array)}function H0(i,t){if(!i)return i;for(const e of t)if(e&&e!==i&&Ab(i,e))return i.dispose(),e;return i}function G0(i,t,e,n){const s=new Mn(i,t,n);s.instanceMatrix=e,s.count=0,s.visible=!1,s.matrixAutoUpdate=!1,s.castShadow=!0,s.receiveShadow=!1;let r=0;return s.onBeforeRender=()=>{r=s.count,s.count=0},s.onAfterRender=()=>{s.count=r},s}const Tt={pumpkin:"#FF5E00",stem:"#3E7A1E",glow:"#FFE600",stone:"#7A7D82",stoneDark:"#5E6166",iron:"#222429",bone:"#E8E2CF",wood:"#5A3620",purple:"#6A2C91",purpleDark:"#3A1650",roofPurple:"#2E1446",hay:"#D9B24A",black:"#141218"},sn=Math.PI;let Cb=class{constructor(){this.body=new qt,this.flat=new qt,this.glow=new qt,this.flicker=new qt,this.signs=[]}};function As(i,t,e,n,s={}){const r=s.ry||0,o=s.color||Tt.pumpkin;i.body.add(ii(e,n,8,20),o,t,[0,r,0]);const a=Math.sin(r),l=Math.cos(r);i.body.add(S.cyl(e*.07,e*.11,e*.4,6),Tt.stem,[t[0]+a*e*.04,t[1]+n*.95,t[2]+l*e*.04],[.25,r,.1]),s.face&&(s.flicker?i.flicker:i.glow).add(es(s.face,e*1.15,e*1.04),s.faceColor||"#FFD21A",[t[0],t[1]+n*.47,t[2]],[0,r,0],[1,n/(2*e)+.15,1],s.glowK??1.7)}function $r(i,t,e=1,n="#FFB040"){const s=e;i.body.add(S.box(.3*s,.05*s,.3*s),Tt.iron,[t[0],t[1]+.22*s,t[2]]),i.body.add(S.cone(.2*s,.16*s,4),Tt.iron,[t[0],t[1]+.32*s,t[2]],[0,sn/4,0]),i.body.add(S.box(.3*s,.05*s,.3*s),Tt.iron,[t[0],t[1]-.2*s,t[2]]);for(const[r,o]of[[-1,-1],[1,-1],[-1,1],[1,1]])i.body.add(S.box(.035*s,.42*s,.035*s),Tt.iron,[t[0]+r*.13*s,t[1],t[2]+o*.13*s]);i.flicker.add(S.box(.22*s,.34*s,.22*s),n,t,null,null,2.2)}function cp(i,t=0){const r=t?"#7A35A3":Tt.purple;i.body.add(S.rbox(3.4,2.4,3,.1),r,[0,2.4/2+.15,0]),i.body.add(S.rbox(3.4+.3,.3,3+.3,.06),Tt.stoneDark,[0,.15,0]);for(const o of[-3.4/2,3.4/2])for(const a of[-3/2,3/2])i.body.add(S.box(.18,2.4,.18),Tt.purpleDark,[o,2.4/2+.15,a]);i.body.add(S.box(3.4+.1,.16,3+.1),Tt.purpleDark,[0,2.4+.1,0]),i.flat.add(S.cone(2.85,3.6,4),Tt.roofPurple,[.12,2.4+1.95,0],[.05,sn/4,-.08],[1,1,.95]),i.flat.add(S.cone(.35,1,4),Tt.roofPurple,[.42,2.4+4,.05],[.1,sn/4,-.55]),i.body.add(S.box(.5,1.4,.5),"#4B3B4E",[-.95,2.4+1.6,-.6],[0,0,.06]),i.body.add(S.box(.62,.16,.62),"#2F2532",[-.9,2.4+2.32,-.6],[0,0,.06]),i.body.add(S.rbox(.9,1.5,.12,.08),"#4A2410",[0,.95,3/2+.04]),i.body.add(S.box(1.2,.12,.5),Tt.stoneDark,[0,.2,3/2+.3]),i.glow.add(S.sphere(.05,6,4),"#FFD060",[.28,.95,3/2+.12],null,null,2);for(const o of[-1.05,1.05])i.glow.add(S.box(.62,.62,.05),"#FFC23A",[o,1.55,3/2+.06],null,null,1.9),i.body.add(S.box(.74,.08,.08),Tt.purpleDark,[o,1.55,3/2+.1]),i.body.add(S.box(.08,.74,.08),Tt.purpleDark,[o,1.55,3/2+.1]),i.body.add(S.box(.82,.1,.14),Tt.purpleDark,[o,1.2,3/2+.1]);i.glow.add(S.circle(.3,14),"#FFC23A",[0,2.4+1.05,1.13],[-.66,0,0],null,1.9),$r(i,[.75,2.05,3/2+.28],.7),As(i,[-.75,.3,3/2+.55],.32,.5,{face:"jack",ry:.3})}function hp(i,t=0){const e=t?"#8E2CC2":"#D8322B";i.body.add(Jn([[0,0],[1.15,0],[1.2,.5],[1.05,1.4],[1,2],[1.08,2.4],[0,2.4]],20),"#F1E3C4",[0,0,0]);const n=new qr(2.3,22,10,0,sn*2,0,sn/2);i.body.add(n,e,[0,2.2,0],null,[1,.78,1]),i.body.add(S.cyl(2.3,1.2,.3,22),"#E9D3B0",[0,2.08,0]);const s=[[.2,.5],[1.2,.35],[2.4,.55],[3.5,.3],[4.6,.6],[5.6,.4],[.8,1],[2,1.05],[3,.95],[4.2,1.1],[5.2,.9],[0,1.4]];for(const[r,o]of s){const a=2.3*Math.sin(o)*Math.cos(r),l=2.3*Math.sin(o)*Math.sin(r),c=2.2+2.3*.78*Math.cos(o);i.body.add(S.sphere(.3,10,6),"#FFF6E8",[a,c,l],null,[1,.6,1])}i.body.add(S.rbox(.75,1.25,.14,.12),"#7A3E1C",[0,.63,1.12]),i.glow.add(S.circle(.24,14),"#FFC23A",[-.55,1.6,1.07],[0,-.45,0],null,1.9),i.glow.add(S.circle(.24,14),"#FFC23A",[.55,1.6,1.07],[0,.45,0],null,1.9),i.body.add(S.torus(.26,.05,6,16),"#7A3E1C",[-.55,1.6,1.08],[0,-.45,0]),i.body.add(S.torus(.26,.05,6,16),"#7A3E1C",[.55,1.6,1.08],[0,.45,0]),$r(i,[.62,1.05,1.3],.55)}function Rb(i){i.body.add(S.box(6,.08,.05),Tt.black,[0,.4,0]),i.body.add(S.box(6,.08,.05),Tt.black,[0,.85,0]);for(let e=0;e<20;e++){const n=-2.85+e*.3,s=1.05+e%2*.08;i.body.add(S.box(.13,s,.045),Tt.black,[n,s/2,.04]),i.body.add(S.cone(.092,.16,4),Tt.black,[n,s+.08,.04],[0,sn/4,0],[1,1,.35])}}function Pb(i){i.body.add(S.cyl(.07,.09,2.5,8),Tt.iron,[0,1.25,0]),i.body.add(S.cyl(.18,.22,.25,8),Tt.iron,[0,.12,0]),i.body.add(Pe([[0,2.35,0],[.15,2.6,.1],[.45,2.55,.35],[.5,2.35,.45]],.035,.03,12,5),Tt.iron),i.body.add(S.torus(.12,.025,4,12,sn*1.4),Tt.iron,[0,2.6,0],[0,0,.6]),$r(i,[.5,2.05,.45],.9)}function up(i,t=0){const e=t?-.4:.35;i.body.add(Pe([[0,-.2,0],[.3,1,.15],[-.25,2.1,0],[e,3,-.2],[e*.4,3.9,.1]],.42,.13,20,7),"#4A2C1E"),i.body.add(Pe([[.1,2.3,0],[.9,2.9,.2],[1.5,3.1,.6]],.13,.04,10,5),"#4A2C1E"),i.body.add(Pe([[-.1,2.6,0],[-.9,3.2,-.2],[-1.4,3.8,-.1]],.12,.04,10,5),"#4A2C1E"),i.body.add(Pe([[0,1.6,.1],[.5,1.8,.8],[.6,2.2,1.2]],.1,.03,8,5),"#4A2C1E");const n=[[e*.4,4.4,.1,1.25,"#F07A1A"],[1.4,3.5,.5,.95,"#D85A10"],[-1.3,4.1,-.1,1,"#FF9A2A"],[.4,3.6,-.8,.9,"#E86A14"],[-.5,3.4,.8,.85,"#FF8A1E"],[.6,2.5,1.3,.55,"#F07A1A"]];for(const[s,r,o,a,l]of n)i.flat.add(S.ico(a,1),l,[s,r,o],[s,r,o],[1,.85,1])}function Fb(i){for(const t of[-3.9,3.9])i.body.add(S.rbox(.9,.5,.9,.08),Tt.stoneDark,[t,.25,0]),i.body.add(S.rbox(.62,4.2,.62,.1),"#5A2E7A",[t,2.5,0]),i.body.add(S.rbox(.9,.3,.9,.08),Tt.purpleDark,[t,4.6,0]),As(i,[t,4.75,0],.55,.85,{face:"jack",flicker:!0}),$r(i,[t*.82,3,.4],.8);i.body.add(Pe([[-3.9,4.4,0],[-2.4,5.6,0],[0,6,0],[2.4,5.6,0],[3.9,4.4,0]],.2,.2,30,8),"#4A2C1E"),i.body.add(S.rbox(7,1.25,.22,.1),"#2B1240",[0,4.75,0]),i.signs.push({text:"WELCOME TO PUMPKIN HOLLOW",w:6.7,h:1.05,pos:[0,4.75,.125],opts:{bg:"#4B1E70",fg:"#FFB21E"}});for(const t of[-2.2,0,2.2]){const e=t===0?5.55:5.2;i.body.add(S.cyl(.012,.012,.4,4),Tt.iron,[t,e+.18,.05]),i.flicker.add(S.sphere(.14,8,6),"#FFB040",[t,e-.1,.05],null,null,2.2)}}function Db(i){i.body.add(S.box(.18,1.7,.18),Tt.wood,[0,.85,0],[0,0,.04]),i.body.add(S.box(1,.12,.14),Tt.wood,[0,1.35,0],[0,0,-.1]),As(i,[.05,1.72,0],.4,.62,{face:"jack",flicker:!0})}function Lb(i){i.body.add(S.rbox(1.5,.75,.9,.12),Tt.hay,[0,.38,0]),i.body.add(S.rbox(1.5,.75,.9,.12),"#C9A03C",[.4,.38,-1],[0,.3,0]),i.body.add(S.rbox(1.4,.7,.85,.12),"#E2BC58",[.1,1.1,-.45],[0,-.15,0]);for(let t=0;t<5;t++)i.body.add(S.box(1.52,.03,.92),"#A8822C",[0,.18+t*.13,0]);As(i,[-.9,0,.6],.45,.68,{face:"happy",ry:.4}),As(i,[.7,0,.75],.36,.52,{face:"jack",ry:-.3}),As(i,[.2,1.45,-.4],.38,.58,{face:"angry",flicker:!0}),As(i,[1.3,0,.1],.26,.38,{})}function Ib(i){for(const t of[-3.9,3.9])i.body.add(S.rbox(1.1,.5,1.1,.06),Tt.stoneDark,[t,.25,0]),i.flat.add(S.box(.9,4,.9),Tt.stone,[t,2.4,0]),i.body.add(S.rbox(1.15,.3,1.15,.06),Tt.stoneDark,[t,4.5,0]),i.body.add(S.sphere(.4,12,8),Tt.stone,[t,5,0]),$r(i,[t*.82,3.3,.55],.85,"#9CFF5A");i.body.add(Pe([[-3.6,4.3,0],[-2,5.5,0],[0,5.9,0],[2,5.5,0],[3.6,4.3,0]],.09,.09,30,6),Tt.iron),i.body.add(Pe([[-3.6,3.95,0],[-2,5.05,0],[0,5.45,0],[2,5.05,0],[3.6,3.95,0]],.06,.06,30,6),Tt.iron);for(let t=-6;t<=6;t++){const e=t*.55,n=5.9-.11*t*t*.55;i.body.add(S.cone(.07,.35,4),Tt.iron,[e,n+.15,0])}i.body.add(S.box(.05,.6,.05),Tt.iron,[-1.8,4.75,0]),i.body.add(S.box(.05,.6,.05),Tt.iron,[1.8,4.75,0]),i.body.add(S.rbox(4.6,.95,.16,.08),"#1E2A22",[0,4.35,0]),i.signs.push({text:"SPOOKY CEMETERY",w:4.4,h:.8,pos:[0,4.35,.09],opts:{bg:"#2D3B30",fg:"#B8FF5A",border:"#0E1410"}})}function Ub(i){i.flat.add(S.box(6,.4,.4),Tt.stone,[0,.2,0]),i.body.add(S.box(6,.06,.06),Tt.iron,[0,.85,0]),i.body.add(S.box(6,.06,.06),Tt.iron,[0,1.65,0]);for(let e=0;e<24;e++){const n=-2.875+e*.25;i.body.add(S.cyl(.025,.025,1.6,5),Tt.iron,[n,1.2,0]),i.body.add(S.cone(.06,.2,4),Tt.iron,[n,2.08,0])}i.flat.add(S.box(.4,2.1,.4),Tt.stoneDark,[-6/2,1.05,0]),i.body.add(S.sphere(.2,10,6),Tt.stone,[-6/2,2.25,0])}function dp(i,t=0){const e="#3B2F35",n=t?-1:1;i.body.add(Pe([[0,-.2,0],[.2*n,1.2,0],[-.1*n,2.4,.2],[.3*n,3.6,0],[.1*n,4.6,-.1]],.38,.06,22,7),e),i.body.add(Pe([[.05,2.2,0],[.9*n,2.9,.3],[1.6*n,3,.5],[2*n,3.5,.4]],.12,.02,12,5),e),i.body.add(Pe([[0,3,0],[-.8*n,3.6,-.3],[-1.3*n,4.4,-.2],[-1.2*n,4.9,0]],.1,.02,12,5),e),i.body.add(Pe([[.2,3.7,0],[.9*n,4.3,-.4],[1.2*n,4.9,-.6]],.08,.02,10,5),e),i.body.add(Pe([[0,1.4,0],[-.6*n,1.9,.6],[-1.1*n,1.9,.9]],.08,.02,10,5),e),i.body.add(Pe([[-.3,0,0],[-.8*n,.1,.4],[-1.2*n,0,.5]],.12,.03,8,5),e),i.body.add(Pe([[.3,0,0],[.7*n,.12,-.5],[1.1*n,0,-.6]],.12,.03,8,5),e)}function Nb(i){i.body.add(S.sphere(1.1,22,16),Tt.bone,[0,1.45,0],null,[1,.92,1.02]),i.body.add(S.rbox(1.35,.55,1,.18),Tt.bone,[0,.45,.22]),i.body.add(S.rbox(1.6,.4,.9,.15),"#DCD4BC",[0,.85,.3]);for(const e of[-.42,.42])i.body.add(S.sphere(.33,14,10),"#1A0B1E",[e,1.32,.84]),i.flicker.add(S.sphere(.1,8,6),"#FF8A1A",[e,1.3,1.12],null,null,2.4);i.body.add(S.cone(.13,.28,3),"#1A0B1E",[0,.98,1.08],[sn,0,0]);for(let e=-3;e<=3;e++)i.body.add(S.rbox(.16,.22,.1,.03),"#FFFDF4",[e*.18,.66,.72]);const t=[[-.45,.1,.55],[.1,-.2,.75],[.55,.25,.45],[-.1,.45,.35]];for(const[e,n,s]of t){const r=2.35-Math.abs(e)*.2;i.body.add(S.cyl(.08,.09,s,8),"#F4EAD0",[e,r+s/2,n]),i.body.add(S.sphere(.07,6,4),"#F4EAD0",[e+.07,r+s*.6,n],null,[.7,1.6,.7]),i.flicker.add(S.cone(.05,.16,6),"#FFC23A",[e,r+s+.1,n],null,null,2.6)}i.body.add(S.cyl(1,1.25,.25,14),"#3E3A30",[0,.05,.1])}function fp(i,t=0){const e=t?[[-.9,0,.1,"round",1.25],[.6,.3,-.2,"cross",1.4],[1.7,-.4,.15,"slab",.9]]:[[-1,.1,-.15,"slab",1],[.3,-.2,.08,"round",1.15],[1.5,.4,-.1,"round",.95]];for(const[n,s,r,o,a]of e){const l=o==="cross"?"#8E9399":n>0?"#9A9FA6":"#868B92",c=.14;o==="round"?(i.body.add(S.rbox(.85,a-.42,.24,.06),l,[n,(a-.42)/2,s],[0,r,0]),i.body.add(new Ki(.425,.425,.24,16,1,!1,0,sn),l,[n,a-.42,s],[sn/2,r,sn/2])):o==="cross"?(i.body.add(S.rbox(.28,a,.24,.05),l,[n,a/2,s],[0,r,0]),i.body.add(S.rbox(.9,.26,.24,.05),l,[n,a*.68,s],[0,r,0])):i.body.add(S.rbox(1,a,.26,.08),l,[n,a/2,s],[0,r,-.08]);const h=o==="cross"?a*.68:a*.55,u=Math.cos(r),d=-Math.sin(r),f=(p,_)=>[n+u*p+Math.sin(r)*c,_,s+d*p+Math.cos(r)*c];i.body.add(S.sphere(.07,8,6),"#1A1420",f(-.15,h),null,[1,1.25,.5]),i.body.add(S.sphere(.07,8,6),"#1A1420",f(.15,h),null,[1,1.25,.5]),i.glow.add(S.sphere(.022,6,4),"#FFFFFF",f(-.13,h+.03),null,null,1),i.glow.add(S.sphere(.022,6,4),"#FFFFFF",f(.17,h+.03),null,null,1),i.body.add(S.torus(.08,.018,4,10,sn),"#1A1420",f(0,h-.13),[0,r,sn]),i.body.add(S.sphere(.055,8,6),"#E58AA0",f(-.27,h-.1),null,[1,.6,.4]),i.body.add(S.sphere(.055,8,6),"#E58AA0",f(.27,h-.1),null,[1,.6,.4]),i.flat.add(S.sphere(.6,8,4),"#3E4A2E",[n,-.05,s+.1],null,[1,.25,.7])}}function Ob(i){const t="#5B2A86";for(const e of[-4.3,4.3]){i.body.add(S.cyl(1.5,1.7,6.5,16),t,[e,3.25,0]),i.body.add(S.cyl(1.8,1.8,.5,16),Tt.purpleDark,[e,6.6,0]);for(let n=0;n<8;n++){const s=n/8*sn*2;i.body.add(S.box(.5,.5,.4),Tt.purpleDark,[e+Math.cos(s)*1.6,7.05,Math.sin(s)*1.6],[0,-s,0])}i.flat.add(S.cone(1.7,3.2,10),Tt.roofPurple,[e,8.7,0]),i.glow.add(S.rbox(.45,.8,.05,.12),"#FFC23A",[e,4.2,1.52],null,null,2),i.glow.add(S.rbox(.45,.8,.05,.12),"#FFC23A",[e,2,1.66],null,null,2),i.flicker.add(S.cone(.2,.5,6),"#FF9A1A",[e*.8,3,1.75],null,null,2.6)}i.body.add(S.box(7.2,2,1.6),"#4E2474",[0,6,0]);for(let e=0;e<7;e++)i.body.add(S.box(.55,.55,1.6),"#4E2474",[-3+e*1,7.25,0]);i.body.add(S.torus(2.8,.25,6,20,sn),"#3A1650",[0,5,.75],null,[1,.25,1]),i.body.add(S.rbox(4.4,.9,.16,.08),"#2B1240",[0,6,.86]),i.signs.push({text:"CASTLE COURTYARD",w:4.2,h:.75,pos:[0,6,.95],opts:{bg:"#4B1E70",fg:"#FFE600"}});for(const e of[-2.2,2.2])i.body.add(S.box(.9,1.6,.06),"#E8A21A",[e,4.2,.83]),i.body.add(S.cone(.45,.4,3),"#E8A21A",[e,3.25,.83],[sn,0,0],[1,1,.12])}function pp(i,t=0){const e=t?1.8:2.1,n=t?2.6:3;i.body.add(ii(e,n,10,28),t?"#FF7A1A":Tt.pumpkin,[0,0,0]),i.body.add(Pe([[0,n*.85,0],[.1,n+.5,0],[.5,n+.9,.1]],.32,.16,10,7),Tt.stem),i.flat.add(S.ico(.5,0),"#4E9A2A",[.6,n+.85,.3],[.3,.6,.2],[1.3,.3,.8]),i.body.add(S.rbox(.85,1.4,.3,.12),"#4A2410",[0,.7,e*.93]),i.body.add(S.cone(.43,.35,12),"#4A2410",[0,1.55,e*.93],null,[1,1,.34]),i.glow.add(S.circle(.3,14),"#FFC23A",[-.95,1.7,e*.82],[0,-.48,0],null,2),i.glow.add(S.circle(.3,14),"#FFC23A",[.95,1.7,e*.82],[0,.48,0],null,2),i.body.add(S.torus(.3,.06,6,16),"#3E7A1E",[-.95,1.7,e*.83],[0,-.48,0]),i.body.add(S.torus(.3,.06,6,16),"#3E7A1E",[.95,1.7,e*.83],[0,.48,0]),$r(i,[.7,1.5,e*.98+.1],.55)}function Bb(i){i.flat.add(S.box(.55,1.5,.55),Tt.stone,[0,.75,0]),i.body.add(S.rbox(.7,.18,.7,.04),Tt.stoneDark,[0,1.55,0]),i.body.add(Jn([[.05,0],[.32,.05],[.42,.3],[.38,.32],[.05,.12]],12),Tt.iron,[0,1.62,0]),i.flicker.add(S.cone(.28,.75,8),"#FF8A1A",[0,2.2,0],null,null,2.6),i.flicker.add(S.cone(.16,.45,8),"#FFE600",[0,2.1,0],null,null,2.8)}function kb(i){i.flat.add(S.box(6,.95,.45),Tt.stone,[0,.48,0]),i.flat.add(S.box(6+.05,.14,.55),Tt.stoneDark,[0,1,0]);for(let e=0;e<6;e++)i.flat.add(S.box(.04,.9,.47),Tt.stoneDark,[-6/2+.5+e,.48,0]);i.flat.add(S.box(6+.02,.04,.47),Tt.stoneDark,[0,.5,0]),i.flat.add(S.box(.6,1.4,.6),Tt.stoneDark,[-6/2,.7,0]),i.body.add(S.sphere(.24,10,6),Tt.stone,[-6/2,1.55,0]),i.flat.add(S.box(6,1.8,.4),"#5E6166",[0,-.9,0])}function zb(i){const t="#4B2A6E",e="#2E1446";i.body.add(S.box(26,14,8),t,[0,7,0]),i.body.add(S.box(12,26,10),"#55307C",[0,13,-3]);for(let s=0;s<9;s++)i.body.add(S.box(1.6,1.6,8),t,[-12+s*3,14.6,0]);const n=[[-14,22,3],[14,22,3],[-6,32,2.5],[6,30,2.5],[0,40,3.2]];for(const[s,r,o]of n)i.body.add(S.cyl(o,o*1.1,r,14),t,[s,r/2,s===0?-4:1]),i.body.add(S.cone(o*1.35,o*2.6,14),e,[s,r+o*1.3,s===0?-4:1]),i.glow.add(S.box(.5,.5,.5),Tt.glow,[s,r+o*2.7,s===0?-4:1],null,null,3);for(let s=0;s<4;s++)for(let r=0;r<7;r++)(r*7+s*3)%5!==0&&i.glow.add(S.box(.9,1.5,.2),"#FFC23A",[-10.5+r*3.5,3+s*3,4.05],null,null,2.4);for(let s=0;s<6;s++)for(const r of[-3,0,3])i.glow.add(S.box(.9,1.6,.2),"#FFD050",[r,16+s*3.2,2.05],null,null,2.6);i.glow.add(S.rbox(4,6,.3,1.5),"#FF9A1A",[0,3,4.05],null,null,2)}const W0={witchCottage:i=>cp(i,0),witchCottageB:i=>cp(i,1),mushroomRed:i=>hp(i,0),mushroomPurple:i=>hp(i,1),picketFence:Rb,lanternPost:Pb,twistedTree:i=>up(i,0),twistedTreeB:i=>up(i,1),archVillage:Fb,cornPost:Db,hayPile:Lb,cemeteryGate:Ib,ironFence:Ub,deadTree:i=>dp(i,0),deadTreeB:i=>dp(i,1),giantSkull:Nb,tombstones:i=>fp(i,0),tombstonesB:i=>fp(i,1),castleGate:Ob,pumpkinHut:i=>pp(i,0),pumpkinHutB:i=>pp(i,1),torch:Bb,bridgeWall:kb,castleBackdrop:zb},X0=new Set(["castleBackdrop"]),q0=new Set(["castleBackdrop","picketFence","ironFence"]),Vc=new Map,mp=new Map;function Ao(i,t,e=1){const n=e===1?i:i+"@"+e;if(Vc.has(n))return Vc.get(n);const s=new Cb;V0(e,()=>(t||W0[i])(s));const r=e===1?null:Ao(i,t,1),o={body:s.body.build(),flat:s.flat.build(),glow:s.glow.build(),flicker:s.flicker.build(),signs:r?r.signs:s.signs.map(l=>({...l,tex:Tb(l.text,l.opts)}))},a=mp.get(i)||[];for(const l of["body","flat","glow","flicker"])o[l]=H0(o[l],a.map(c=>c[l]));return a.push(o),mp.set(i,a),Vc.set(n,o),o}function Vb(i,{nofog:t=!1,shadows:e=!0}={}){const n=new Ve,s=(r,o,a)=>{if(!r)return;const l=new me(r,o);l.castShadow=a&&e,l.receiveShadow=e,n.add(l)};s(i.body,t?we.bodyNoFog:we.body,!0),s(i.flat,t?je({vc:!0,flat:!0,nofog:!0}):we.flat,!0),s(i.glow,t?we.glowNoFog:we.glow,!1),s(i.flicker,we.flicker,!1);for(const r of i.signs){const o=new me(new Ai(r.w,r.h),je({map:r.tex}));o.position.set(r.pos[0],r.pos[1],r.pos[2]),n.add(o)}return n}function Hb(i){const t=Ao(i),e=Vb(t,{nofog:X0.has(i),shadows:!q0.has(i)});return e.userData.type=i,e}const Gb=Object.keys(W0),Xi=Math.PI/2,Wb=["pumpkinKid","ghostKid","witch","vampire","skeleton","werewolf"],Ga=new oe,Xb=[-1,1],ki=i=>i>0?-Xi:Xi,qb={archVillage:4,cemeteryGate:4,castleGate:4},$b=64,$0=18,Y0=34,gp=[1,.5,.25],Hc=new P;class Yb{constructor(t,e){const n=X0.has(e);this.type=e,this.cast=!q0.has(e),this.cap=qb[e]||$b,this.n=0,this.items=[],this.free=[];for(let h=0;h<this.cap;h++)this.free.push({batch:this,i:-1,lod:-1});this.dirty=!1,this.mats=new Float32Array(this.cap*16),this.meshes=[],this.lod1=$0,this.lod2=Y0,this.cull=1/0;const s=Ao(e),r=s.signs.map(h=>({geo:new Ai(h.w,h.h).translate(h.pos[0],h.pos[1],h.pos[2]),mat:je({map:h.tex})}));let o=0;for(const h of[s.body,s.flat])h&&(h.boundingSphere||h.computeBoundingSphere(),o=Math.max(o,h.boundingSphere.center.length()+h.boundingSphere.radius));this.radius=o;const a=n?je({vc:!0,flat:!0,nofog:!0}):null;this.lods=gp.map((h,u)=>{const d=Ao(e,null,h),f={meshes:[],matrix:null,n:0},p=(_,g,m,M)=>{if(!_)return;const x=new Mn(_,g,this.cap);f.matrix?x.instanceMatrix=f.matrix:f.matrix=x.instanceMatrix,x.count=0,x.visible=!1,x.matrixAutoUpdate=!1,x.userData.cast=m&&u<2,x.userData.part=M,x.renderOrder=u+1,t.add(x),f.meshes.push(x),this.meshes.push(x)};p(d.body,n?we.bodyNoFog:we.body,!0,"body"),p(d.flat,a||we.flat,!0,"flat"),p(d.glow,n?we.glowNoFog:we.glow,!1),p(d.flicker,we.flicker,!1);for(const _ of r)p(_.geo,_.mat,!1);return f});const l=this.lods[0],c=Ao(e,null,gp[1]);for(const h of l.meshes.slice()){const u=h.userData.cast&&c[h.userData.part];if(!u||u===h.geometry)continue;h.userData.cast=!1;const d=G0(u,h.material,l.matrix,this.cap);d.userData.cast=!0,d.userData.proxy=!0,t.add(d),l.meshes.push(d),this.meshes.push(d)}this.setShadows(!0)}setShadows(t){const e=t&&this.cast;for(const n of this.meshes)n.castShadow=e&&n.userData.cast,n.receiveShadow=e&&!n.userData.proxy}add(){const t=this.free.pop();return t?(t.i=this.n++,t.lod=-1,this.items[t.i]=t,this.dirty=!0,t):null}setMatrix(t,e){e.toArray(this.mats,t.i*16),this.dirty=!0}remove(t){const e=--this.n;if(t.i!==e){this.mats.copyWithin(t.i*16,e*16,e*16+16);const n=this.items[e];this.items[t.i]=n,n.i=t.i}this.items[e]=null,t.i=-1,this.free.push(t),this.dirty=!0}sync(t,e,n=!1){const s=this.n,r=this.mats;let o=this.dirty||n;if(t){const l=this.radius;for(let c=0;c<s;c++){const h=this.items[c],u=c*16;Hc.set(r[u+12]-t.x,r[u+13]-t.y,r[u+14]-t.z);let d;if(Hc.dot(e)<-(l+8))d=-1;else{const f=Math.hypot(r[u],r[u+1],r[u+2]),p=Hc.length()-l*f*.5;d=p<this.lod1?0:p<this.lod2?1:p<this.cull?2:-1}d!==h.lod&&(h.lod=d,o=!0)}}else for(let l=0;l<s;l++)this.items[l].lod<0&&(this.items[l].lod=0);if(!o)return;this.dirty=!1;const a=this.lods;for(const l of a)l.n=0;for(let l=0;l<s;l++){const c=this.items[l];if(c.lod<0)continue;const h=a[c.lod];h.matrix.array.set(r.subarray(l*16,l*16+16),h.n++*16)}for(const l of a){const c=l.n;c>0&&(l.matrix.clearUpdateRanges(),l.matrix.addUpdateRange(0,c*16),l.matrix.needsUpdate=!0);for(const h of l.meshes)h.count=c,h.visible=c>0,c>0&&h.computeBoundingSphere()}}}class jb{constructor(t,e,n,s){this.scene=t,this.track=e,this.biomes=n,this.crowd=s,this.seed=1,this.batches=new Map;for(const r of Gb)r!=="castleBackdrop"&&this.batches.set(r,new Yb(t,r));this.slots=new Map,this._entryPool=[],this._emitPool=[],this._keys=[],this.shadows=!0,this.emitters=[],this.ahead=66,this.version=0,this.first=0,this.last=-1,this.backdrop=Hb("castleBackdrop"),this.backdrop.matrixAutoUpdate=!1,this.backdrop.visible=!1,t.add(this.backdrop),this.forceSync=!1,this._cam=new P,this._fwd=new P(0,0,-1)}setShadows(t){this.shadows=t;for(const e of this.batches.values())e.setShadows(t)}get propCount(){let t=0;for(const e of this.batches.values())t+=e.n;return t}reset(t){this.seed=t,this._freeOutside(1/0,-1/0);for(const e of this.batches.values())e.sync();this.emitters.length=0,this.first=0,this.last=-1,this.version++}setAhead(t){this.ahead=t}setLod(t,e){for(const n of this.batches.values())n.lod1=$0*t,n.lod2=Y0*t,n.cull=e;this.forceSync=!0}isAlcove(t){const e=this.biomes.slotStart(t)+Rn/2;if(this.biomes.id(e)!=="corn")return!1;const n=this.biomes.localSlot(e);return n<5||n>32?!1:mn(t,this.seed+97)<.24}alcoveSide(t){const e=mn(t,this.seed+98);return e<.4?-1:e<.8?1:0}update(t,e){const n=this.biomes;let s=null,r=null;e&&(r=e.getWorldDirection(this._fwd),s=this._cam.setFromMatrixPosition(e.matrixWorld));const o=n.slotOf(t-14),a=n.slotOf(t+this.ahead);if(o!==this.first||a!==this.last){this._freeOutside(o,a);for(let c=o;c<=a;c++)this.slots.has(c)||this._build(c);this.first=o,this.last=a,this.version++,this.emitters.length=0;for(const c of this.slots.values())for(let h=0;h<c.emitters.length;h++)this.emitters.push(c.emitters[h])}const l=this.forceSync;this.forceSync=!1;for(const c of this.batches.values())c.sync(s,r,l);this._updateBackdrop(t)}_freeOutside(t,e){const n=this._keys;n.length=0;for(const s of this.slots.keys())(s<t||s>e)&&n.push(s);for(let s=0;s<n.length;s++)this._free(n[s])}_free(t){const e=this.slots.get(t);if(e){for(const n of e.props)n.batch.remove(n);for(const n of e.crowd)this.crowd.remove(n);for(const n of e.emitters)this._emitPool.push(n);e.props.length=0,e.crowd.length=0,e.emitters.length=0,this._entryPool.push(e),this.slots.delete(t)}}_place(t,e,n,s,r,o=1,a=0){const l=this.batches.get(e),c=l.add();return c?(this.track.matrix(n,s,a,r,o,Ga),l.setMatrix(c,Ga),t.props.push(c),c):null}_crowd(t,e,n,s,r){const o=e.pick(Wb),a=r>0?-Xi+.55:Xi-.55,l=o==="witch"||o==="vampire"||o==="werewolf"?e.range(.95,1.08):e.range(.78,.92);this.track.matrix(n,s,0,a+e.range(-.2,.2),l,Ga);const c=this.crowd.add(o,Ga,e.range(0,10),e.int(0,3));c&&t.crowd.push(c)}_emit(t,e,n,s,r){const o=this._emitPool.pop()||{pos:new P,type:e};this.track.point(n,s,r,o.pos),o.type=e,t.emitters.push(o)}_build(t){const e=this.biomes,n=e.slotStart(t),s=n+Rn/2,r=e.id(s),o=e.localSlot(s),a=new jl(Fs(this.seed,t)),l=this._entryPool.pop()||{props:[],crowd:[],emitters:[]};this.slots.set(t,l);const c=Xb,h=o===0||o>=34;if(r==="village"){(o===17||o===2)&&(this._place(l,"archVillage",n+3,0,0),this._emit(l,"ember",n+3,-3.9,5.4),this._emit(l,"ember",n+3,3.9,5.4));for(const u of c){if(this._place(l,"picketFence",n+3,u*6.6,Xi),!h){const d=a.next(),f=u*a.range(9.5,11.5),p=n+a.range(1.5,4.5);d<.34?this._place(l,a.chance(.5)?"witchCottage":"witchCottageB",p,f,ki(u)+a.range(-.25,.25),a.range(.95,1.1)):d<.62?this._place(l,a.chance(.5)?"mushroomRed":"mushroomPurple",p,f,ki(u)+a.range(-.4,.4),a.range(.9,1.15)):this._place(l,a.chance(.5)?"twistedTree":"twistedTreeB",p,u*a.range(8,13),a.range(0,6.28),a.range(.9,1.25)),a.chance(.4)&&this._place(l,a.chance(.5)?"twistedTree":"twistedTreeB",n+a.range(0,6),u*a.range(15,22),a.range(0,6.28),a.range(1.1,1.5))}if((t+(u>0?1:0))%2===0&&o!==17&&this._place(l,"lanternPost",n+1,u*4.3,ki(u)),!h&&o!==17&&o!==2){const d=a.int(1,3);for(let f=0;f<d;f++)this._crowd(l,a,n+.8+f*(4.4/d)+a.range(0,.8),u*a.range(4.7,5.7),u)}}}else if(r==="corn"){const u=this.isAlcove(t),d=u?this.alcoveSide(t):9;for(const f of c)if((t+(f>0?0:1))%2===0&&(this._place(l,"cornPost",n+2,f*4.25,ki(f)),this._emit(l,"candle",n+2,f*4.25,2.1)),u&&(d===0||d===f)){this._place(l,"hayPile",n+3,f*6.4,ki(f)+a.range(-.3,.3));const p=a.int(2,3);for(let _=0;_<p;_++)this._crowd(l,a,n+1+_*1.6+a.range(0,.5),f*a.range(4.8,5.4),f)}}else if(r==="cemetery"){o===2&&this._place(l,"cemeteryGate",n+3,0,0);for(const u of c)if(this._place(l,"ironFence",n+3,u*6.6,Xi),!h){const d=a.next();if(d<.28?(this._place(l,"giantSkull",n+3,u*a.range(8.6,9.6),ki(u)+a.range(-.3,.3),a.range(1,1.25)),this._emit(l,"candle",n+3,u*9,3)):d<.75&&this._place(l,a.chance(.5)?"tombstones":"tombstonesB",n+a.range(2,4),u*a.range(8.2,10.5),ki(u)+a.range(-.3,.3)),a.chance(.6)&&this._place(l,a.chance(.5)?"deadTree":"deadTreeB",n+a.range(0,6),u*a.range(11,16),a.range(0,6.28),a.range(1,1.4)),a.chance(.55)&&o!==2){const f=a.int(1,2);for(let p=0;p<f;p++)this._crowd(l,a,n+1+p*2.5+a.range(0,1),u*a.range(4.7,5.6),u)}}}else{const u=o>=xl;o===2&&(this._place(l,"castleGate",n+3,0,0),this._emit(l,"fire",n+3.6,-3.45,3.25),this._emit(l,"fire",n+3.6,3.45,3.25));for(const d of c){if(u){this._place(l,"bridgeWall",n+3,d*3.35,Xi),o%2===0&&(this._place(l,"torch",n,d*3.35,0,.8,.6),this._emit(l,"fire",n,d*3.35,2.4));continue}if(o!==2&&(t+(d>0?1:0))%2===0&&(this._place(l,"torch",n+1.5,d*4.3,0),this._emit(l,"fire",n+1.5,d*4.3,2.25)),!h&&o>3&&(a.next()<.55&&this._place(l,a.chance(.5)?"pumpkinHut":"pumpkinHutB",n+a.range(2,4),d*a.range(9,11),ki(d)+a.range(-.35,.35),a.range(.95,1.15)),a.chance(.5)&&this._place(l,"ironFence",n+3,d*6.8,Xi),a.chance(.6))){const p=a.int(1,3);for(let _=0;_<p;_++)this._crowd(l,a,n+.8+_*(4.4/p)+a.range(0,.6),d*a.range(4.7,5.6),d)}}}}_updateBackdrop(t){const e=this.biomes;let s=t-e.lapPos(t)+3*zn;if(t>s+zn&&(s+=z0),!(t>s-zn*.6&&t<s+xl*Rn)){this.backdrop&&(this.backdrop.visible=!1);return}this.backdrop.visible=!0;const o=Math.max(t+110,s+120),a=mn(Math.floor(s),this.seed)<.5?-1:1;this.track.matrix(o,a*42,-6,0,2.2,this.backdrop.matrix),this.backdrop.matrixWorldNeedsUpdate=!0}}const lo=1800,Gc=700,Wa=120,_p=60,vp=[4.95,5.5,6.05,6.6],xp=18,Kb=36,Jb=6,Kh=1.7,yl=4,co=new oe,Wc=new vt,Zb=[.5,3.4,Rn+.2],yp=[1,1,1],Mp=[-1,1],Qb=.6;function Jh(i,t,e){const n=new Gl(i,t,e,1,!0).toNonIndexed(),s=n.attributes.position,r=n.attributes.normal,o=[],a=[],l=new P,c=new P,h=new P;for(let d=0;d<s.count;d+=3)if(l.fromBufferAttribute(s,d),c.fromBufferAttribute(s,d+1),h.fromBufferAttribute(s,d+2),!(c.sub(l).cross(h.sub(l)).lengthSq()<1e-12))for(let f=0;f<3;f++)o.push(s.getX(d+f),s.getY(d+f),s.getZ(d+f)),a.push(r.getX(d+f),r.getY(d+f),r.getZ(d+f));n.dispose();const u=new Le;return u.setAttribute("position",new re(o,3)),u.setAttribute("normal",new re(a,3)),u}const j0=[[.8,.3,.95,"#B8962E"],[1.4,2.4,1,"#C79C32"],[2,4.4,.9,"#D2A93A"],[2.6,1.3,.85,"#C79C32"],[3.1,3.5,.7,"#B8962E"]];function tS(){const i=new qt;i.add(S.cyl(.035,.05,3.6,5,!0),"#9C8A2A",[0,1.8,0]);for(const[t,e,n,s]of j0)i.add(Jh(.08,n,3),s,[Math.sin(e)*n*.38,t+n*.22,Math.cos(e)*n*.38],[Math.cos(e)*1.05,0,-Math.sin(e)*1.05],[1,1,.3]);return i.add(S.sphere(.075,6,4),"#E8C24A",[.09,2.1,.03],[0,0,-.35],[1,2.9,1]),i.add(Jh(.1,.45,4),"#D8B04A",[0,3.75,0]),i.build()}function eS(){const e=document.createElement("canvas");e.width=128,e.height=512;const n=e.getContext("2d"),s=l=>128/2+l/Kh*128,r=l=>512-l/yl*512,o=128/Kh;n.fillStyle="#9C8A2A",n.beginPath(),n.moveTo(s(-.05),r(0)),n.lineTo(s(.05),r(0)),n.lineTo(s(.035),r(3.6)),n.lineTo(s(-.035),r(3.6)),n.fill();for(const[l,c,h,u]of j0){const d=Math.sin(c)>=0?1:-1,f=h*.82,p=s(0),_=r(l+h*.05),g=s(d*f),m=r(l+h*.42),M=.11*o;n.fillStyle=u,n.beginPath(),n.moveTo(p,_-M),n.quadraticCurveTo(s(d*f*.55),r(l+h*.72),g,m),n.quadraticCurveTo(s(d*f*.5),r(l+h*.42),p,_+M),n.closePath(),n.fill()}n.fillStyle="#E8C24A",n.beginPath(),n.ellipse(s(.09),r(2.1),.075*o,.22/yl*512,.35,0,Math.PI*2),n.fill(),n.fillStyle="#D8B04A",n.beginPath(),n.moveTo(s(-.1),r(3.52)),n.lineTo(s(.1),r(3.52)),n.lineTo(s(0),r(3.98)),n.fill();const a=new ea(e);return a.colorSpace=$e,a.anisotropy=4,a}function nS(){const i=[],t=[],e=[],n=Kh/2;for(const r of[0,Math.PI/2]){const o=Math.cos(r),a=-Math.sin(r);for(const l of[1,-1]){const c=new P(-a*l*.85,.5,o*l*.85).normalize(),h=[[-n,0,0,0],[n,0,1,0],[n,yl,1,1],[-n,yl,0,1]],u=l>0?[0,1,2,0,2,3]:[0,2,1,0,3,2];for(const d of u){const[f,p,_,g]=h[d];i.push(f*o,p,f*a),t.push(c.x,c.y,c.z),e.push(_,g)}}}const s=new Le;return s.setAttribute("position",new re(i,3)),s.setAttribute("normal",new re(t,3)),s.setAttribute("uv",new re(e,2)),s}function iS(){const i=new qt;for(let t=0;t<5;t++){const e=t/5*Math.PI*2;i.add(Jh(.05,.42,3),t%2?"#7E8E2F":"#93A23A",[Math.cos(e)*.06,.18,Math.sin(e)*.06],[Math.sin(e)*.35,0,-Math.cos(e)*.35])}return i.build()}function sS(){const i=new qt;return i.add(ii(.26,.36,8,16),"#FF5E00",[0,0,0]),i.add(S.cyl(.025,.04,.12,5),"#3E7A1E",[0,.38,0],[.3,0,0]),i.build()}function rS(){const i=new qt;return i.add(es("jack",.3,.27),"#FFD21A",[0,.17,0],null,[1,.85,1],1.7),i.build()}function sr(i,t,e,n,s,r){return r<=0?t:(i.instanceMatrix.array.set(e.subarray(s*16,(s+r)*16),t*16),n&&i.instanceColor.array.set(n.subarray(s*3,(s+r)*3),t*3),t+r)}class oS{constructor(t,e,n,s){this.track=e,this.biomes=n,this.scenery=s,this.version=-1,this.seed=1,this.density=1,this.nearCorn=xp,this.cull=1/0,this.far=1/0,this.corn=new Mn(tS(),je({vc:!0,sway:.012}),lo),this.cards=new Mn(nS(),je({map:eS(),alphaTest:.5,sway:.012}),lo),this.tufts=new Mn(iS(),je({vc:!0,sway:.25}),Gc),this.pumps=new Mn(sS(),we.body,Wa),this.faces=new Mn(rS(),we.flicker,Wa),this.walls=new Mn(new Ti(1,1,1),je({color:"#3B2E14"}),_p),this.meshes=[this.corn,this.cards,this.tufts,this.pumps,this.faces,this.walls];for(const r of this.meshes)r.count=0,r.visible=!1,r.instanceMatrix.setUsage(Rs),t.add(r);this.corn.renderOrder=1,this.cards.renderOrder=2,this.walls.renderOrder=3;for(const r of[this.corn,this.cards])r.castShadow=!0,r.receiveShadow=!0,r.setColorAt(0,Wc.set("#ffffff"));this.pumps.castShadow=!0,this.cornM=new Float32Array(lo*16),this.cornC=new Float32Array(lo*3),this.tuftM=new Float32Array(Gc*16),this.pumpM=new Float32Array(Wa*16),this.slotList=[],this._slotPool=[],this.back=NaN,this.near=NaN,this.outer=NaN}reset(t){this.seed=t,this.version=-1}setLod(t,e){this.nearCorn=xp*t,this.cull=e,this.near=NaN}setDensity(t){this.density=t,this.version=-1}update(t){const e=this.scenery,n=this.biomes;let s=!1;e.version!==this.version&&(this.version=e.version,this._place(),s=!0);const r=n.slotOf(t-Jb),o=n.slotOf(t+this.nearCorn),a=Number.isFinite(this.cull)?n.slotOf(t+this.cull):1/0,l=n.slotOf(t+Kb);(s||r!==this.back||o!==this.near||a!==this.far||l!==this.outer)&&(this.back=r,this.near=o,this.far=a,this.outer=l,this._assemble())}_place(){const t=this.scenery,e=this.biomes,n=this.track,s=this.slotList;for(const f of s)this._slotPool.push(f);s.length=0;let r=0,o=0,a=0,l=0;const c=this.seed,h=this.cornM,u=this.cornC,d=(f,p,_)=>{const g=mn(Math.floor(f*10)*7+p*3+(_>0?1:0),c),m=_*(vp[p]+(g-.5)*.25);yp[1]=.95+g*.2,n.matrix(f,m,0,g*6.28,yp,co).toArray(h,r*16),Wc.set("#ffffff").multiplyScalar(.85+g*.25),Wc.toArray(u,r*3),r++};for(let f=t.first;f<=t.last;f++){const p=e.slotStart(f),_=p+Rn/2,g=e.id(_);if(e.isBridge(_))continue;const m=this._slotPool.pop()||{};if(m.k=f,m.c0=r,m.cIn=0,m.cOut=0,m.open=!1,m.t0=o,m.tn=0,m.p0=a,m.pn=0,s.push(m),g==="corn"){const x=t.isAlcove(f),v=x?t.alcoveSide(f):9;for(let I=0;I<2;I++){for(const T of Mp){const R=x&&(v===0||v===T);I===0&&l<_p&&(n.matrix(_,T*7.3,1.7,0,Zb,co),this.walls.setMatrixAt(l++,co));for(let F=0;F<vp.length;F++)if(!(R&&F<3||(R||F<2)!==(I===0)))for(let y=0;y<11&&r<lo;y++)d(p+y*.55+F%2*.27,F,T)}I===0&&(m.cIn=r-m.c0)}m.cOut=r-m.c0-m.cIn,m.open=x||t.isAlcove(f-1)||t.isAlcove(f+1)}const M=Math.round((g==="corn"?4:7)*this.density);for(const x of Mp){for(let I=0;I<M&&o<Gc;I++){const T=mn(f*31+I*2+(x>0?1:0),c+5),R=mn(f*37+I*3+(x>0?1:0),c+6),F=p+T*Rn,w=x*(3+R*(g==="corn"?1.2:3.4));n.matrix(F,w,0,T*6.28,.8+R*.7,co).toArray(this.tuftM,o++*16)}const v=mn(f*41+(x>0?1:0),c+7);if(v<.38&&a<Wa){const I=p+v*14,T=x*(3.2+v*2.4),R=x>0?-Math.PI/2+.6:Math.PI/2-.6;n.matrix(I,T,0,R,.85+v,co).toArray(this.pumpM,a++*16)}}m.tn=o-m.t0,m.pn=a-m.p0}this.walls.count=l}_assemble(){let t=0,e=0,n=0,s=0;const{corn:r,cards:o,cornM:a,cornC:l}=this;for(const c of this.slotList)if(!(c.k<this.back||c.k>this.far)){if(c.k<=this.near)t=sr(r,t,a,l,c.c0,c.cIn),e=sr(o,e,a,l,c.c0+c.cIn,c.cOut);else{const h=c.k<=this.outer||c.open?c.cOut:0;e=sr(o,e,a,l,c.c0,c.cIn+h)}n=sr(this.tufts,n,this.tuftM,null,c.t0,c.tn),sr(this.faces,s,this.pumpM,null,c.p0,c.pn),s=sr(this.pumps,s,this.pumpM,null,c.p0,c.pn)}r.count=t,o.count=e,this.tufts.count=n,this.pumps.count=s,this.faces.count=s;for(const c of this.meshes)c.visible=c.count>0,c.visible&&(c.instanceMatrix.clearUpdateRanges(),c.instanceMatrix.addUpdateRange(0,c.count*16),c.instanceMatrix.needsUpdate=!0,c.computeBoundingSphere(),c.boundingSphere.radius+=Qb);for(const c of[r,o])c.count>0&&(c.instanceColor.clearUpdateRanges(),c.instanceColor.addUpdateRange(0,c.count*3),c.instanceColor.needsUpdate=!0)}}const le=Math.PI,Ml=1.24,bl=.27;function ho(i,t,e,n={}){const s=n.wide?.14:.11;for(const r of[-.11,.11])i.add(S.capsule(s,.55,3,8),t,[r,.5,0]),i.add(S.rbox(.2,.12,.3,.05),e,[r,.06,.05])}function uo(i,t,e={}){i.add(Jn([[0,.78],[.25,.8],[.27,.95],[.29,1.15],[.24,1.3],[0,1.33]],14),t,[0,0,0],null,[1,1,.78]),e.belt&&i.add(S.cyl(.27,.27,.07,14),e.belt,[0,.86,0],null,[1,1,.8])}function Xc(i,t,e=1.55,n=.24){i.add(S.sphere(n,18,14),t,[0,e,0],null,[1,1.05,1]),i.add(S.cyl(.07,.08,.12,8),t,[0,e-n-.02,0])}function Xa(i,t,e,n,s={}){const r=s.white??"#FFFFFF",o=s.pupil??"#1A0B2E";for(const a of[-.085,.085])s.glow?t.add(S.sphere(.045,8,6),s.glow,[a,e,n],null,[1,1.2,.5],2.2):(i.add(S.sphere(.055,10,8),r,[a,e,n],null,[1,1.2,.5]),i.add(S.sphere(.03,8,6),o,[a,e-.005,n+.02],null,[1,1.2,.5]))}function bp(i,t,e,n="#3A1020"){i.add(S.torus(.065,.016,4,10,le),n,[0,t,e],[0,0,le])}function nn(i,t,e={}){const n=new qt,s=e.r??.075;if(n.add(S.capsule(s,.42,3,8),i,[0,-.28,0]),e.cuff&&n.add(S.cyl(s*1.25,s*1.25,.08,8),e.cuff,[0,-.5,0]),n.add(S.sphere(.07,10,8),t,[0,-.6,0]),e.claws)for(const r of[-.04,0,.04])n.add(S.cone(.015,.07,4),"#F2EAD8",[r,-.68,.02],[le,0,0]);return e.extra&&e.extra(n),n}const Sp={pumpkinKid(){const i=new qt,t=new qt;return ho(i,"#2E2A4A","#1A1420"),uo(i,"#6A2C91",{belt:"#1A1420"}),i.add(S.cyl(.08,.09,.12,8),"#F1C9A5",[0,1.36,0]),i.add(ii(.34,.5,8,20),"#FF5E00",[0,1.38,0]),i.add(S.cyl(.035,.05,.14,6),"#3E7A1E",[0,1.92,0],[.2,0,.15]),t.add(es("happy",.42,.36),"#FFD21A",[0,1.62,0],null,[1,1,1],1.8),{b:i,gl:t,armL:nn("#6A2C91","#F1C9A5"),armR:nn("#6A2C91","#F1C9A5")}},ghostKid(){const i=new qt,t=new qt;i.add(S.rbox(.18,.12,.28,.05),"#1A1420",[-.1,.06,.05]),i.add(S.rbox(.18,.12,.28,.05),"#1A1420",[.1,.06,.05]),i.add(Jn([[0,1.82],[.2,1.78],[.28,1.62],[.3,1.4],[.34,1],[.4,.5],[.46,.15],[.43,.12],[0,.14]],20),"#F4F0FF",[0,0,0]),i.add(S.sphere(.07,10,8),"#1A0B2E",[-.1,1.62,.25],null,[1,1.5,.5]),i.add(S.sphere(.07,10,8),"#1A0B2E",[.1,1.62,.25],null,[1,1.5,.5]),i.add(S.sphere(.05,8,6),"#1A0B2E",[0,1.46,.27],null,[1.2,.8,.5]);const e=n=>{n.add(ii(.17,.22,8,14),"#FF5E00",[0,-.88,.05]),n.add(S.torus(.13,.012,4,12,le),"#1A1420",[0,-.68,.05]),n.add(es("jack",.2,.17),"#3A1020",[0,-.77,.05]);for(let s=0;s<4;s++)n.add(S.sphere(.04,6,4),["#FF3A7A","#59FF00","#FFE600","#3AB8FF"][s],[(s-1.5)*.06,-.66,.05+s%2*.04])};return{b:i,gl:t,armL:nn("#F4F0FF","#F4F0FF",{r:.09}),armR:nn("#F4F0FF","#F4F0FF",{r:.09,extra:e})}},witch(){const i=new qt,t=new qt;i.add(S.rbox(.18,.12,.3,.05),"#1A1420",[-.1,.06,.06]),i.add(S.rbox(.18,.12,.3,.05),"#1A1420",[.1,.06,.06]),i.add(Jn([[0,.12],[.45,.12],[.4,.4],[.3,.85],[.27,1.15],[.22,1.3],[0,1.33]],18),"#2A1638",[0,0,0]),i.add(S.cyl(.29,.29,.06,14),"#8E2CC2",[0,.9,0]),i.add(S.rbox(.1,.08,.04,.02),"#FFE600",[0,.9,.29]),Xc(i,"#7BC96A"),i.add(S.cone(.05,.16,6),"#6AB85A",[0,1.54,.26],[le/2-.2,0,0]),Xa(i,t,1.6,.21),bp(i,1.46,.225);for(let e=0;e<7;e++){const n=le*.25+e/6*le*1.5;i.add(S.capsule(.05,.3,3,5),"#FF7A1A",[Math.cos(n+le/2)*.22,1.42,-Math.sin(n+le/2)*.22-.03],[.1,0,0])}return i.add(S.cyl(.5,.5,.04,20),"#1E1028",[0,1.74,0]),i.add(Jn([[.25,0],[.22,.25],[.15,.5],[.05,.72],[0,.78]],14),"#1E1028",[0,1.74,0],[-.18,0,.12]),i.add(S.cyl(.255,.255,.08,14),"#8E2CC2",[0,1.8,0]),{b:i,gl:t,armL:nn("#2A1638","#7BC96A",{cuff:"#8E2CC2"}),armR:nn("#2A1638","#7BC96A",{cuff:"#8E2CC2"})}},vampire(){const i=new qt,t=new qt;return ho(i,"#141218","#0A0A0E"),uo(i,"#F2F0F5"),i.add(S.rbox(.36,.38,.1,.04),"#9A1428",[0,1.02,.17]),i.add(S.cone(.08,.12,3),"#141218",[0,1.26,.2],[le,0,0],[1.4,1,.4]),i.add(new Ki(.32,.62,1.2,16,1,!0,le*.62,le*1.76),"#141218",[0,.72,-.02]),i.add(new Ki(.31,.6,1.18,16,1,!0,le*.62,le*1.76),"#B0102A",[0,.72,-.02]),i.add(new Ki(.4,.26,.42,14,1,!0,le*.7,le*1.6),"#141218",[0,1.48,-.04]),Xc(i,"#E6E1F0"),i.add(new qr(.25,16,10,0,le*2,0,le/2),"#141218",[0,1.6,-.02],null,[1.02,.7,1.05]),i.add(S.cone(.06,.14,4),"#141218",[0,1.74,.17],[le,0,0],[1,1,.5]),Xa(i,t,1.58,.21,{glow:"#FF2A3A"}),i.add(S.cone(.015,.05,4),"#FFFFFF",[-.03,1.45,.225],[le,0,0]),i.add(S.cone(.015,.05,4),"#FFFFFF",[.03,1.45,.225],[le,0,0]),bp(i,1.48,.225,"#5A0A18"),{b:i,gl:t,armL:nn("#141218","#E6E1F0",{cuff:"#F2F0F5"}),armR:nn("#141218","#E6E1F0",{cuff:"#F2F0F5"})}},skeleton(){const i=new qt,t=new qt,e="#EDE6D2";for(const s of[-.11,.11])i.add(S.capsule(.045,.32,3,6),e,[s,.62,0]),i.add(S.capsule(.04,.32,3,6),e,[s,.25,0]),i.add(S.sphere(.06,8,6),e,[s,.44,0]),i.add(S.rbox(.14,.07,.24,.03),e,[s,.04,.05]);i.add(S.rbox(.36,.14,.18,.06),e,[0,.84,0]),i.add(S.cyl(.035,.035,.44,6),e,[0,1.05,-.06]);for(let s=0;s<4;s++)i.add(S.torus(.2-s*.015,.025,4,14),e,[0,1+s*.075,0],[le/2,0,0],[1,.8,1]);i.add(S.cyl(.3,.3,.05,10),e,[0,1.27,-.02],null,[1,1,.5]),i.add(S.sphere(.25,18,14),e,[0,1.58,0],null,[1,1,1]),i.add(S.rbox(.28,.14,.22,.06),e,[0,1.38,.05]);for(const s of[-.09,.09])i.add(S.sphere(.075,10,8),"#1A0B1E",[s,1.58,.19],null,[1,1.1,.6]),t.add(S.sphere(.025,6,4),"#9CFF5A",[s,1.58,.24],null,null,2.4);i.add(S.cone(.035,.07,3),"#1A0B1E",[0,1.48,.235],[le,0,0]);for(let s=-2;s<=2;s++)i.add(S.box(.035,.05,.02),"#1A0B1E",[s*.045,1.38,.165]);const n=()=>{const s=new qt;return s.add(S.capsule(.035,.24,3,6),e,[0,-.16,0]),s.add(S.sphere(.045,6,4),e,[0,-.32,0]),s.add(S.capsule(.03,.22,3,6),e,[0,-.46,0]),s.add(S.sphere(.06,8,6),e,[0,-.62,0],null,[1,1.2,.6]),s};return{b:i,gl:t,armL:n(),armR:n()}},werewolf(){const i=new qt,t=new qt,e="#6B4A35";ho(i,"#3A3F6A","#2A1A12"),uo(i,"#C23A3A");for(let n=0;n<3;n++)i.add(S.cyl(.285,.285,.05,14),"#F2E6C8",[0,.95+n*.12,0],null,[1,1,.8]);i.add(S.sphere(.25,16,12),e,[0,1.56,0]),i.add(S.rbox(.2,.15,.24,.07),"#8A6A50",[0,1.48,.2]),i.add(S.sphere(.045,8,6),"#141218",[0,1.53,.33]),i.add(S.cone(.09,.2,4),e,[-.15,1.8,0],[0,0,.3]),i.add(S.cone(.09,.2,4),e,[.15,1.8,0],[0,0,-.3]),i.add(S.cone(.05,.1,4),"#E8A0A8",[-.15,1.79,.03],[0,0,.3]),i.add(S.cone(.05,.1,4),"#E8A0A8",[.15,1.79,.03],[0,0,-.3]);for(const n of[-.18,.18])i.add(S.cone(.07,.16,4),e,[n*1.2,1.48,.05],[0,0,n>0?-1.9:1.9]);return Xa(i,t,1.63,.2,{glow:"#FFE600"}),i.add(S.cone(.02,.05,4),"#FFFFFF",[-.04,1.4,.3],[le,0,0]),i.add(S.cone(.02,.05,4),"#FFFFFF",[.04,1.4,.3],[le,0,0]),i.add(Pe([[0,.85,-.18],[0,.7,-.4],[.1,.8,-.6]],.08,.03,8,6),e),{b:i,gl:t,armL:nn(e,e,{claws:!0}),armR:nn(e,e,{claws:!0})}},zombie(){const i=new qt,t=new qt,e="#8DBA6A";ho(i,"#5A3E2A","#2A1A12"),i.add(S.capsule(.11,.25,3,8),e,[.11,.28,0]),uo(i,"#3A6AB0",{belt:"#2A1A12"}),i.add(S.cone(.12,.2,3),"#3A6AB0",[-.18,.75,.15],[le,0,0]),i.add(S.cone(.1,.18,3),"#3A6AB0",[.12,.74,.17],[le,0,0]),Xc(i,e),i.add(S.sphere(.07,8,6),"#6E9A50",[.15,1.7,.12]),Xa(i,t,1.6,.21,{white:"#FFFDE0",pupil:"#C02020"}),i.add(S.rbox(.16,.05,.04,.02),"#3A1020",[0,1.45,.215]),i.add(S.box(.03,.05,.02),"#FFFFFF",[-.04,1.47,.235]),i.add(S.box(.03,.05,.02),"#FFFFFF",[.03,1.47,.235]);for(let n=0;n<5;n++)i.add(S.cone(.04,.12,4),"#3E2A1A",[-.16+n*.08,1.8,-.02],[.2*(n-2),0,.3*(n-2)]);return{b:i,gl:t,armL:nn("#3A6AB0",e,{cuff:e}),armR:nn("#3A6AB0",e,{cuff:e}),armsForward:!0}},ghost(){const i=new qt,t=new qt;i.add(Jn([[0,1.95],[.3,1.88],[.45,1.65],[.48,1.3],[.55,.9],[.62,.6],[.66,.45],[0,.5]],22),"#F4F0FF",[0,0,0]);for(let e=0;e<8;e++){const n=e/8*le*2;i.add(S.cone(.14,.3,6),"#F4F0FF",[Math.cos(n)*.55,.36,Math.sin(n)*.55],[le,0,0])}return i.add(S.sphere(.09,10,8),"#1A0B2E",[-.15,1.55,.42],null,[1,1.5,.5]),i.add(S.sphere(.09,10,8),"#1A0B2E",[.15,1.55,.42],null,[1,1.5,.5]),i.add(S.sphere(.11,10,8),"#1A0B2E",[0,1.3,.46],null,[1.1,1.3,.5]),t.add(S.sphere(.03,6,4),"#FFFFFF",[-.13,1.59,.47],null,null,1.4),t.add(S.sphere(.03,6,4),"#FFFFFF",[.17,1.59,.47],null,null,1.4),{b:i,gl:t,armL:nn("#F4F0FF","#F4F0FF",{r:.09}),armR:nn("#F4F0FF","#F4F0FF",{r:.09}),armsForward:!0,float:!0}},scarecrow(){const i=new qt,t=new qt;ho(i,"#4A5A8A","#3E2414",{wide:!0});for(const n of[-.11,.11])for(let s=0;s<3;s++)i.add(S.cone(.03,.14,3),"#D9B24A",[n+(s-1)*.04,.14,.05],[le,0,0]);uo(i,"#B8322B",{belt:"#5A3620"});for(let n=0;n<3;n++)i.add(S.cyl(.29,.29,.025,14),"#1A1420",[0,.95+n*.12,0],null,[1,1,.8]);for(const n of[-.12,.12])i.add(S.box(.025,.5,.02),"#1A1420",[n,1.05,.23]);i.add(S.sphere(.26,14,12),"#C9A46A",[0,1.57,0],null,[1,1.05,.95]),i.add(S.cyl(.11,.14,.12,8),"#A88450",[0,1.33,0]),i.add(S.cone(.1,.18,3),"#1A1420",[-.09,1.62,.22],[-le/2,0,0],[1,1,.3]),i.add(S.cone(.1,.18,3),"#1A1420",[.09,1.62,.22],[-le/2,0,0],[1,1,.3]),i.add(S.torus(.11,.015,4,12,le),"#1A1420",[0,1.5,.22],[0,0,le]);for(let n=-2;n<=2;n++)i.add(S.box(.012,.06,.012),"#1A1420",[n*.045,1.43+Math.abs(n)*.012,.235]);i.add(S.cyl(.5,.55,.04,16),"#D9B24A",[0,1.76,0],[.1,0,0]),i.add(S.cyl(.2,.26,.26,14),"#D9B24A",[0,1.88,-.02],[.1,0,0]),i.add(S.cyl(.265,.265,.06,14),"#B8322B",[0,1.8,-.01],[.1,0,0]),t.add(S.sphere(.03,6,4),"#FF8A1A",[-.09,1.62,.25],null,null,2.2),t.add(S.sphere(.03,6,4),"#FF8A1A",[.09,1.62,.25],null,null,2.2);const e=n=>{for(let s=0;s<4;s++)n.add(S.cone(.025,.14,3),"#D9B24A",[(s-1.5)*.03,-.6,0],[le,0,(s-1.5)*.3])};return{b:i,gl:t,armL:nn("#B8322B","#D9B24A",{extra:e}),armR:nn("#B8322B","#D9B24A",{extra:e}),armsForward:!1,tpose:!0}},mummy(){const i=new qt,t=new qt,e="#E9DFC4",n="#D2C5A2";for(const r of[-.11,.11])for(let o=0;o<6;o++)i.add(S.cyl(.12-o*.004,.125-o*.004,.14,10),o%2?e:n,[r,.08+o*.13,0],[.1*(o%3-1),0,.08*(o%2*2-1)]);for(let r=0;r<5;r++)i.add(S.cyl(.27-(r===4?.04:0),.28,.13,14),r%2?e:n,[0,.86+r*.1,0],[.06*(r%3-1),0,.05*(r%2*2-1)],[1,1,.8]);i.add(S.sphere(.24,16,12),e,[0,1.56,0]);for(let r=0;r<4;r++)i.add(S.torus(.235,.03,4,18),r%2?n:e,[0,1.42+r*.1,0],[le/2+.15*(r%2?1:-1),0,0]);i.add(S.box(.3,.07,.1),"#2A1A2A",[.02,1.6,.19]),t.add(S.sphere(.035,6,4),"#FFE600",[-.07,1.6,.23],null,null,2.6),t.add(S.sphere(.035,6,4),"#FFE600",[.09,1.6,.23],null,null,2.6),i.add(Pe([[.2,1,.12],[.35,.8,.2],[.3,.55,.3]],.03,.02,8,4),e);const s=()=>{const r=new qt;for(let o=0;o<4;o++)r.add(S.cyl(.08,.085,.15,8),o%2?e:n,[0,-.08-o*.14,0],[.12*(o%2?1:-1),0,0]);return r.add(S.sphere(.075,8,6),e,[0,-.62,0]),r};return{b:i,gl:t,armL:s(),armR:s(),armsForward:!0}}},qc=new Map,wp=new Map;function nl(i,t=1){const e=t===1?i:i+"@"+t;if(qc.has(e))return qc.get(e);const n=V0(t,()=>(Sp[i]||Sp.pumpkinKid)()),s={body:n.b.build(),glow:n.gl.build(),armL:n.armL.build(),armR:n.armR.build(),armsForward:!!n.armsForward,float:!!n.float,tpose:!!n.tpose},r=wp.get(i)||[];for(const o of["body","glow","armL","armR"])s[o]=H0(s[o],r.map(a=>a[o]));return r.push(s),wp.set(i,r),qc.set(e,s),s}function Gu(i,{nofog:t=!1,shadows:e=!0}={}){const n=nl(i),s=t?we.bodyNoFog:we.body,r=new Ve,o=new Ve;r.add(o);const a=new me(n.body,s);a.castShadow=e,o.add(a),n.glow&&o.add(new me(n.glow,t?we.glowNoFog:we.glow));const l=new Ve,c=new Ve;l.position.set(-bl,Ml,0),c.position.set(bl,Ml,0);const h=new me(n.armL,s),u=new me(n.armR,s);h.castShadow=u.castShadow=e,l.add(h),c.add(u),o.add(l,c);const d={root:r,inner:o,armL:l,armR:c,kind:i,armsForward:n.armsForward,float:n.float,tpose:n.tpose};return K0(d),d}function K0(i){i.armL.rotation.set(0,0,-.12),i.armR.rotation.set(0,0,.12),i.armsForward&&(i.armL.rotation.set(-1.45,0,-.08),i.armR.rotation.set(-1.55,0,.08)),i.tpose&&(i.armL.rotation.set(0,0,-1.45),i.armR.rotation.set(0,0,1.45))}const aS=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,lS=`
uniform float uTime;
uniform vec3 uFog;
uniform vec3 uC1; // #7C1FA6 low violet
uniform vec3 uC2; // #4B0E78
uniform vec3 uC3; // #1E0538 top
uniform vec3 uMagenta;
uniform vec3 uMoonDir;
uniform float uFogMix;
uniform sampler2D uNoise; // 5-octave fbm baked once, tiling every NOISE_PERIOD
varying vec3 vDir;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
// 0.125 = 1 / NOISE_PERIOD
float fbm(vec2 p) { return texture2D(uNoise, p * 0.125).r; }

void main() {
  vec3 d = normalize(vDir);
  float el = d.y;
  float h = clamp(el / 0.55, 0.0, 1.0);
  vec3 col = mix(uC1, uC2, smoothstep(0.08, 0.45, h));
  col = mix(col, uC3, smoothstep(0.45, 1.0, h));
  // swirl clouds (only inside the band they can show up in)
  float az = atan(d.z, d.x);
  float band = smoothstep(0.0, 0.18, el) * (1.0 - smoothstep(0.35, 0.8, el));
  if (band > 0.0) {
    vec2 uv = vec2(az * 2.2, el * 5.5);
    float t = uTime * 0.03;
    vec2 q = vec2(fbm(uv + vec2(t, 0.0)), fbm(uv + vec2(5.2, 1.3 - t)));
    float c = fbm(uv + 2.4 * q + vec2(t * 0.6, 0.0));
    col = mix(col, uMagenta, smoothstep(0.48, 0.85, c) * 0.62 * band);
    col += vec3(0.12, 0.03, 0.16) * smoothstep(0.55, 0.9, q.x) * band;
  }
  // stars
  vec2 sp = vec2(az * 60.0, el * 60.0);
  float st = hash(floor(sp));
  float tw = 0.6 + 0.4 * sin(uTime * 2.0 + st * 40.0);
  float star = step(0.985, st) * smoothstep(0.25, 0.6, el) * (1.0 - smoothstep(0.3, 0.5, length(fract(sp) - 0.5))) * tw;
  col += vec3(1.0, 0.95, 1.0) * star * 0.9;
  // moon + halo
  float md = dot(d, normalize(uMoonDir));
  col += vec3(0.55, 0.35, 0.6) * pow(max(md, 0.0), 40.0) * 0.6;
  if (md > 0.9988) {
    float disc = smoothstep(0.9988, 0.9992, md);
    float crater = fbm(d.xy * 90.0) * 0.18;
    col = mix(col, vec3(1.0, 0.96, 0.82) * (1.15 - crater), disc);
  }
  // fog at the horizon (and thicker inside fog bridges)
  float fogBand = 1.0 - smoothstep(-0.02, 0.12 + uFogMix * 0.35, el);
  col = mix(col, uFog, clamp(fogBand + uFogMix * 0.25, 0.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`,cS=1024,hS=8;function uS(){const i=cS,t=new Uint8Array(i*i),e=new Float32Array(i*i),n=(o,a,l)=>{let c=Math.imul(o,374761393)^Math.imul(a,668265263)^Math.imul(l+1,1442695041);return c=Math.imul(c^c>>>13,1274126177),((c^c>>>16)>>>0)/4294967296};let s=.5;for(let o=0;o<5;o++){const a=hS<<o,l=new Float32Array(a*a);for(let h=0;h<a;h++)for(let u=0;u<a;u++)l[h*a+u]=n(u,h,o);const c=a/i;for(let h=0;h<i;h++){const u=h*c,d=Math.floor(u);let f=u-d;f=f*f*(3-2*f);const p=d*a,_=(d+1)%a*a;for(let g=0;g<i;g++){const m=g*c,M=Math.floor(m);let x=m-M;x=x*x*(3-2*x);const v=(M+1)%a,I=l[p+M]+(l[p+v]-l[p+M])*x,T=l[_+M]+(l[_+v]-l[_+M])*x;e[h*i+g]+=s*(I+(T-I)*f)}}s*=.5}for(let o=0;o<i*i;o++)t[o]=Math.round(Math.min(1,e[o])*255);const r=new Iu(t,i,i,kl,ni);return r.wrapS=r.wrapT=Vo,r.magFilter=pn,r.minFilter=pn,r.generateMipmaps=!1,r.needsUpdate=!0,r}function dS(){const i=new qt;i.add(Jn([[0,1],[.28,.92],[.42,.7],[.48,.35],[.55,.05],[.62,-.1],[0,-.05]],18),"#F4F0FF",[0,0,0]);for(let t=0;t<6;t++){const e=t/6*Math.PI*2;i.add(S.cone(.13,.28,6),"#F4F0FF",[Math.cos(e)*.48,-.2,Math.sin(e)*.48],[Math.PI,0,0])}return i.add(S.sphere(.07,8,6),"#1A0B2E",[-.14,.62,.38],null,[1,1.4,.6]),i.add(S.sphere(.07,8,6),"#1A0B2E",[.14,.62,.38],null,[1,1.4,.6]),i.add(S.sphere(.08,8,6),"#1A0B2E",[0,.42,.42],null,[1,1.3,.5]),i.add(S.capsule(.07,.4,3,6),"#F4F0FF",[-.45,.4,.15],[0,0,1]),i.add(S.capsule(.07,.4,3,6),"#F4F0FF",[.45,.4,.15],[0,0,-1]),i.build()}function fS(){const i=new qt;return i.add(S.sphere(.16,8,6),"#140A1C",[0,0,0],null,[1,.9,1.3]),i.add(S.sphere(.11,8,6),"#140A1C",[0,.06,.18]),i.add(S.cone(.04,.12,4),"#140A1C",[-.06,.18,.18]),i.add(S.cone(.04,.12,4),"#140A1C",[.06,.18,.18]),i.build()}function Ep(i){const t=new Ji;t.moveTo(0,0),t.lineTo(.3,.12),t.lineTo(.62,.05),t.lineTo(.55,-.1),t.lineTo(.42,-.04),t.lineTo(.32,-.14),t.lineTo(.2,-.06),t.lineTo(.08,-.14),t.closePath();const e=new Yl(t);e.rotateX(-Math.PI/2),i<0&&e.scale(-1,1,1);const n=new qt;return n.add(e,"#1E0E2A",[0,0,0]),n.build()}function pS(){const i=new qt;return i.add(ii(.5,.72,8,18),"#FF5E00",[0,-.36,0]),i.add(S.cyl(.05,.08,.22,6),"#3E7A1E",[0,.42,0]),i.build()}class mS{constructor(t){this.group=new Ve,t.add(this.group),this.uniforms={uTime:{value:0},uFog:{value:new vt("#C8C6D4")},uC1:{value:new vt("#7C1FA6")},uC2:{value:new vt("#4B0E78")},uC3:{value:new vt("#1E0538")},uMagenta:{value:new vt("#C23AB8")},uMoonDir:{value:new P(-.45,.42,-1)},uFogMix:{value:0},uNoise:{value:uS()}};const e=new me(new qr(320,48,24),new rn({vertexShader:aS,fragmentShader:lS,uniforms:this.uniforms,side:on,depthWrite:!1,fog:!1}));e.frustumCulled=!1,e.renderOrder=10,this.dome=e,this.group.add(e);const n=new jl(4242),s=je({vc:!0,nofog:!0}),r=dS();this.ghosts=[];const o=je({vc:!0,nofog:!0,transparent:!0,opacity:.88,emissive:"#3A2A5A"});for(let f=0;f<5;f++){const p=new me(r,o);p.userData={a:n.range(-.9,.9),r:n.range(55,85),y:n.range(14,30),sp:n.range(.03,.07)*n.sign(),ph:n.range(0,6.28),sc:n.range(2.2,3.4)},this.ghosts.push(p),this.group.add(p)}const a=22;this.batBody=new Mn(fS(),s,a),this.batWingL=new Mn(Ep(-1),je({vc:!0,nofog:!0,double:!0}),a),this.batWingR=new Mn(Ep(1),je({vc:!0,nofog:!0,double:!0}),a),this.bats=[];for(let f=0;f<a;f++)this.bats.push({a:n.range(-1.2,1.2),r:n.range(25,70),y:n.range(7,22),sp:n.range(.08,.16)*n.sign(),ph:n.range(0,6.28),sc:n.range(1.2,2.2),wob:n.range(.5,1.5)});for(const f of[this.batBody,this.batWingL,this.batWingR])f.frustumCulled=!1,f.instanceMatrix.setUsage(Rs),this.group.add(f);const l=pS(),c=new qt().add(es("jack",.55,.5),"#FFD21A",[0,0,0],null,null,1.8).build();this.pumpkins=[];for(let f=0;f<4;f++){const p=new Ve;p.add(new me(l,s)),p.add(new me(c,el(16777215,1,{vc:!0,nofog:!0}))),p.userData={a:n.range(-1,1),r:n.range(40,70),y:n.range(12,24),sp:n.range(.04,.08)*n.sign(),ph:n.range(0,6.28),sc:n.range(1.6,2.6)},this.pumpkins.push(p),this.group.add(p)}this.witch=new Ve;const h=Gu("witch",{nofog:!0});h.root.rotation.x=-.25,h.root.position.y=-.3,h.armL&&(h.armL.rotation.x=-1.2),h.armR&&(h.armR.rotation.x=-1.2),this.witch.add(h.root);const u=new qt;u.add(S.cyl(.05,.05,2.6,6),"#6B4423",[0,0,0],[Math.PI/2,0,0]),u.add(S.cone(.32,.9,10),"#D9B24A",[0,0,-1.6],[-Math.PI/2,0,0]),u.add(S.cyl(.08,.08,.1,8),"#8E2C2C",[0,0,-1.15],[Math.PI/2,0,0]);const d=new me(u.build(),s);d.position.y=.55,this.witch.add(d),this.witch.scale.setScalar(2.4),this.witchTrail=[],this.group.add(this.witch),this.witchPeriod=18,this._fwd=new P,this._m=new oe,this._q=new ns,this._e=new Dn,this._p=new P,this._s=new P}_place(t,e,n){const s=this._fx,r=this._fz,o=e.a+Math.sin(n*e.sp*2+e.ph)*.35+n*e.sp*.25,a=Math.cos(o),l=Math.sin(o),c=s*a-r*l,h=s*l+r*a;return t.x=c*e.r,t.z=h*e.r,t.y=e.y+Math.sin(n*.9+e.ph)*1.2,Math.atan2(-c,-h)}update(t,e,n,s,r){const o=this.uniforms;o.uTime.value=t,o.uFogMix.value=s,r&&o.uFog.value.copy(r),this.group.position.copy(e.position);const a=Math.sin(n),l=-Math.cos(n);this._fx=a,this._fz=l;const c=this._p;for(const f of this.ghosts){const p=f.userData,_=this._place(c,p,t);f.position.copy(c),f.rotation.set(0,_+Math.sin(t+p.ph)*.3,Math.sin(t*1.3+p.ph)*.12),f.scale.setScalar(p.sc)}for(let f=0;f<this.bats.length;f++){const p=this.bats[f],_=this._place(c,p,t*1.6);c.y+=Math.sin(t*3*p.wob+p.ph)*.8,this._e.set(0,_+Math.PI/2*Math.sign(p.sp),0),this._q.setFromEuler(this._e),this._s.setScalar(p.sc),this._m.compose(c,this._q,this._s),this.batBody.setMatrixAt(f,this._m);const g=Math.sin(t*14+p.ph)*.9;this._e.set(0,_+Math.PI/2*Math.sign(p.sp),g),this._q.setFromEuler(this._e),this._m.compose(c,this._q,this._s),this.batWingR.setMatrixAt(f,this._m),this._e.set(0,_+Math.PI/2*Math.sign(p.sp),-g),this._q.setFromEuler(this._e),this._m.compose(c,this._q,this._s),this.batWingL.setMatrixAt(f,this._m)}this.batBody.instanceMatrix.needsUpdate=!0,this.batWingL.instanceMatrix.needsUpdate=!0,this.batWingR.instanceMatrix.needsUpdate=!0;for(const f of this.pumpkins){const p=f.userData,_=this._place(c,p,t);f.position.copy(c),f.rotation.set(Math.sin(t*.8+p.ph)*.3,_+t*.4,Math.sin(t*.6+p.ph)*.25),f.scale.setScalar(p.sc)}const h=this.witchPeriod,u=Math.floor((t+6)/h),d=(t+6)%h/7;if(d<=1){this.witch.visible=!0;const f=u%2===0?1:-1,p=Math.cos(n),_=Math.sin(n),g=(d*2-1)*70*f,m=60+Math.sin(d*Math.PI)*10;this.witch.position.set(a*m+p*g,22+Math.sin(d*Math.PI)*6+Math.sin(t*4)*.4,l*m+_*g);const M=-n+(f>0?Math.PI/2:-Math.PI/2);this.witch.rotation.set(0,M,Math.sin(t*2)*.1)}else this.witch.visible=!1}}const gS=`
attribute float aSize;
attribute vec4 aColor;
uniform float uScale;
varying vec4 vColor;
#include <fog_pars_vertex>
void main() {
  vColor = aColor;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / max(0.1, -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,_S=`
varying vec4 vColor;
uniform float uSoft;
#include <fog_pars_fragment>
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  float a = 1.0 - smoothstep(uSoft, 1.0, d);
  if (a <= 0.001) discard;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  #include <fog_fragment>
}`;class Tp{constructor(t,e,n){this.max=e,this.n=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.age=new Float32Array(e),this.size0=new Float32Array(e),this.size1=new Float32Array(e),this.col=new Float32Array(e*3),this.alpha=new Float32Array(e),this.drag=new Float32Array(e),this.grav=new Float32Array(e);const s=new Le;this.posAttr=new Be(new Float32Array(e*3),3).setUsage(Rs),this.sizeAttr=new Be(new Float32Array(e),1).setUsage(Rs),this.colAttr=new Be(new Float32Array(e*4),4).setUsage(Rs),s.setAttribute("position",this.posAttr),s.setAttribute("aSize",this.sizeAttr),s.setAttribute("aColor",this.colAttr),s.setDrawRange(0,0),this.uniforms=Go.merge([ut.fog,{uScale:{value:500},uSoft:{value:n?0:.25}}]);const r=new rn({vertexShader:gS,fragmentShader:_S,uniforms:this.uniforms,transparent:!0,depthWrite:!1,fog:!n,blending:n?zo:ji});this.points=new Xy(s,r),this.points.frustumCulled=!1,this.points.renderOrder=n?6:5,t.add(this.points)}emit(t,e,n,s,r,o,a,l,c,h,u=1,d=0,f=0){if(this.n>=this.max)return;const p=this.n++;this.p[p*3]=t,this.p[p*3+1]=e,this.p[p*3+2]=n,this.v[p*3]=s,this.v[p*3+1]=r,this.v[p*3+2]=o,this.life[p]=a||1,this.age[p]=0,this.size0[p]=l,this.size1[p]=c,this.col[p*3]=h.r,this.col[p*3+1]=h.g,this.col[p*3+2]=h.b,this.alpha[p]=u,this.drag[p]=d,this.grav[p]=f}_kill(t){const e=--this.n;if(t!==e){for(let n=0;n<3;n++)this.p[t*3+n]=this.p[e*3+n],this.v[t*3+n]=this.v[e*3+n],this.col[t*3+n]=this.col[e*3+n];this.life[t]=this.life[e],this.age[t]=this.age[e],this.size0[t]=this.size0[e],this.size1[t]=this.size1[e],this.alpha[t]=this.alpha[e],this.drag[t]=this.drag[e],this.grav[t]=this.grav[e]}}clear(){this.n=0,this.points.geometry.setDrawRange(0,0)}update(t,e){this.uniforms.uScale.value=e;for(let a=this.n-1;a>=0;a--)this.age[a]+=t,this.age[a]>=this.life[a]&&this._kill(a);const n=this.posAttr.array,s=this.sizeAttr.array,r=this.colAttr.array;for(let a=0;a<this.n;a++){const l=Math.max(0,1-this.drag[a]*t);this.v[a*3]*=l,this.v[a*3+1]=this.v[a*3+1]*l-this.grav[a]*t,this.v[a*3+2]*=l,this.p[a*3]+=this.v[a*3]*t,this.p[a*3+1]+=this.v[a*3+1]*t,this.p[a*3+2]+=this.v[a*3+2]*t;const c=this.age[a]/this.life[a];n[a*3]=this.p[a*3],n[a*3+1]=this.p[a*3+1],n[a*3+2]=this.p[a*3+2],s[a]=this.size0[a]+(this.size1[a]-this.size0[a])*c;const h=Math.min(1,c*8)*Math.min(1,(1-c)/.4);r[a*4]=this.col[a*3],r[a*4+1]=this.col[a*3+1],r[a*4+2]=this.col[a*3+2],r[a*4+3]=this.alpha[a]*h}const o=this.n;this.points.visible=o>0,o>0&&(this.posAttr.clearUpdateRanges(),this.posAttr.addUpdateRange(0,o*3),this.posAttr.needsUpdate=!0,this.sizeAttr.clearUpdateRanges(),this.sizeAttr.addUpdateRange(0,o),this.sizeAttr.needsUpdate=!0,this.colAttr.clearUpdateRanges(),this.colAttr.addUpdateRange(0,o*4),this.colAttr.needsUpdate=!0),this.points.geometry.setDrawRange(0,o)}}const Xe={fire:new vt("#FF7A1A").multiplyScalar(1.6),fireCore:new vt("#FFE600").multiplyScalar(1.8),ember:new vt("#FFB040").multiplyScalar(1.6),smoke:new vt("#3A3046"),fog:new vt("#C8C6D4"),firefly:new vt("#D8FF5A").multiplyScalar(1.6),candle:new vt("#FFC23A").multiplyScalar(1.5),spark:new vt("#FFF2A0").multiplyScalar(2),star:new vt("#FFE600").multiplyScalar(2),toxic:new vt("#59FF00").multiplyScalar(1.5),white:new vt("#FFFFFF").multiplyScalar(1.4)};class vS{constructor(t){this.add=new Tp(t,2400,!0),this.norm=new Tp(t,900,!1),this.density=1,this.acc=0,this.rand=Math.random,this._v=new P}setDensity(t){this.density=t}get count(){return this.add.n+this.norm.n}clear(){this.add.clear(),this.norm.clear()}update(t,e,n,s,r,o){const a=n/(2*Math.tan(e.fov*Math.PI/360)),l=this.rand,c=this.density,h=e.position;if(t>0){for(let u=0;u<s.length;u++){const d=s[u],f=d.pos.x-h.x,p=d.pos.z-h.z;f*f+p*p>60*60||(d.type==="fire"?(l()<30*t*c&&this.add.emit(d.pos.x+(l()-.5)*.25,d.pos.y,d.pos.z+(l()-.5)*.25,(l()-.5)*.4,1.6+l()*1.2,(l()-.5)*.4,.45+l()*.3,.55,.1,l()<.4?Xe.fireCore:Xe.fire,1,1),l()<4*t*c&&this.norm.emit(d.pos.x,d.pos.y+.6,d.pos.z,(l()-.5)*.3,1.1,(l()-.5)*.3,1.6,.4,1.4,Xe.smoke,.35,.5)):d.type==="candle"?l()<6*t*c&&this.add.emit(d.pos.x+(l()-.5)*.3,d.pos.y,d.pos.z+(l()-.5)*.3,0,.6+l()*.4,0,.8,.14,.04,Xe.candle):d.type==="toxic"?l()<9*t*c&&this.add.emit(d.pos.x+(l()-.5)*.6,d.pos.y,d.pos.z+(l()-.5)*.6,(l()-.5)*.2,.5+l()*.5,(l()-.5)*.2,1.1,.2,.05,Xe.toxic):d.type==="ember"&&l()<5*t*c&&this.add.emit(d.pos.x+(l()-.5)*.5,d.pos.y,d.pos.z+(l()-.5)*.5,(l()-.5)*.6,.9,(l()-.5)*.6,1.4,.12,.05,Xe.ember,1,.4))}if(l()<10*t*c){const u=l()<.5?-1:1,d=5+l()*30,f=-o.z,p=o.x,_=u*(3.2+l()*5);this.add.emit(h.x+o.x*d+f*_,h.y-.6+l()*2.2,h.z+o.z*d+p*_,(l()-.5)*.6,(l()-.5)*.4,(l()-.5)*.6,2.5+l()*2,.14,.1,Xe.firefly)}if(r>.05&&l()<24*r*t*c){const u=6+l()*26,d=(l()-.5)*18,f=-o.z,p=o.x;this.norm.emit(h.x+o.x*u+f*d,h.y-1.2+l()*1.6,h.z+o.z*u+p*d,(l()-.5)*.8,.05,(l()-.5)*.8,3,4,7,Xe.fog,.28*r)}}this.add.update(t,a),this.norm.update(t,a)}burst(t,e,n=1){const s=this.rand,r=Math.max(1,Math.round(n*(.5+this.density*.5)));if(t==="punch"){for(let o=0;o<26*r;o++){const a=s()*Math.PI*2,l=(s()-.3)*Math.PI,c=4+s()*6;this.add.emit(e.x,e.y,e.z,Math.cos(a)*Math.cos(l)*c,Math.sin(l)*c+2,Math.sin(a)*Math.cos(l)*c,.4+s()*.3,.25,.05,s()<.5?Xe.star:Xe.spark,1,3,6)}for(let o=0;o<6*r;o++)this.norm.emit(e.x+(s()-.5)*.6,e.y+(s()-.5)*.6,e.z+(s()-.5)*.6,(s()-.5)*2,s()*1.5,(s()-.5)*2,.8,.6,1.8,Xe.smoke,.4,2)}else if(t==="dust")for(let o=0;o<14*r;o++)this.norm.emit(e.x+(s()-.5)*1.2,e.y+.1,e.z+(s()-.5)*1.2,(s()-.5)*3,s()*1.8,(s()-.5)*3,.9,.5,1.6,Xe.fog,.5,2.5);else if(t==="pose")for(let o=0;o<40*r;o++){const a=s()*Math.PI*2;this.add.emit(e.x+Math.cos(a)*1.8,e.y+Math.sin(a)*1.3,e.z,Math.cos(a)*3,Math.sin(a)*3,(s()-.5)*2,.7,.22,.05,s()<.5?Xe.star:Xe.white,1,2)}else if(t==="toxic")for(let o=0;o<3*r;o++)this.add.emit(e.x+(s()-.5)*.8,e.y,e.z+(s()-.5)*.8,0,.5+s()*.5,0,1.2,.18,.05,Xe.toxic);else if(t==="fire")for(let o=0;o<2*r;o++)this.add.emit(e.x+(s()-.5)*.3,e.y,e.z+(s()-.5)*.3,(s()-.5)*.5,1.4+s(),(s()-.5)*.5,.4,.5,.1,s()<.4?Xe.fireCore:Xe.fire,1,1);else if(t==="hit")for(let o=0;o<18*r;o++){const a=s()*Math.PI*2;this.add.emit(e.x,e.y,e.z,Math.cos(a)*3,s()*3,Math.sin(a)*3,.5,.2,.05,Xe.fire,1,3)}}}const xS=90,$c=48,yS=["pumpkinKid","ghostKid","witch","vampire","skeleton","werewolf"],Yc=new oe,qa=new oe,zi=new oe,Ap=new oe,Cp=new Dn,J0=16,Z0=32,Rp=[1,.5,.25];class MS{constructor(t,e){this.kind=e,this.float=nl(e).float,this.n=0,this.lod1=J0,this.lod2=Z0,this.cull=1/0,this.items=[],this.free=[];for(let o=0;o<$c;o++)this.free.push({batch:this,i:-1,kind:e,phase:0,style:0,root:new oe});const n=(o,a,l,c)=>{if(!o)return null;const h=new Mn(o,a,$c);return h.instanceMatrix.setUsage(Rs),h.count=0,h.visible=!1,h.castShadow=l,h.matrixAutoUpdate=!1,h.renderOrder=c,t.add(h),h};this.lods=Rp.map((o,a)=>{const l=nl(e,o),c={body:n(l.body,we.body,!0,a+1),glow:n(l.glow,we.glow,!1,a+1),armL:n(l.armL,we.body,!0,a+1),armR:n(l.armR,we.body,!0,a+1),n:0,cast:a<2};return c.glow&&(c.glow.instanceMatrix=c.body.instanceMatrix),c.meshes=[c.body,c.glow,c.armL,c.armR].filter(Boolean),c});const s=this.lods[0],r=nl(e,Rp[1]);s.cast=!1,this.proxies=[];for(const o of["body","armL","armR"]){if(r[o]===s[o].geometry){s[o].userData.selfCast=!0;continue}const a=G0(r[o],we.body,s[o].instanceMatrix,$c);t.add(a),s.meshes.push(a),this.proxies.push(a)}this.meshes=this.lods.flatMap(o=>o.meshes),this.setShadows(!0)}setShadows(t){for(const e of this.lods)for(const n of["body","armL","armR"])e[n].castShadow=t&&(e.cast||!!e[n].userData.selfCast);for(const e of this.proxies)e.castShadow=t}add(t,e,n){const s=this.free.pop();return s?(s.root.copy(t),s.phase=e,s.style=n,s.i=this.n++,this.items[s.i]=s,s):null}remove(t){const e=--this.n;if(t.i!==e){const n=this.items[e];this.items[t.i]=n,n.i=t.i}this.items[e]=null,t.i=-1,this.free.push(t)}update(t,e,n){const s=this.lods,r=this.lod1*this.lod1,o=this.lod2*this.lod2,a=this.cull*this.cull;for(const l of s)l.n=0;for(let l=0;l<this.n;l++){const c=this.items[l],h=c.root.elements,u=h[12]-e.x,d=h[13]-e.y,f=h[14]-e.z;if(u*n.x+d*n.y+f*n.z<-3)continue;const p=u*u+d*d+f*f;if(p>a)continue;const _=p<r?s[0]:p<o?s[1]:s[2],g=_.n++,m=t+c.phase;let M=0,x=0,v=0,I=0,T=0;switch(c.style){case 0:{T=2.6+Math.sin(m*9)*.45,v=-.35;break}case 1:{const R=Math.abs(Math.sin(m*4.2));M=R*.28,v=-2.5-R*.3,T=2.5+R*.3;break}case 2:{const R=Math.sin(m*10);x=-1.25,v=.35+R*.3,I=-1.25,T=-.35-R*.3,M=Math.abs(Math.sin(m*5))*.05;break}default:{const R=Math.max(0,Math.sin(m*6));T=2.2+R*.7,x=-.3,v=-.25,M=R*.06}}this.float&&(M+=.25+Math.sin(m*2)*.1),Yc.makeRotationY(Math.sin(m*1.3)*.15),Yc.elements[13]=M,qa.multiplyMatrices(c.root,Yc),qa.toArray(_.body.instanceMatrix.array,g*16),zi.makeRotationFromEuler(Cp.set(x,0,v)),zi.elements[12]=-bl,zi.elements[13]=Ml,Ap.multiplyMatrices(qa,zi).toArray(_.armL.instanceMatrix.array,g*16),zi.makeRotationFromEuler(Cp.set(I,0,T)),zi.elements[12]=bl,zi.elements[13]=Ml,Ap.multiplyMatrices(qa,zi).toArray(_.armR.instanceMatrix.array,g*16)}for(const l of s){const c=l.n;for(const h of l.meshes)h.count=c,h.visible=c>0,c>0&&(h.instanceMatrix.clearUpdateRanges(),h.instanceMatrix.addUpdateRange(0,c*16),h.instanceMatrix.needsUpdate=!0,h.computeBoundingSphere())}}}class bS{constructor(t){this.scene=t,this.batches=new Map;for(const e of yS)this.batches.set(e,new MS(t,e));this.total=0,this._shadows=!0,this.meshes=[];for(const e of this.batches.values())for(const n of e.meshes)this.meshes.push(n);this._cam=new P,this._fwd=new P(0,0,-1)}get shadows(){return this._shadows}set shadows(t){this._shadows=t;for(const e of this.batches.values())e.setShadows(t)}setLod(t,e){for(const n of this.batches.values())n.lod1=J0*t,n.lod2=Z0*t,n.cull=e}add(t,e,n,s){if(this.total>=xS)return null;const r=this.batches.get(t),o=r?r.add(e,n,s):null;return o&&this.total++,o}remove(t){!t||t.i<0||(t.batch.remove(t),this.total--)}update(t,e){const n=this._cam,s=this._fwd;e&&(e.getWorldDirection(s),n.setFromMatrixPosition(e.matrixWorld));for(const r of this.batches.values())r.update(t,n,s)}reset(){for(const t of this.batches.values())for(;t.n>0;)t.remove(t.items[t.n-1]);this.total=0}}const te=Math.PI,be=4.9,Kt={pumpkin:"#FF5E00",stem:"#3E7A1E",wood:"#6B4423",woodDark:"#4A2C1A",iron:"#222429",steel:"#9AA0AA",pipe:"#1CC427",pipeDark:"#128A1B",toxic:"#59FF00",glow:"#FFE600",bone:"#EDE6D2",crate:"#8A5A2E",vine:"#2E6B2A"};class SS{constructor(){this.body=new qt,this.glow=new qt,this.flicker=new qt,this.parts=[],this.flames=[],this.toxic=[]}part(t,e,n={}){const s={name:t,body:new qt,glow:new qt,flicker:new qt,pos:e,...n};return this.parts.push(s),s}}function hs(i,t,e,n,s,r="jack",o=1.8,a=0){i.add(ii(n,s,8,18),Kt.pumpkin,e,[0,a,0]),i.add(S.cyl(n*.08,n*.12,n*.4,6),Kt.stem,[e[0],e[1]+s*.95,e[2]],[.2,0,.1]),r&&t&&t.add(es(r,n*1.15,n*1.04),"#FFD21A",[e[0],e[1]+s*.47,e[2]],[0,a,0],[1,s/(2*n)+.15,1],o)}function Pp(i,t,e,n=Kt.woodDark){i.add(S.rbox(.28,e,.28,.05),n,[t,e/2,0])}const Q0={pumpkinLog(i){i.body.add(S.cyl(.38,.4,be,14),Kt.wood,[0,.38,0],[0,0,te/2]);for(const t of[-be/2,be/2])i.body.add(S.cyl(.33,.33,.02,14),"#C8955A",[t,.38,0],[0,0,te/2]);for(let t=0;t<6;t++)i.body.add(S.torus(.39,.02,4,16),Kt.woodDark,[-2+t*.8,.38,0],[0,te/2,0]);hs(i.body,i.flicker,[-1.4,.7,.05],.36,.5,"jack"),hs(i.body,i.flicker,[.15,.7,.05],.42,.58,"angry"),hs(i.body,i.flicker,[1.5,.7,.05],.34,.48,"happy")},greenPipe(i){i.body.add(S.cyl(.45,.45,be-.6,18),Kt.pipe,[0,.5,0],[0,0,te/2]);for(const t of[-be/2+.3,be/2-.3])i.body.add(S.cyl(.56,.56,.3,18),Kt.pipeDark,[t,.5,0],[0,0,te/2]),i.body.add(S.rbox(.5,.5,.9,.06),Kt.pipeDark,[t,.25,0]);for(const t of[-1.2,1.2])i.body.add(S.torus(.47,.04,6,18),Kt.pipeDark,[t,.5,0],[0,te/2,0]);i.body.add(S.box(be-.8,.06,.04),"#5BEA62",[0,.82,.25]),hs(i.body,i.flicker,[0,.88,.05],.5,.7,"jack",2)},pumpkinBeam(i){Pp(i.body,-be/2-.1,1.2),Pp(i.body,be/2+.1,1.2),i.body.add(S.rbox(be+.6,.26,.3,.05),Kt.wood,[0,1,0]);for(let t=0;t<4;t++){const e=-1.8+t*1.2,n=i.part("swing"+t,[e,.87,0],{kind:"swing",axis:"z",amp:.35,speed:3.2,phase:t*1.3});n.body.add(S.cyl(.015,.015,.25,4),Kt.iron,[0,-.12,0]),hs(n.body,n.flicker,[0,-.6,0],.26,.36,t%2?"happy":"jack")}},rootArch(i){i.body.add(Pe([[-be/2-.6,-.2,.2],[-1.6,.9,0],[-.4,1,.15],[.8,.85,-.1],[1.9,.95,.1],[be/2+.6,-.2,0]],.3,.22,34,9),"#5A3A26"),i.body.add(Pe([[-be/2-.2,-.1,-.2],[-1,.65,-.25],[.4,.7,-.2],[be/2+.3,-.1,-.3]],.2,.15,24,7),"#4A2C1E"),i.body.add(Pe([[-.6,.95,.15],[-.2,1.3,.3],[.2,1.4,.2]],.08,.02,10,5),"#5A3A26"),i.body.add(Pe([[1.2,.9,0],[1.6,1.25,.2],[1.5,1.5,.1]],.07,.02,10,5),"#5A3A26");for(const[t,e]of[[-1.4,.95],[.3,1],[1.6,.98]])i.body.add(S.ico(.14,0),"#3E7A1E",[t,e+.12,.1],[t,0,e]);i.glow.add(S.sphere(.06,8,6),Kt.toxic,[-.9,1.1,.3],null,null,2),i.glow.add(S.sphere(.05,8,6),Kt.glow,[1,1.05,.3],null,null,2)},glowCrates(i){[-1.85,-.62,.62,1.85].forEach((e,n)=>{const s=1.05+n%2*.08;i.body.add(S.rbox(s,s*.88,1,.05),Kt.crate,[e,s*.88/2,0],[0,(n-1.5)*.06,0]);for(const r of[.12,s*.88-.12])i.body.add(S.box(s+.02,.1,1.02),"#5A3A1E",[e,r,0],[0,(n-1.5)*.06,0]);i.body.add(S.box(.1,s*.88,1.02),"#5A3A1E",[e,s*.88/2,0],[0,(n-1.5)*.06,te/4]),i.glow.add(Eb(.18,.08,5,.02),n%2?Kt.glow:Kt.toxic,[e,s*.88/2,.52],null,null,2.2)})},broomstick(i){hs(i.body,i.flicker,[-2,0,0],.5,.75,"jack"),hs(i.body,i.flicker,[2,0,0],.5,.75,"angry"),i.body.add(S.cyl(.07,.07,4.6,8),"#7A4E28",[0,.85,0],[0,0,te/2+.03]),i.body.add(S.cone(.42,1.2,12),"#D9B24A",[2.9,.88,0],[0,0,te/2]),i.body.add(S.cyl(.12,.12,.14,10),"#8E2CC2",[2.35,.88,0],[0,0,te/2]);for(let t=0;t<8;t++){const e=t/8*te*2;i.body.add(S.cyl(.012,.012,1.1,3),"#B8902E",[2.9,.88+Math.cos(e)*.2,Math.sin(e)*.2],[0,0,te/2+Math.cos(e)*.1])}},boneBar(i){for(const t of[-be/2+.1,be/2-.1]){i.body.add(S.rbox(.6,.5,.6,.08),"#5E6166",[t,.25,0]),i.body.add(S.sphere(.42,16,12),Kt.bone,[t,.95,0]),i.body.add(S.rbox(.5,.25,.4,.08),Kt.bone,[t,.66,.08]);for(const e of[-.15,.15])i.body.add(S.sphere(.12,10,8),"#1A0B1E",[t+e,.98,.33],null,[1,1.1,.6]),i.flicker.add(S.sphere(.05,6,4),"#FF8A1A",[t+e,.98,.42],null,null,2.4)}i.body.add(S.cyl(.16,.16,be-1.2,12),Kt.bone,[0,.9,0],[0,0,te/2]);for(const t of[-3.7/2,(be-1.2)/2])i.body.add(S.sphere(.24,12,10),Kt.bone,[t,1.04,0]),i.body.add(S.sphere(.24,12,10),Kt.bone,[t,.76,0])},spikedLog(i){const t=i.part("log",[0,.55,0],{kind:"spin",axis:"x",speed:-9});t.body.add(S.cyl(.42,.42,be-.4,14),"#7A4E28",[0,0,0],[0,0,te/2]);for(const e of[-4.5/2,(be-.4)/2])t.body.add(S.cyl(.36,.36,.03,14),"#C8955A",[e,0,0],[0,0,te/2]);for(let e=0;e<9;e++)for(let n=0;n<6;n++){const s=n/6*te*2+e*.5,r=-1.95+e*.49;t.body.add(S.cone(.07,.26,6),Kt.steel,[r,Math.cos(s)*.52,Math.sin(s)*.52],[s,0,0])}i.approach=3},sawblades(i){for(const t of[-1.15,1.15]){i.body.add(S.rbox(.22,.12,2.2,.03),"#3A3D44",[t,.04,0]),i.body.add(S.box(.08,.02,2),"#14161A",[t,.1,0]);const e=i.part("saw"+t,[t,.25,0],{kind:"spin",axis:"x",speed:t>0?14:-14}),n=wb(.95,22,.08);n.rotateY(te/2),e.body.add(n,"#C8CED8",[0,0,0]),e.body.add(S.cyl(.18,.18,.14,12),Kt.iron,[0,0,0],[0,0,te/2]),e.glow.add(S.torus(.6,.015,4,24),"#FF3A1A",[0,0,0],[0,te/2,0],null,1.6)}for(let t=0;t<6;t++)i.body.add(S.box(.4,.03,.22),t%2?"#141218":Kt.glow,[0,.02,-1+t*.4])}};function jc(i,t=3.2,e=Kt.iron){for(const n of[-be/2-.25,be/2+.25])i.body.add(S.rbox(.24,t,.24,.04),e,[n,t/2,0]),i.body.add(S.rbox(.6,.2,.6,.05),"#3A3D44",[n,.1,0]);i.body.add(S.rbox(be+1,.24,.3,.05),e,[0,t,0])}const wS={toxicCrates(i){jc(i,1.15),i.body.add(S.rbox(be+.6,.12,1.1,.03),"#3A3D44",[0,1.1,0]),[-1.9,-.75,.4,1.55].forEach((e,n)=>{i.body.add(S.rbox(1,.9,1,.05),n%2?"#2E3A28":"#3A4430",[e,1.65,0],[0,(n-1.5)*.08,0]),i.glow.add(S.box(.7,.12,.02),Kt.toxic,[e,1.65,.51],null,null,2.2),i.glow.add(S.circle(.16,12),Kt.toxic,[e,1.85,.52],null,null,2.2),i.toxic.push([e,2.1,0])}),i.body.add(S.rbox(1,.9,1,.05),"#2E3A28",[-1.3,2.55,0],[0,.15,0]),i.body.add(S.cyl(.4,.4,.9,14),"#3A4430",[1,2.55,0]),i.glow.add(S.torus(.41,.04,4,18),Kt.toxic,[1,2.55,0],[te/2,0,0],null,2);for(const e of[-1.6,.1,1.8])i.glow.add(S.sphere(.06,8,6),Kt.toxic,[e,1,.3],null,[1,1.6,1],2)},flamePendulums(i){jc(i,4.6,"#3A2A1E");for(let t=0;t<2;t++){const e=t?1.1:-1.1,n=i.part("pend"+t,[e,4.5,0],{kind:"swing",axis:"z",amp:.55,speed:2.6,phase:t*te});n.body.add(S.cyl(.03,.03,3.05,5),Kt.iron,[0,-1.52,0]),n.body.add(ii(.45,.62,8,18),"#E04A00",[0,-3.4,0]),n.flicker.add(es("angry",.52,.47),"#FFE600",[0,-3.09,0],null,[1,.85,1],2.4);for(let s=0;s<8;s++){const r=s/8*te*2;n.body.add(S.cone(.06,.24,5),Kt.steel,[Math.cos(r)*.48,-3.09,Math.sin(r)*.48],[Math.sin(r)*te/2,0,-Math.cos(r)*te/2])}n.body.add(S.cone(.08,.3,6),Kt.steel,[0,-3.5,0],[te,0,0]),n.flames=[[0,-2.75,0]]}},hangingVines(i){i.body.add(Pe([[-be/2-.9,0,0],[-be/2-.4,2,.1],[-1.5,2.9,0],[0,3.15,.1],[1.6,2.9,-.1],[be/2+.4,2,0],[be/2+.9,0,0]],.28,.28,40,8),"#4A2C1E");for(let t=0;t<13;t++){const e=-2.3+t*.38,n=3-Math.abs(e)*.12,s=i.part("vine"+t,[e,n,0],{kind:"swing",axis:"x",amp:.12,speed:2.2,phase:t*.7}),r=n-1.05-t%3*.08;s.body.add(Pe([[0,0,0],[.06,-r*.5,.05],[-.04,-r,0]],.05,.035,8,5),Kt.vine);for(let o=0;o<4;o++)s.body.add(S.ico(.1,0),o%2?"#3E8A2A":"#2E6B2A",[.05,-r*(.25+o*.22),.05],[o,o,0],[1.2,.5,.8]);t%3===0&&s.glow.add(S.sphere(.07,8,6),"#FF5ED8",[0,-r,.02],null,null,2)}},ghostBar(i){jc(i,2.4,"#3A3048");for(let t=0;t<5;t++){const e=-2+t,n=i.part("g"+t,[e,1.6,0],{kind:"bob",amp:.08,speed:3,phase:t*1.1});n.body.add(Jn([[0,-.36],[.44,-.4],[.38,0],[.34,.3],[.22,.5],[0,.55]],16),"#F4F0FF",[0,0,0]);for(let s=0;s<5;s++){const r=s/5*te*2;n.body.add(S.cone(.1,.18,5),"#F4F0FF",[Math.cos(r)*.36,-.46,Math.sin(r)*.36],[te,0,0])}n.body.add(S.sphere(.06,8,6),"#1A0B2E",[-.1,.25,.3],null,[1,1.4,.5]),n.body.add(S.sphere(.06,8,6),"#1A0B2E",[.1,.25,.3],null,[1,1.4,.5]),n.body.add(S.sphere(.07,8,6),"#1A0B2E",[0,.06,.34],null,[1,1.3,.5]),n.body.add(S.capsule(.06,.32,3,6),"#F4F0FF",[-.4,.1,0],[0,0,1.2]),n.body.add(S.capsule(.06,.32,3,6),"#F4F0FF",[.4,.1,0],[0,0,-1.2])}i.body.add(S.cyl(.03,.03,be,6),"#8E2CC2",[0,2.1,0],[0,0,te/2])}},Zh=["skeleton","vampire","witch","zombie","ghost"],ES={cart(i){i.body.add(S.rbox(1.5,.75,2.2,.1),"#8E2CC2",[0,.85,0]),i.body.add(S.rbox(1.6,.12,2.3,.05),"#5A1E80",[0,1.25,0]),i.body.add(S.rbox(1.5,.08,.06,.02),Kt.glow,[0,.8,1.11]),i.body.add(ii(.55,.6,8,18),Kt.pumpkin,[0,.7,1],null,[1.05,1,.6]),i.flicker.add(es("jack",.6,.55),"#FFE600",[0,1,1],null,[1,1,.6],2.2);for(const t of[-.6,.6])i.glow.add(S.sphere(.12,10,8),"#FFF2A0",[t,.95,1.12],null,null,2.6);i.body.add(S.rbox(1.2,.5,.15,.05),"#5A1E80",[0,1.45,-.6]);for(const t of[-.75,.75]){const e=i.part("wheel"+t,[0,.36,t],{kind:"spin",axis:"x",speed:30});for(const n of[-.8,.8])e.body.add(S.cyl(.36,.36,.18,14),"#1A1420",[n,0,0],[0,0,te/2]),e.body.add(S.cyl(.18,.18,.2,10),Kt.glow,[n,0,0],[0,0,te/2]),e.body.add(S.box(.2,.6,.06),"#FF8A1A",[n,0,0])}i.driver={pos:[0,.75,-.35],scale:.85},i.width=1.6},tricycle(i){i.body.add(Pe([[0,.45,.85],[0,.85,.4],[0,.75,-.4]],.06,.06,10,6),"#FF5E00"),i.body.add(S.cyl(.05,.05,1.1,6),"#222429",[0,.4,-.55],[0,0,te/2]),i.body.add(S.rbox(.45,.12,.4,.05),"#1A1420",[0,.82,-.3]),i.body.add(S.cyl(.03,.03,.7,6),"#C8CED8",[0,1.15,.72],[0,0,te/2]),i.body.add(S.cyl(.03,.03,.4,6),"#C8CED8",[0,.95,.75],[.25,0,0]),i.body.add(ii(.2,.24,8,12),Kt.pumpkin,[0,.6,1.1]),i.glow.add(S.sphere(.1,8,6),"#FFF2A0",[0,.85,.95],null,null,2.6);const t=i.part("front",[0,.48,.85],{kind:"spin",axis:"x",speed:28});t.body.add(S.cyl(.48,.48,.12,16),"#1A1420",[0,0,0],[0,0,te/2]),t.body.add(S.cyl(.3,.3,.14,12),Kt.glow,[0,0,0],[0,0,te/2]),t.body.add(S.box(.15,.85,.06),"#8E2CC2",[0,0,0]);const e=i.part("back",[0,.3,-.55],{kind:"spin",axis:"x",speed:46});for(const n of[-.55,.55])e.body.add(S.cyl(.3,.3,.1,12),"#1A1420",[n,0,0],[0,0,te/2]),e.body.add(S.box(.12,.5,.05),"#8E2CC2",[n,0,0]);i.driver={pos:[0,.55,-.3],scale:.8},i.width=1.2},spikedBarrels(i){const t=[[-.3,0,0],[.45,0,-.5],[.4,0,.6]];for(const[e,,n]of t){i.body.add(Jn([[0,0],[.42,0],[.5,.35],[.52,.55],[.5,.75],[.42,1.1],[0,1.1]],16),"#7A4E28",[e,0,n]);for(const s of[.2,.9])i.body.add(S.torus(.47,.03,4,16),Kt.iron,[e,s,n],[te/2,0,0]);for(let s=0;s<8;s++){const r=s/8*te*2;i.body.add(S.cone(.06,.26,5),Kt.steel,[e+Math.cos(r)*.6,.55,n+Math.sin(r)*.6],[Math.sin(r)*te/2,0,-Math.cos(r)*te/2])}i.body.add(S.cyl(.4,.4,.04,16),"#5A3A1E",[e,1.1,n])}i.flicker.add(S.circle(.25,12),Kt.toxic,[-.3,1.13,0],[-te/2,0,0],null,1.6),i.width=1.5},pipeLane(i){for(const[t,e,n]of[[-.2,.3,1.5],[.55,-.5,1.1]])i.body.add(S.cyl(.42,.42,n,18),Kt.pipe,[t,n/2,e]),i.body.add(S.cyl(.52,.52,.3,18),"#128A1B",[t,n-.05,e]),i.body.add(S.cyl(.38,.38,.02,16),"#0A3A0E",[t,n+.11,e]),i.toxic.push([t,n+.15,e]);i.body.add(S.cyl(.18,.18,1.4,10),Kt.pipe,[.2,.3,-.1],[te/2,0,.6]),i.width=1.5}},TS={...Q0,...wS,...ES},Kc=new Map;function AS(i){if(Kc.has(i))return Kc.get(i);const t=new SS;(TS[i]||Q0.pumpkinLog)(t);const e={body:t.body.build(),glow:t.glow.build(),flicker:t.flicker.build(),parts:t.parts.map(n=>({...n,body:n.body.build(),glow:n.glow.build(),flicker:n.flicker.build()})),toxic:t.toxic,approach:t.approach||0,driver:t.driver||null,width:t.width||be};return Kc.set(i,e),e}function Fp(i,t,e){if(t.body){const n=new me(t.body,we.body);n.castShadow=e,i.add(n)}t.glow&&i.add(new me(t.glow,we.glow)),t.flicker&&i.add(new me(t.flicker,we.flicker))}function CS(i,{shadows:t=!0,driverKind:e=null}={}){const n=AS(i),s=new Ve,r=new Ve;s.add(r),Fp(r,n,t);const o=[],a=[];for(const c of n.parts){const h=new Ve;if(h.position.set(c.pos[0],c.pos[1],c.pos[2]),Fp(h,c,t),r.add(h),o.push({obj:h,kind:c.kind,axis:c.axis,speed:c.speed||0,amp:c.amp||0,phase:c.phase||0,base:h.position.y}),c.flames)for(const u of c.flames)a.push({obj:h,local:new P(u[0],u[1],u[2])})}let l=null;return n.driver&&(l=Gu(e||Zh[0],{shadows:t}),l.root.position.set(n.driver.pos[0],n.driver.pos[1],n.driver.pos[2]),l.root.scale.setScalar(n.driver.scale),l.armL.rotation.set(-1.2,0,-.15),l.armR.rotation.set(-1.2,0,.15),r.add(l.root)),{variant:i,root:s,inner:r,parts:o,flames:a,toxic:n.toxic.map(c=>new P(c[0],c[1],c[2])),approach:n.approach,width:n.width,driver:l,update(c){for(const h of o)h.kind==="spin"?h.obj.rotation[h.axis]=c*h.speed:h.kind==="swing"?h.obj.rotation[h.axis]=Math.sin(c*h.speed+h.phase)*h.amp:h.kind==="bob"&&(h.obj.position.y=h.base+Math.sin(c*h.speed+h.phase)*h.amp);l&&(l.inner.position.y=Math.abs(Math.sin(c*9))*.04,l.inner.rotation.z=Math.sin(c*4)*.06)}}}const RS=["zombie","skeleton","ghost","vampire","scarecrow","mummy"],Jc=1.3;function PS(i,{shadows:t=!0}={}){const e=Gu(RS.includes(i)?i:"zombie",{shadows:t}),n=new Ve,s=new Ve;return s.position.y=1*Jc,n.add(s),e.root.position.y=-1*Jc,e.root.scale.setScalar(Jc),s.add(e.root),{kind:e.kind,root:n,spin:s,ch:e,reset(){s.rotation.set(0,0,0),e.inner.position.set(0,0,0),e.inner.rotation.set(0,0,0),K0(e)},update(r,o,a){const l=r+o,{inner:c,armL:h,armR:u}=e;if(a){h.rotation.set(-.4,0,-2.4+Math.sin(l*20)*.3),u.rotation.set(-.4,0,2.4+Math.cos(l*20)*.3);return}switch(e.kind){case"ghost":c.position.y=.3+Math.sin(l*2.4)*.12,c.rotation.z=Math.sin(l*1.7)*.08,h.rotation.set(-1.4+Math.sin(l*3)*.15,0,-.1),u.rotation.set(-1.4+Math.cos(l*3)*.15,0,.1);break;case"scarecrow":c.position.y=Math.abs(Math.sin(l*3.2))*.12,c.rotation.z=Math.sin(l*3.2)*.1,h.rotation.set(0,0,-1.45+Math.sin(l*6)*.12),u.rotation.set(0,0,1.45-Math.sin(l*6)*.12);break;case"skeleton":case"vampire":{const d=Math.sin(l*7);c.position.y=Math.abs(d)*.05,c.rotation.y=Math.sin(l*2)*.12,h.rotation.set(-1.9+d*.15,0,-.5),u.rotation.set(-1.9-d*.15,0,.5);break}default:c.rotation.z=Math.sin(l*2.6)*.09,c.rotation.x=.08,c.position.y=Math.abs(Math.sin(l*2.6))*.04,h.rotation.set(-1.45+Math.sin(l*2.6)*.18,0,-.08),u.rotation.set(-1.55-Math.sin(l*2.6)*.18,0,.08)}}}}const FS=["heart","chairSquat","highKnee","horsePunch","toeTouch","sideBend","starJump"],DS={heart:"HEART HANDS",chairSquat:"CHAIR SQUAT",highKnee:"HIGH KNEES",horsePunch:"HORSE PUNCH",toeTouch:"TOUCH YOUR TOES",sideBend:"SIDE BEND",starJump:"STAR JUMP"},Cs=3.5,Wu=2.5,LS=.25,fi=[0,8],An=[0,4.5],Dp={heart:{head:[0,9],neck:fi,hip:An,arms:[[fi,[-1.8,10],[-.15,11]],[fi,[1.8,10],[.15,11]]],legs:[[An,[-.6,2.2],[-.9,0]],[An,[.6,2.2],[.9,0]]]},chairSquat:{head:[.8,8.2],neck:[.3,7.3],hip:[-1.5,3.6],arms:[[[.3,7.3],[2,7.1],[3.7,7.1]],[[.3,7.3],[2.1,6.8],[3.8,6.8]]],legs:[[[-1.5,3.6],[1,3.6],[1,0]],[[-1.5,3.6],[1.3,3.4],[1.4,0]]],chair:!0},highKnee:{head:[0,9],neck:fi,hip:An,arms:[[fi,[-1.6,6.6],[-1.3,8.6]],[fi,[1.4,6.3],[1.9,4.8]]],legs:[[An,[-.3,2.3],[-.4,0]],[An,[1,5.4],[1,3]]]},horsePunch:{head:[0,8.4],neck:[0,7.4],hip:[0,4],arms:[[[0,7.4],[2.2,7.3],[4.5,7.3]],[[0,7.4],[-1.6,6],[-.8,5.3]]],legs:[[[0,4],[-2.2,3.1],[-2.7,0]],[[0,4],[2.2,3.1],[2.7,0]]],fist:[4.6,7.3]},toeTouch:{head:[3.3,1.7],neck:[2.6,2.3],hip:[0,4.5],arms:[[[2.6,2.3],[1.9,1.1],[.8,.25]],[[2.6,2.3],[2.2,1],[1.1,.2]]],legs:[[[0,4.5],[.1,2.3],[.2,0]],[[0,4.5],[.4,2.3],[.6,0]]]},sideBend:{head:[-2.3,8.5],neck:[-1.5,7.8],hip:An,arms:[[[-1.5,7.8],[0,9.7],[-2.4,10.9]],[[-1.5,7.8],[-2.5,6],[-2.2,4.2]]],legs:[[An,[-1,2.2],[-1.5,0]],[An,[1,2.2],[1.5,0]]]},starJump:{head:[0,9],neck:fi,hip:An,arms:[[fi,[-2,9],[-3.7,10.3]],[fi,[2,9],[3.7,10.3]]],legs:[[An,[-1.6,2.3],[-3,0]],[An,[1.6,2.3],[3,0]]],lines:!0}},Zc=new Map;function IS(i){const e=Math.round(1024*Wu/Cs),n=document.createElement("canvas");n.width=1024,n.height=e;const s=n.getContext("2d");s.fillStyle="#E6FF00",s.fillRect(0,0,1024,e),s.strokeStyle="#111111",s.lineWidth=14,s.strokeRect(22,22,980,e-44);const r=Dp[i]||Dp.starJump,o=52,a=1024/2,l=e-70,c=f=>[a+f[0]*o,l-f[1]*o];if(s.strokeStyle="#111111",s.fillStyle="#111111",s.lineCap="round",s.lineJoin="round",s.lineWidth=46,s.beginPath(),s.lineWidth=12,s.moveTo(1024*.18,l+26),s.lineTo(1024*.82,l+26),s.stroke(),r.chair){s.lineWidth=14,s.globalAlpha=.35;const f=c([-2.4,3.3]),p=c([-2.4,0]),_=c([-1.2,3.3]),g=c([-2.4,7]);s.beginPath(),s.moveTo(g[0],g[1]),s.lineTo(f[0],f[1]),s.lineTo(p[0],p[1]),s.moveTo(f[0],f[1]),s.lineTo(_[0],_[1]),s.lineTo(_[0],l),s.stroke(),s.globalAlpha=1}s.lineWidth=46;const h=f=>{s.beginPath(),f.forEach((p,_)=>{const[g,m]=c(p);_?s.lineTo(g,m):s.moveTo(g,m)}),s.stroke()};h([r.neck,r.hip]);for(const f of r.legs)h(f);for(const f of r.arms)h(f);const[u,d]=c(r.head);if(s.beginPath(),s.arc(u,d,.98*o,0,Math.PI*2),s.fill(),r.fist){const[f,p]=c(r.fist);s.beginPath(),s.arc(f,p,.5*o,0,Math.PI*2),s.fill()}if(r.lines){s.lineWidth=12;for(const f of[-1,1])for(let p=0;p<3;p++){const _=c([f*(4.4+p*.1),10.6-p*.9]),g=c([f*(5.2+p*.1),10.9-p*.9]);s.beginPath(),s.moveTo(_[0],_[1]),s.lineTo(g[0],g[1]),s.stroke()}}return n}function US(i){if(Zc.has(i))return Zc.get(i);const t=IS(i),e=s=>{const r=new ea(t);return r.colorSpace=$e,r.anisotropy=4,r.repeat.set(.5,1),r.offset.set(s,0),new ks({map:r,toneMapped:!1,fog:!0})},n=[e(0),e(.5)];return Zc.set(i,n),n}let Qh=null,tm=null,em=null,tu=null;function NS(){if(Qh)return;const i=new qt,t=new qt;for(const e of[-Cs/2-.2,Cs/2+.2])i.add(S.rbox(.3,3.4,.36,.06),"#3A1A55",[e,1.7,0]),i.add(S.rbox(.5,.24,.5,.06),"#22102F",[e,.12,0]),i.add(S.cone(.2,.36,4),"#22102F",[e,3.55,0],[0,Math.PI/4,0]),t.add(S.sphere(.11,10,8),"#FFE600",[e,3,.2],null,null,2.4),t.add(S.sphere(.09,10,8),"#FF8A1A",[e,1.9,.2],null,null,2.2);i.add(S.rbox(Cs+.8,.26,.38,.06),"#3A1A55",[0,3.1,0]);for(let e=0;e<7;e++)t.add(S.sphere(.06,8,6),e%2?"#FF5E00":"#FFE600",[-1.5+e*.5,3.1,.2],null,null,2.2);Qh=i.build(),tm=t.build(),tu=new Ai(Cs/2,Wu),em=new ks({color:"#B8CC00",toneMapped:!1,side:on})}function OS(i,{shadows:t=!0}={}){NS();const e=new Ve,n=new me(Qh,we.body);n.castShadow=t,e.add(n),e.add(new me(tm,we.glow));const s=[],r=US(i);for(const o of[-1,1]){const a=new Ve;a.position.set(o*(Cs/2),LS+Wu/2,0);const l=new me(tu,o<0?r[0]:r[1]);l.position.x=-o*(Cs/4);const c=new me(tu,em);c.position.copy(l.position),a.add(l,c),e.add(a),s.push({pivot:a,side:o})}return{pose:i,root:e,setOpen(o){const a=Math.min(1,Math.max(0,o)),l=1-Math.pow(1-a,3);for(const c of s)c.pivot.rotation.y=-c.side*l*1.75}}}const BS=1.7,kS=1.2,zS=10,Lp=new Set(["cart","tricycle"]),VS={spikedLog:3},HS=.9,Sl=16.97,wl=24,GS=14,nm=.38,ar=2*Sl/wl,eu=2*Sl*nm/wl,Qc=ar+eu+.5,$a=new P,WS=new P,XS=new P,th=new Map;class qS{constructor(t,e,n){this.scene=t,this.track=e,this.effects=n,this.events=[],this.speed=14,this.ahead=70,this.shadows=!0,this.pool=new Map,this.active=new Map,this.list=[],this._entPool=[],this.order=[],this.cursor=0,this.lastTime=-1e9,this.emitters=[],this._emitPool=[]}setSchedule(t){this.events=t.events,this.speed=t.speed,this.reset(),this.prewarm()}setAhead(t){this.ahead=t,this._sortSpawns()}reset(){this._releaseAll(),this._sortSpawns(),this.cursor=0,this.lastTime=-1e9}_params(t){let e=0,n=0,s=0;switch(t.type){case"punch":e=BS,n=kS;break;case"left":case"right":s=(t.type==="left"?1:-1)*HS,n=Lp.has(t.variant)?zS:0;break;case"jump":case"duck":n=VS[t.variant]||0;break}return{off:e,approach:n,lat:s}}_sortSpawns(){this.order=this.events.map(t=>{const e=this._params(t);return{ev:t,...e,spawn:t.t-(this.ahead-e.off)/(this.speed+e.approach)}}),this.order.sort((t,e)=>t.spawn-e.spawn)}prewarm(){th.clear();const t=new Map;for(const e of this.order){const n=this._poolKey(e.ev);let s=th.get(n);s||th.set(n,s=[]);for(let r=s.length-1;r>=0;r--)s[r]<e.spawn&&s.splice(r,1);s.push(e.ev.t+(e.ev.type==="punch"?.15+Qc:1.2)),t.set(n,Math.max(t.get(n)||0,s.length))}for(const[e,n]of t){let s=this.pool.get(e);s||this.pool.set(e,s=[]);let r=s.length;for(const a of this.list)a.key===e&&r++;const o=this.order.find(a=>this._poolKey(a.ev)===e).ev;for(;r<n;r++)s.push(this._build(o,e))}for(;this._entPool.length<24;)this._entPool.push(this._newEnt())}*pooledRoots(){for(const t of this.pool.values())for(const e of t)yield(e.enemy||e.wall||e.obstacle).root}_newEnt(){return{ev:null,key:"",obj:null,root:null,off:0,approach:0,lat:0,phase:0,hitTime:-1,sHit:0,latHit:0,tumble:0,roll:0,drift:0,bounced:!1,passed:!1,_i:-1}}_build(t,e){const n=this._create(t,e),s=(n.enemy||n.wall||n.obstacle).root;return s.matrixAutoUpdate=!1,s.visible=!1,this.scene.add(s),n}_releaseAll(){for(let t=this.list.length-1;t>=0;t--)this._release(this.list[t])}_poolKey(t){return t.type==="punch"?"enemy:"+t.variant:t.type==="pose"?"pose:"+t.variant:Lp.has(t.variant)?"obs:"+t.variant+":"+Zh[Fs(t.id,77)%Zh.length]:"obs:"+t.variant}_create(t,e){if(t.type==="punch")return{enemy:PS(t.variant,{shadows:this.shadows})};if(t.type==="pose")return{wall:OS(FS.includes(t.variant)?t.variant:"starJump",{shadows:this.shadows})};const n=e.split(":")[2]||null;return{obstacle:CS(t.variant,{shadows:this.shadows,driverKind:n})}}_spawn(t){const{ev:e}=t,n=this._poolKey(e);let s=this.pool.get(n);s||this.pool.set(n,s=[]);const r=s.pop()||this._build(e,n),o=(r.enemy||r.wall||r.obstacle).root;o.visible=!0,r.enemy&&r.enemy.reset(),r.wall&&r.wall.setOpen(0);const a=this._entPool.pop()||this._newEnt();return a.ev=e,a.key=n,a.obj=r,a.root=o,a.off=t.off,a.approach=t.approach,a.lat=t.lat,a.phase=mn(e.id,5)*10,a.hitTime=-1,a.sHit=0,a.latHit=0,a.tumble=0,a.roll=0,a.drift=0,a.bounced=!1,a.passed=!1,a._i=this.list.length,this.list.push(a),this.active.set(e.id,a),a}_release(t){t.root.visible=!1,this.active.delete(t.ev.id);const e=this.list.pop();e!==t&&(this.list[t._i]=e,e._i=t._i),t._i=-1;let n=this.pool.get(t.key);n||this.pool.set(t.key,n=[]),n.push(t.obj),t.obj=null,t.ev=null,this._entPool.push(t)}sOf(t,e){return this.speed*t.ev.t+t.off+t.approach*(t.ev.t-e)}get(t){return this.active.get(t)||null}worldPos(t,e=new P){const n=this.active.get(t);if(!n)return null;const s=n.ev.type==="punch"?1.4:1;return e.setFromMatrixPosition(n.root.matrix).add(XS.set(0,s,0))}hit(t,e){const n=this.active.get(t);if(!n||n.hitTime>=0||n.ev.type!=="punch")return!1;n.hitTime=e,n.sHit=this.sOf(n,e),n.latHit=n.lat,n.tumble=(2+mn(n.ev.id,9)*2)*Math.PI,n.roll=(mn(n.ev.id,11)-.5)*1.6,n.drift=(mn(n.ev.id,13)-.5)*3;const s=this.worldPos(t,WS);return s&&this.effects&&this.effects.burst("punch",s,26),!0}update(t,e){if(t<this.lastTime-.001||t-this.lastTime>2)for(this._releaseAll(),this.cursor=0;this.cursor<this.order.length&&this.order[this.cursor].ev.t+1.2<t;)this.cursor++;for(this.lastTime=t;this.cursor<this.order.length&&this.order[this.cursor].spawn<=t;){const n=this.order[this.cursor++];n.ev.t+1.2<t||this.active.has(n.ev.id)||this._spawn(n)}for(let n=0;n<this.emitters.length;n++)this._emitPool.push(this.emitters[n]);this.emitters.length=0;for(let n=this.list.length-1;n>=0;n--){const s=this.list[n],r=s.ev;if(s.hitTime>=0){if(t-s.hitTime>Qc){this._release(s);continue}this._placeLaunched(s,t),s.obj.enemy.update(t,s.phase,!0);continue}if(t>r.t+1.2){this._release(s);continue}const o=this.sOf(s,t);if(this.track.matrix(o,s.lat,0,0,1,s.root.matrix),s.root.matrixWorldNeedsUpdate=!0,s.obj.enemy)s.obj.enemy.update(t,s.phase,!1);else if(s.obj.wall)s.obj.wall.setOpen((t-(r.t-.32))/.26),!s.passed&&t>=r.t&&(s.passed=!0,this.effects&&this.effects.burst("pose",this.track.point(e+1.5,0,1.3,$a),30));else if(s.obj.obstacle){const a=s.obj.obstacle;if(a.update(t+s.phase),a.flames.length||a.toxic.length){s.root.updateMatrixWorld(!0);for(let l=0;l<a.flames.length;l++){const c=a.flames[l];this._emit($a.copy(c.local).applyMatrix4(c.obj.matrixWorld),"fire")}for(let l=0;l<a.toxic.length;l++)this._emit($a.copy(a.toxic[l]).applyMatrix4(s.root.matrix),"toxic")}}}}_emit(t,e){const n=this._emitPool.pop()||{pos:new P,type:e};n.pos.copy(t),n.type=e,this.emitters.push(n)}_placeLaunched(t,e){const n=e-t.hitTime,s=t.sHit+(this.speed+GS)*n;let r;if(n<ar)r=Sl*n-.5*wl*n*n;else if(n<ar+eu){const u=n-ar;r=Sl*nm*u-.5*wl*u*u,t.bounced||(t.bounced=!0,this.effects&&this.effects.burst("dust",this.track.point(s,t.latHit,.2,$a),14))}else r=0;const o=t.latHit+t.drift*Math.min(n,ar),a=Math.max(0,Math.min(1,(Qc-n)/.35));this.track.matrix(s,o,Math.max(0,r),0,Math.max(.001,a),t.root.matrix),t.root.matrixWorldNeedsUpdate=!0;const l=t.obj.enemy.spin,c=Math.min(1,n/(ar+eu*.8)),h=1-Math.pow(1-c,2);l.rotation.set(-t.tumble*h,t.roll*h*.5,t.roll*h)}}const Vi="#1A0B2E",$S={jump:"JUMP!",duck:"DUCK!",left:"LEFT!",right:"RIGHT!",punch:"PUNCH!",pose:"MIRROR ME!"},YS={jump:"#FFFFFF",duck:"#FFFFFF",left:"#FFFFFF",right:"#FFFFFF",punch:"#FFFFFF",pose:"#FFFFFF"},jS={jump:"#FFB21E",duck:"#59FF6A",left:"#4FD8FF",right:"#4FD8FF",punch:"#FF5A3C",pose:"#E6FF00"},Oe=(i,t=0,e=1)=>Math.max(t,Math.min(e,i)),Ip=i=>1+2.9*Math.pow(i-1,3)+1.9*Math.pow(i-1,2),Ya=i=>i<=0?0:i>=1?1:Math.pow(2,-10*i)*Math.sin((i*10-.75)*(2*Math.PI)/3)+1,dn=(i,t)=>{const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};class KS{constructor(t){this.r=t,this.popups=[],this.flashAt=-10,this._sig=new Float64Array(11).fill(NaN),this._seg=null,this._mark="",this._wasAnimated=!0}get ctx(){return this.r.hudCtx}popup(t,e,n,s=!1){this.popups.push({text:t,color:e,t0:n,big:s}),this.popups.length>6&&this.popups.shift()}flash(t){this.flashAt=t}clearTransient(){this.popups.length=0,this.flashAt=-10}text(t,e,n,s,r,o={}){const a=this.ctx;let l=s;if(a.font=`${l}px ${o.font||To}`,o.maxW){const h=a.measureText(t).width;h>o.maxW&&(l*=o.maxW/h,a.font=`${l}px ${o.font||To}`)}a.textAlign=o.align||"center",a.textBaseline="middle",a.lineJoin="round",a.miterLimit=2;const c=(o.lw??.2)*l;if(o.shadow!==!1){a.fillStyle="rgba(10,2,20,0.55)",a.strokeStyle="rgba(10,2,20,0.55)",a.lineWidth=c;const h=(o.shadowD??.07)*l;a.strokeText(t,e+h*.4,n+h),a.fillText(t,e+h*.4,n+h)}if(a.strokeStyle=o.stroke||Vi,a.lineWidth=c,a.strokeText(t,e,n),o.gradient){const h=a.createLinearGradient(0,n-l*.45,0,n+l*.45);h.addColorStop(0,o.gradient[0]),h.addColorStop(1,o.gradient[1]),a.fillStyle=h}else a.fillStyle=r;return a.fillText(t,e,n),o.gloss&&(a.save(),a.beginPath(),a.rect(e-4e3,n-l,8e3,l*.62),a.clip(),a.globalAlpha=.25,a.fillStyle="#FFFFFF",a.fillText(t,e,n),a.restore()),l}jack(t,e,n,s=1){const r=this.ctx;r.save(),r.translate(t,e),r.fillStyle="#2E5A18",r.strokeStyle=Vi,r.lineWidth=n*.16,bs(r,-n*.14,-n*1.12,n*.28,n*.42,n*.08),r.stroke(),r.fill(),r.beginPath(),r.ellipse(0,0,n*1.12,n*.92,0,0,Math.PI*2),r.stroke();const o=r.createRadialGradient(-n*.3,-n*.3,n*.1,0,0,n*1.1);o.addColorStop(0,"#FF9A3A"),o.addColorStop(1,"#E04A00"),r.fillStyle=o,r.fill(),r.strokeStyle="rgba(120,30,0,0.45)",r.lineWidth=n*.07;for(const a of[-.5,.5])r.beginPath(),r.ellipse(a*n*.5,0,n*.35,n*.88,0,0,Math.PI*2),r.stroke();r.fillStyle=s>.5?"#FFE600":"#3A1400",r.beginPath(),r.moveTo(-n*.62,-n*.08),r.lineTo(-n*.2,-n*.08),r.lineTo(-n*.41,-n*.48),r.closePath(),r.moveTo(n*.62,-n*.08),r.lineTo(n*.2,-n*.08),r.lineTo(n*.41,-n*.48),r.closePath(),r.moveTo(-n*.66,n*.18),r.lineTo(-n*.4,n*.32),r.lineTo(-n*.2,n*.2),r.lineTo(0,n*.34),r.lineTo(n*.2,n*.2),r.lineTo(n*.4,n*.32),r.lineTo(n*.66,n*.18),r.quadraticCurveTo(n*.4,n*.7,0,n*.68),r.quadraticCurveTo(-n*.4,n*.7,-n*.66,n*.18),r.fill(),r.restore()}ghost(t,e,n,s=1,r=0){const o=this.ctx;o.save(),o.globalAlpha=s,o.translate(t,e),o.rotate(Math.sin(r*2)*.12),o.fillStyle="#F6F2FF",o.strokeStyle=Vi,o.lineWidth=n*.12,o.beginPath(),o.arc(0,-n*.2,n,Math.PI,0),o.lineTo(n,n*.9);for(let a=0;a<4;a++){const l=n-(a+.5)*(n/2);o.quadraticCurveTo(l,n*(.6+.25*Math.sin(r*6+a)),n-(a+1)*(n/2),n*.9)}o.closePath(),o.stroke(),o.fill(),o.fillStyle=Vi,o.beginPath(),o.ellipse(-n*.35,-n*.25,n*.14,n*.2,0,0,Math.PI*2),o.ellipse(n*.35,-n*.25,n*.14,n*.2,0,0,Math.PI*2),o.fill(),o.beginPath(),o.ellipse(0,n*.15,n*.16,n*.2,0,0,Math.PI*2),o.fill(),o.restore()}star(t,e,n,s,r=0,o=1){const a=this.ctx;a.save(),a.globalAlpha=o,a.translate(t,e),a.rotate(r),a.beginPath();for(let l=0;l<10;l++){const c=l/10*Math.PI*2-Math.PI/2,h=l%2?n*.45:n;l?a.lineTo(Math.cos(c)*h,Math.sin(c)*h):a.moveTo(Math.cos(c)*h,Math.sin(c)*h)}a.closePath(),a.lineJoin="round",a.strokeStyle=Vi,a.lineWidth=n*.18,a.stroke(),a.fillStyle=s,a.fill(),a.restore()}arrow(t,e,n,s,r,o){const a=this.ctx;a.save(),a.translate(t,e);const l={up:-Math.PI/2,down:Math.PI/2,left:Math.PI,right:0}[s]||0;a.rotate(l);const c=Math.sin(o*12)*n*.08;a.translate(c,0);const h=n;a.beginPath(),a.moveTo(-h*.55,-h*.2),a.lineTo(0,-h*.2),a.lineTo(0,-h*.5),a.lineTo(h*.6,0),a.lineTo(0,h*.5),a.lineTo(0,h*.2),a.lineTo(-h*.55,h*.2),a.closePath(),a.lineJoin="round",a.fillStyle="rgba(10,2,20,0.5)",a.save(),a.translate(0,h*.06),a.fill(),a.restore(),a.strokeStyle=Vi,a.lineWidth=h*.14,a.stroke(),a.fillStyle=r,a.fill(),a.restore()}burstShape(t,e,n,s,r){const o=this.ctx;o.save(),o.translate(t,e),o.rotate(r*.8),o.beginPath();const a=14;for(let l=0;l<a*2;l++){const c=l/(a*2)*Math.PI*2,h=l%2?n*.72:n;l?o.lineTo(Math.cos(c)*h,Math.sin(c)*h*.62):o.moveTo(Math.cos(c)*h,Math.sin(c)*h*.62)}o.closePath(),o.strokeStyle=Vi,o.lineWidth=n*.06,o.stroke(),o.fillStyle=s,o.fill(),o.restore()}draw(t){const e=this.r.hudCanvas,n=this.ctx,s=e.width,r=e.height,o=t.seg,a=t.time,l=a>=this.flashAt&&a-this.flashAt<=.5,c=!t.hidden&&(this.popups.length>0||l||t.prompts.length>0||o&&(o.kind!=="round"||t.segT<=2.65)),h=s*.88,u=Math.round(Oe(t.roundFrac)*h)/h,d=this._sig,f=t.watermark||"",p=c||this._wasAnimated||o!==this._seg||f!==this._mark||d[0]!==(t.hidden?1:0)||d[1]!==s||d[2]!==r||d[3]!==u||d[4]!==(t.showStats?1:0)||d[5]!==t.score||d[6]!==t.lives||d[7]!==t.maxLives||d[8]!==(t.showStats?Math.floor(t.distance):-1);if(this._wasAnimated=c,this.r.hudBlank=!!t.hidden,!!p&&(this.r.hudDirty=!0,this._seg=o,this._mark=f,d[0]=t.hidden?1:0,d[1]=s,d[2]=r,d[3]=u,d[4]=t.showStats?1:0,d[5]=t.score,d[6]=t.lives,d[7]=t.maxLives,d[8]=t.showStats?Math.floor(t.distance):-1,this.W=s,this.H=r,this.S=Math.min(s,r)/1080,n.clearRect(0,0,s,r),!t.hidden)){if(t.flashOnly){this._flash(a);return}if(o)if(o.kind==="round"){this._progress(u),this._banner(o,t.segT);for(let _=0;_<t.prompts.length;_++)this._prompt(t.prompts[_],a)}else o.kind==="title"?this._title(o,t.segT):o.kind==="countdown"?this._countdown(t.segT,o.duration):o.kind==="card"?this._card(o,t.segT):o.kind==="outro"&&this._outro(o,t.segT);t.showStats&&this._stats(t),this._popups(a),this._flash(a),t.watermark&&this._watermark(t.watermark)}}_progress(t){const{ctx:e,W:n,H:s,S:r}=this,o=n*.06,a=n*.94,l=s*.05,c=Math.max(10,30*r),h=a-o;e.save(),e.fillStyle=Vi,bs(e,o-c*.18,l-c/2-c*.18,h+c*.36,c*1.36,c),e.fill(),e.fillStyle="#2B2B30",bs(e,o,l-c/2,h,c,c/2),e.fill();const u=Oe(t);if(u>.002){const f=Math.max(c,h*u),p=e.createLinearGradient(o,0,o+f,0);p.addColorStop(0,"#FF5500"),p.addColorStop(1,"#FF8800"),e.fillStyle=p,bs(e,o,l-c/2,f,c,c/2),e.fill(),e.fillStyle="rgba(255,255,255,0.28)",bs(e,o+c*.3,l-c*.36,Math.max(0,f-c*.6),c*.22,c*.11),e.fill()}e.restore();const d=c*1.15;this.jack(o+h*u,l+d*.05,d,1)}_banner(t,e){if(e>2.6)return;const{W:s,H:r,S:o}=this,a=Oe(e/.35),l=Oe((2.6-e)/.35),c=Ip(a),h=Math.min(1,l),u=this.ctx;u.save(),u.globalAlpha=h,u.translate(s/2,r*.14),u.scale(c,c),this.text(t.round.label,0,-60*o,54*o,"#FFE600",{maxW:s*.8}),this.text(t.round.title,0,22*o,104*o,"#FFFFFF",{maxW:s*.88,gradient:["#FFFFFF","#FFD9A0"]}),u.restore()}_prompt(t,e){const{ctx:n,W:s,H:r,S:o}=this,a=e-t.start,l=t.end-e;if(a<0||l<0)return;const c=Ya(Oe(a/.45)),h=Oe(l/.15),u=r*.25;n.save(),n.globalAlpha=h,n.translate(s/2,u);const d=.2+.8*c;n.scale(d,d);const f=jS[t.type]||"#FFB21E",p=170*o;t.type==="punch"&&this.burstShape(0,0,300*o,"#FF3A1A",e);const _=$S[t.type]||t.type.toUpperCase(),g=this.text(_,0,0,p,YS[t.type]||"#FFFFFF",{maxW:s*.78,gloss:!0,lw:.22});n.font=`${g}px ${To}`;const m=n.measureText(_).width/2,M=150*o;if(t.type==="jump")this.arrow(0,165*o,M,"up",f,e);else if(t.type==="duck")this.arrow(0,165*o,M,"down",f,e);else if(t.type==="left")this.arrow(-m-M*.8,0,M,"left",f,e);else if(t.type==="right")this.arrow(m+M*.8,0,M,"right",f,e);else if(t.type==="pose"){const x=DS[t.variant]||"COPY THE POSE";this.text(x,0,140*o,78*o,f,{maxW:s*.8})}n.restore()}_decor(t,e,n){const{W:s,H:r,S:o}=this;for(let a=0;a<e;a++){const l=a%3,c=.05+dn(a,1)*.08,h=(dn(a,2)*1.2-.1+Math.sin(t*.7+a)*.03)*s,u=(1.1-(dn(a,3)+t*c)%1.25)*r|0,d=(26+dn(a,4)*40)*o;l===0?this.ghost(h,u,d,.9*n,t+a):l===1?this.star(h,u,d*.8,dn(a,5)>.5?"#FFE600":"#FFB21E",t*(dn(a,6)-.5)*3,n):(this.ctx.save(),this.ctx.globalAlpha=n,this.jack(h,u,d*.75,1),this.ctx.restore())}}_speedLines(t,e){const{ctx:n,W:s,H:r}=this;n.save(),n.globalAlpha=e*.35,n.strokeStyle="#FFFFFF",n.lineCap="round";const o=s/2,a=r*.45,l=Math.hypot(s,r)*.6;for(let c=0;c<40;c++){const h=dn(c,8)*Math.PI*2,u=(dn(c,9)+t*(.6+dn(c,10)))%1,d=l*(.35+u*.7),f=d+l*.12;n.lineWidth=3+dn(c,11)*5,n.beginPath(),n.moveTo(o+Math.cos(h)*d,a+Math.sin(h)*d),n.lineTo(o+Math.cos(h)*f,a+Math.sin(h)*f),n.stroke()}n.restore()}_bigWord(t,e,n,s,r,o,a){const{ctx:l,W:c}=this,h=e-n;if(h<0||e>s)return;const u=Ya(Oe(h/.6)),d=Oe((s-e)/.25),f=1+Math.sin(e*5)*.025;l.save(),l.globalAlpha=d,l.translate(c/2,r),l.rotate(Math.sin(e*3)*.03);const p=Math.max(.01,u*f*(.6+.4*d));l.scale(p,p),this.text(t,0,0,o,"#FFFFFF",{maxW:c*.9,gradient:a,gloss:!0,lw:.2}),l.restore()}_card(t,e){const{H:n,S:s}=this,r=t.duration,o=Oe(Math.min(e/.3,(r-e)/.3));this._dim(.25*o),this._speedLines(e,o),this._decor(e,14,o);const a=r*.48,l=t.texts||["EXCELLENT!","NEXT LEVEL"];if(this._bigWord(l[0],e,0,a,n*.42,190*s,["#FFE94A","#FF8A00"]),this._bigWord(l[1]||"",e,a,r,n*.38,170*s,["#FFFFFF","#C9A0FF"]),t.next&&e>a+.2){const c=e-a-.2,h=this.ctx;h.save(),h.globalAlpha=Oe(c/.3)*Oe((r-e)/.25),this.text(`${t.next.label} · ${t.next.title}`,this.W/2,n*.55,70*s,"#FFE600",{maxW:this.W*.86}),h.restore()}}_dim(t){if(t<=0)return;const{ctx:e,W:n,H:s}=this;e.fillStyle=`rgba(20,4,40,${t})`,e.fillRect(0,0,n,s)}_title(t,e){const{W:n,H:s,S:r,ctx:o}=this,a=t.duration,l=Oe(Math.min(e/.3,(a-e)/.3));this._dim(.3*l),this._decor(e+3,10,l);const c=Ya(Oe(e/.8));o.save(),o.globalAlpha=l,o.translate(n/2,s*.38),o.rotate(Math.sin(e*2.2)*.025),o.scale(c,c),this.jack(0,-190*r,90*r,1),this.text(t.text,0,0,200*r,"#FFFFFF",{maxW:n*.92,gradient:["#FFB21E","#FF5500"],gloss:!0,lw:.2}),o.restore(),t.sub&&e>.6&&(o.save(),o.globalAlpha=l*Oe((e-.6)/.3),this.text(t.sub,n/2,s*.52,74*r,"#E9D6FF",{maxW:n*.8}),o.restore())}_countdown(t,e){const{W:n,H:s,S:r,ctx:o}=this,a=e/4,l=Math.min(3,Math.floor(t/a)),c=t-l*a,h=["3","2","1","GO!"][l],u=[["#FFFFFF","#FFB21E"],["#FFFFFF","#FF8A00"],["#FFFFFF","#FF5500"],["#B6FF3A","#2EC40A"]],d=Ya(Oe(c/.5)),f=l===3?Oe((a-c)/.25):1;o.save(),o.globalAlpha=f,o.translate(n/2,s*.4);const p=Math.max(.01,d*(1+c*.15));o.scale(p,p),o.beginPath(),o.arc(0,0,170*r,0,Math.PI*2),o.fillStyle="rgba(26,11,46,0.55)",o.fill(),o.lineWidth=14*r,o.strokeStyle="#FF8A00",o.beginPath(),o.arc(0,0,170*r,-Math.PI/2,-Math.PI/2+Math.PI*2*(1-c/a)),o.stroke(),this.text(h,0,8*r,(l===3?190:240)*r,"#FFFFFF",{gradient:u[l],gloss:!0,maxW:n*.8}),o.restore()}_outro(t,e){const{W:n,H:s,S:r,ctx:o}=this,a=t.duration,l=Oe(Math.min(e/.3,(a-e)/.3));this._dim(.3*l),this._speedLines(e,l*.7),this._decor(e+7,18,l);for(let c=0;c<30;c++){const h=dn(c,21)*n,u=(dn(c,22)+e*(.15+dn(c,23)*.2))%1.1*s-s*.05;this.star(h,u,(10+dn(c,24)*14)*r,["#FFE600","#FF8A00","#C9A0FF","#59FF6A"][c%4],e*3+c,l)}this._bigWord(t.text,e,0,a,s*.4,180*r,["#FFE94A","#FF7A00"]),t.sub&&e>.5&&(o.save(),o.globalAlpha=l*Oe((e-.5)/.3),this.text(t.sub,n/2,s*.55,72*r,"#FFFFFF",{maxW:n*.86}),o.restore())}_stats(t){const{W:e,H:n,S:s,ctx:r}=this,o=n*.05+70*s;this.text(`SCORE ${t.score}`,e*.06,o,52*s,"#FFFFFF",{align:"left",lw:.22}),this.text(`${Math.floor(t.distance)} m`,e*.06,o+56*s,38*s,"#FFE600",{align:"left"});for(let a=0;a<t.maxLives;a++){const l=e*.94-a*70*s-26*s;r.save(),r.globalAlpha=a<t.lives?1:.3,this.jack(l,o+4*s,26*s,a<t.lives?1:0),r.restore()}}_popups(t){const{W:e,H:n,S:s,ctx:r}=this;for(let o=this.popups.length-1;o>=0;o--){const a=this.popups[o],l=t-a.t0;if(l>1||l<-.01){this.popups.splice(o,1);continue}const c=Ip(Oe(l/.25));r.save(),r.globalAlpha=Oe((1-l)/.3),r.translate(e/2,n*(a.big?.44:.5)-l*90*s),r.scale(c,c),this.text(a.text,0,0,(a.big?110:70)*s,a.color,{maxW:e*.8}),r.restore()}}_flash(t){const e=t-this.flashAt;if(e<0||e>.5)return;const{ctx:n,W:s,H:r}=this,o=(1-e/.5)*.55,a=n.createRadialGradient(s/2,r/2,Math.min(s,r)*.2,s/2,r/2,Math.hypot(s,r)*.6);a.addColorStop(0,`rgba(255,20,30,${o*.4})`),a.addColorStop(1,`rgba(255,0,20,${o})`),n.fillStyle=a,n.fillRect(0,0,s,r)}_watermark(t){const{W:e,H:n,S:s,ctx:r}=this;r.save(),r.globalAlpha=.6,this.text(t,e-28*s,n-30*s,34*s,"#FFFFFF",{align:"right",lw:.18,shadow:!1}),r.restore()}}var Xu=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)},U=(i,t,e)=>(Xu(i,t,"read from private field"),e?e.call(i):t.get(i)),se=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},Ye=(i,t,e,n)=>(Xu(i,t,"write to private field"),t.set(i,e),e),JS=(i,t,e,n)=>({set _(s){Ye(i,t,s)},get _(){return U(i,t,n)}}),ce=(i,t,e)=>(Xu(i,t,"access private method"),e),de=new Uint8Array(8),si=new DataView(de.buffer),ze=i=>[(i%256+256)%256],ve=i=>(si.setUint16(0,i,!1),[de[0],de[1]]),ZS=i=>(si.setInt16(0,i,!1),[de[0],de[1]]),im=i=>(si.setUint32(0,i,!1),[de[1],de[2],de[3]]),yt=i=>(si.setUint32(0,i,!1),[de[0],de[1],de[2],de[3]]),QS=i=>(si.setInt32(0,i,!1),[de[0],de[1],de[2],de[3]]),Os=i=>(si.setUint32(0,Math.floor(i/2**32),!1),si.setUint32(4,i,!1),[de[0],de[1],de[2],de[3],de[4],de[5],de[6],de[7]]),qu=i=>(si.setInt16(0,2**8*i,!1),[de[0],de[1]]),jn=i=>(si.setInt32(0,2**16*i,!1),[de[0],de[1],de[2],de[3]]),eh=i=>(si.setInt32(0,2**30*i,!1),[de[0],de[1],de[2],de[3]]),Cn=(i,t=!1)=>{let e=Array(i.length).fill(null).map((n,s)=>i.charCodeAt(s));return t&&e.push(0),e},El=i=>i&&i[i.length-1],$u=i=>{let t;for(let e of i)(!t||e.presentationTimestamp>t.presentationTimestamp)&&(t=e);return t},ti=(i,t,e=!0)=>{let n=i*t;return e?Math.round(n):n},sm=i=>{let t=i*(Math.PI/180),e=Math.cos(t),n=Math.sin(t);return[e,n,0,-n,e,0,0,0,1]},rm=sm(0),om=i=>[jn(i[0]),jn(i[1]),eh(i[2]),jn(i[3]),jn(i[4]),eh(i[5]),jn(i[6]),jn(i[7]),eh(i[8])],Co=i=>!i||typeof i!="object"?i:Array.isArray(i)?i.map(Co):Object.fromEntries(Object.entries(i).map(([t,e])=>[t,Co(e)])),Ur=i=>i>=0&&i<2**32,ke=(i,t,e)=>({type:i,contents:t&&new Uint8Array(t.flat(10)),children:e}),Fe=(i,t,e,n,s)=>ke(i,[ze(t),im(e),n??[]],s),t2=i=>{let t=512;return i.fragmented?ke("ftyp",[Cn("iso5"),yt(t),Cn("iso5"),Cn("iso6"),Cn("mp41")]):ke("ftyp",[Cn("isom"),yt(t),Cn("isom"),i.holdsAvc?Cn("avc1"):[],Cn("mp41")])},nu=i=>({type:"mdat",largeSize:i}),e2=i=>({type:"free",size:i}),il=(i,t,e=!1)=>ke("moov",null,[n2(t,i),...i.map(n=>i2(n,t)),e?I2(i):null]),n2=(i,t)=>{let e=ti(Math.max(0,...t.filter(o=>o.samples.length>0).map(o=>{const a=$u(o.samples);return a.presentationTimestamp+a.duration})),ru),n=Math.max(...t.map(o=>o.id))+1,s=!Ur(i)||!Ur(e),r=s?Os:yt;return Fe("mvhd",+s,0,[r(i),r(i),yt(ru),r(e),jn(1),qu(1),Array(10).fill(0),om(rm),Array(24).fill(0),yt(n)])},i2=(i,t)=>ke("trak",null,[s2(i,t),r2(i,t)]),s2=(i,t)=>{let e=$u(i.samples),n=ti(e?e.presentationTimestamp+e.duration:0,ru),s=!Ur(t)||!Ur(n),r=s?Os:yt,o;return i.info.type==="video"?o=typeof i.info.rotation=="number"?sm(i.info.rotation):i.info.rotation:o=rm,Fe("tkhd",+s,3,[r(t),r(t),yt(i.id),yt(0),r(n),Array(8).fill(0),ve(0),ve(0),qu(i.info.type==="audio"?1:0),ve(0),om(o),jn(i.info.type==="video"?i.info.width:0),jn(i.info.type==="video"?i.info.height:0)])},r2=(i,t)=>ke("mdia",null,[o2(i,t),a2(i.info.type==="video"?"vide":"soun"),l2(i)]),o2=(i,t)=>{let e=$u(i.samples),n=ti(e?e.presentationTimestamp+e.duration:0,i.timescale),s=!Ur(t)||!Ur(n),r=s?Os:yt;return Fe("mdhd",+s,0,[r(t),r(t),yt(i.timescale),r(n),ve(21956),ve(0)])},a2=i=>Fe("hdlr",0,0,[Cn("mhlr"),Cn(i),yt(0),yt(0),yt(0),Cn("mp4-muxer-hdlr",!0)]),l2=i=>ke("minf",null,[i.info.type==="video"?c2():h2(),u2(),p2(i)]),c2=()=>Fe("vmhd",0,1,[ve(0),ve(0),ve(0),ve(0)]),h2=()=>Fe("smhd",0,0,[ve(0),ve(0)]),u2=()=>ke("dinf",null,[d2()]),d2=()=>Fe("dref",0,0,[yt(1)],[f2()]),f2=()=>Fe("url ",0,1),p2=i=>{const t=i.compositionTimeOffsetTable.length>1||i.compositionTimeOffsetTable.some(e=>e.sampleCompositionTimeOffset!==0);return ke("stbl",null,[m2(i),C2(i),R2(i),P2(i),F2(i),D2(i),t?L2(i):null])},m2=i=>Fe("stsd",0,0,[yt(1)],[i.info.type==="video"?g2(W2[i.info.codec],i):E2(q2[i.info.codec],i)]),g2=(i,t)=>ke(i,[Array(6).fill(0),ve(1),ve(0),ve(0),Array(12).fill(0),ve(t.info.width),ve(t.info.height),yt(4718592),yt(4718592),yt(0),ve(1),Array(32).fill(0),ve(24),ZS(65535)],[X2[t.info.codec](t),t.info.decoderConfig.colorSpace?y2(t):null]),_2={bt709:1,bt470bg:5,smpte170m:6},v2={bt709:1,smpte170m:6,"iec61966-2-1":13},x2={rgb:0,bt709:1,bt470bg:5,smpte170m:6},y2=i=>ke("colr",[Cn("nclx"),ve(_2[i.info.decoderConfig.colorSpace.primaries]),ve(v2[i.info.decoderConfig.colorSpace.transfer]),ve(x2[i.info.decoderConfig.colorSpace.matrix]),ze((i.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),M2=i=>i.info.decoderConfig&&ke("avcC",[...new Uint8Array(i.info.decoderConfig.description)]),b2=i=>i.info.decoderConfig&&ke("hvcC",[...new Uint8Array(i.info.decoderConfig.description)]),S2=i=>{if(!i.info.decoderConfig)return null;let t=i.info.decoderConfig;if(!t.colorSpace)throw new Error("'colorSpace' is required in the decoder config for VP9.");let e=t.codec.split("."),n=Number(e[1]),s=Number(e[2]),a=(Number(e[3])<<4)+(0<<1)+Number(t.colorSpace.fullRange);return Fe("vpcC",1,0,[ze(n),ze(s),ze(a),ze(2),ze(2),ze(2),ve(0)])},w2=()=>{let e=(1<<7)+1;return ke("av1C",[e,0,0,0])},E2=(i,t)=>ke(i,[Array(6).fill(0),ve(1),ve(0),ve(0),yt(0),ve(t.info.numberOfChannels),ve(16),ve(0),ve(0),jn(t.info.sampleRate)],[$2[t.info.codec](t)]),T2=i=>{let t=new Uint8Array(i.info.decoderConfig.description);return Fe("esds",0,0,[yt(58753152),ze(32+t.byteLength),ve(1),ze(0),yt(75530368),ze(18+t.byteLength),ze(64),ze(21),im(0),yt(130071),yt(130071),yt(92307584),ze(t.byteLength),...t,yt(109084800),ze(1),ze(2)])},A2=i=>{var s;let t=3840,e=0;const n=(s=i.info.decoderConfig)==null?void 0:s.description;if(n){if(n.byteLength<18)throw new TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");const r=ArrayBuffer.isView(n)?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(n);t=r.getUint16(10,!0),e=r.getInt16(14,!0)}return ke("dOps",[ze(0),ze(i.info.numberOfChannels),ve(t),yt(i.info.sampleRate),qu(e),ze(0)])},C2=i=>Fe("stts",0,0,[yt(i.timeToSampleTable.length),i.timeToSampleTable.map(t=>[yt(t.sampleCount),yt(t.sampleDelta)])]),R2=i=>{if(i.samples.every(e=>e.type==="key"))return null;let t=[...i.samples.entries()].filter(([,e])=>e.type==="key");return Fe("stss",0,0,[yt(t.length),t.map(([e])=>yt(e+1))])},P2=i=>Fe("stsc",0,0,[yt(i.compactlyCodedChunkTable.length),i.compactlyCodedChunkTable.map(t=>[yt(t.firstChunk),yt(t.samplesPerChunk),yt(1)])]),F2=i=>Fe("stsz",0,0,[yt(0),yt(i.samples.length),i.samples.map(t=>yt(t.size))]),D2=i=>i.finalizedChunks.length>0&&El(i.finalizedChunks).offset>=2**32?Fe("co64",0,0,[yt(i.finalizedChunks.length),i.finalizedChunks.map(t=>Os(t.offset))]):Fe("stco",0,0,[yt(i.finalizedChunks.length),i.finalizedChunks.map(t=>yt(t.offset))]),L2=i=>Fe("ctts",0,0,[yt(i.compositionTimeOffsetTable.length),i.compositionTimeOffsetTable.map(t=>[yt(t.sampleCount),yt(t.sampleCompositionTimeOffset)])]),I2=i=>ke("mvex",null,i.map(U2)),U2=i=>Fe("trex",0,0,[yt(i.id),yt(1),yt(0),yt(0),yt(0)]),Up=(i,t)=>ke("moof",null,[N2(i),...t.map(O2)]),N2=i=>Fe("mfhd",0,0,[yt(i)]),am=i=>{let t=0,e=0,n=0,s=0,r=i.type==="delta";return e|=+r,r?t|=1:t|=2,t<<24|e<<16|n<<8|s},O2=i=>ke("traf",null,[B2(i),k2(i),z2(i)]),B2=i=>{let t=0;t|=8,t|=16,t|=32,t|=131072;let e=i.currentChunk.samples[1]??i.currentChunk.samples[0],n={duration:e.timescaleUnitsToNextSample,size:e.size,flags:am(e)};return Fe("tfhd",0,t,[yt(i.id),yt(n.duration),yt(n.size),yt(n.flags)])},k2=i=>Fe("tfdt",1,0,[Os(ti(i.currentChunk.startTimestamp,i.timescale))]),z2=i=>{let t=i.currentChunk.samples.map(_=>_.timescaleUnitsToNextSample),e=i.currentChunk.samples.map(_=>_.size),n=i.currentChunk.samples.map(am),s=i.currentChunk.samples.map(_=>ti(_.presentationTimestamp-_.decodeTimestamp,i.timescale)),r=new Set(t),o=new Set(e),a=new Set(n),l=new Set(s),c=a.size===2&&n[0]!==n[1],h=r.size>1,u=o.size>1,d=!c&&a.size>1,f=l.size>1||[...l].some(_=>_!==0),p=0;return p|=1,p|=4*+c,p|=256*+h,p|=512*+u,p|=1024*+d,p|=2048*+f,Fe("trun",1,p,[yt(i.currentChunk.samples.length),yt(i.currentChunk.offset-i.currentChunk.moofOffset||0),c?yt(n[0]):[],i.currentChunk.samples.map((_,g)=>[h?yt(t[g]):[],u?yt(e[g]):[],d?yt(n[g]):[],f?QS(s[g]):[]])])},V2=i=>ke("mfra",null,[...i.map(H2),G2()]),H2=(i,t)=>Fe("tfra",1,0,[yt(i.id),yt(63),yt(i.finalizedChunks.length),i.finalizedChunks.map(n=>[Os(ti(n.startTimestamp,i.timescale)),Os(n.moofOffset),yt(t+1),yt(1),yt(1)])]),G2=()=>Fe("mfro",0,0,[yt(0)]),W2={avc:"avc1",hevc:"hvc1",vp9:"vp09",av1:"av01"},X2={avc:M2,hevc:b2,vp9:S2,av1:w2},q2={aac:"mp4a",opus:"Opus"},$2={aac:T2,opus:A2},Kl=class{},Y2=class extends Kl{constructor(){super(...arguments),this.buffer=null}},Yu=class extends Kl{constructor(t){if(super(),this.options=t,typeof t!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(t.onData){if(typeof t.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(t.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(t.chunked!==void 0&&typeof t.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},j2=class extends Kl{constructor(t,e){if(super(),this.stream=t,this.options=e,!(t instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},fs,lr,lm=class{constructor(){this.pos=0,se(this,fs,new Uint8Array(8)),se(this,lr,new DataView(U(this,fs).buffer)),this.offsets=new WeakMap}seek(t){this.pos=t}writeU32(t){U(this,lr).setUint32(0,t,!1),this.write(U(this,fs).subarray(0,4))}writeU64(t){U(this,lr).setUint32(0,Math.floor(t/2**32),!1),U(this,lr).setUint32(4,t,!1),this.write(U(this,fs).subarray(0,8))}writeAscii(t){for(let e=0;e<t.length;e++)U(this,lr).setUint8(e%8,t.charCodeAt(e)),e%8===7&&this.write(U(this,fs));t.length%8!==0&&this.write(U(this,fs).subarray(0,t.length%8))}writeBox(t){if(this.offsets.set(t,this.pos),t.contents&&!t.children)this.writeBoxHeader(t,t.size??t.contents.byteLength+8),this.write(t.contents);else{let e=this.pos;if(this.writeBoxHeader(t,0),t.contents&&this.write(t.contents),t.children)for(let r of t.children)r&&this.writeBox(r);let n=this.pos,s=t.size??n-e;this.seek(e),this.writeBoxHeader(t,s),this.seek(n)}}writeBoxHeader(t,e){this.writeU32(t.largeSize?1:e),this.writeAscii(t.type),t.largeSize&&this.writeU64(e)}measureBoxHeader(t){return 8+(t.largeSize?8:0)}patchBox(t){let e=this.pos;this.seek(this.offsets.get(t)),this.writeBox(t),this.seek(e)}measureBox(t){if(t.contents&&!t.children)return this.measureBoxHeader(t)+t.contents.byteLength;{let e=this.measureBoxHeader(t);if(t.contents&&(e+=t.contents.byteLength),t.children)for(let n of t.children)n&&(e+=this.measureBox(n));return e}}};fs=new WeakMap;lr=new WeakMap;var sl,Ds,Yo,_o,rl,iu,K2=class extends lm{constructor(t){super(),se(this,rl),se(this,sl,void 0),se(this,Ds,new ArrayBuffer(2**16)),se(this,Yo,new Uint8Array(U(this,Ds))),se(this,_o,0),Ye(this,sl,t)}write(t){ce(this,rl,iu).call(this,this.pos+t.byteLength),U(this,Yo).set(t,this.pos),this.pos+=t.byteLength,Ye(this,_o,Math.max(U(this,_o),this.pos))}finalize(){ce(this,rl,iu).call(this,this.pos),U(this,sl).buffer=U(this,Ds).slice(0,Math.max(U(this,_o),this.pos))}};sl=new WeakMap;Ds=new WeakMap;Yo=new WeakMap;_o=new WeakMap;rl=new WeakSet;iu=function(i){let t=U(this,Ds).byteLength;for(;t<i;)t*=2;if(t===U(this,Ds).byteLength)return;let e=new ArrayBuffer(t),n=new Uint8Array(e);n.set(U(this,Yo),0),Ye(this,Ds,e),Ye(this,Yo,n)};var J2=2**24,Z2=2,Ro,ps,vo,wi,bn,Tl,su,ju,cm,Ku,hm,Po,Al,Ju=class extends lm{constructor(t){var e,n;super(),se(this,Tl),se(this,ju),se(this,Ku),se(this,Po),se(this,Ro,void 0),se(this,ps,[]),se(this,vo,void 0),se(this,wi,void 0),se(this,bn,[]),Ye(this,Ro,t),Ye(this,vo,((e=t.options)==null?void 0:e.chunked)??!1),Ye(this,wi,((n=t.options)==null?void 0:n.chunkSize)??J2)}write(t){U(this,ps).push({data:t.slice(),start:this.pos}),this.pos+=t.byteLength}flush(){var n,s;if(U(this,ps).length===0)return;let t=[],e=[...U(this,ps)].sort((r,o)=>r.start-o.start);t.push({start:e[0].start,size:e[0].data.byteLength});for(let r=1;r<e.length;r++){let o=t[t.length-1],a=e[r];a.start<=o.start+o.size?o.size=Math.max(o.size,a.start+a.data.byteLength-o.start):t.push({start:a.start,size:a.data.byteLength})}for(let r of t){r.data=new Uint8Array(r.size);for(let o of U(this,ps))r.start<=o.start&&o.start<r.start+r.size&&r.data.set(o.data,o.start-r.start);U(this,vo)?(ce(this,Tl,su).call(this,r.data,r.start),ce(this,Po,Al).call(this)):(s=(n=U(this,Ro).options).onData)==null||s.call(n,r.data,r.start)}U(this,ps).length=0}finalize(){U(this,vo)&&ce(this,Po,Al).call(this,!0)}};Ro=new WeakMap;ps=new WeakMap;vo=new WeakMap;wi=new WeakMap;bn=new WeakMap;Tl=new WeakSet;su=function(i,t){let e=U(this,bn).findIndex(a=>a.start<=t&&t<a.start+U(this,wi));e===-1&&(e=ce(this,Ku,hm).call(this,t));let n=U(this,bn)[e],s=t-n.start,r=i.subarray(0,Math.min(U(this,wi)-s,i.byteLength));n.data.set(r,s);let o={start:s,end:s+r.byteLength};if(ce(this,ju,cm).call(this,n,o),n.written[0].start===0&&n.written[0].end===U(this,wi)&&(n.shouldFlush=!0),U(this,bn).length>Z2){for(let a=0;a<U(this,bn).length-1;a++)U(this,bn)[a].shouldFlush=!0;ce(this,Po,Al).call(this)}r.byteLength<i.byteLength&&ce(this,Tl,su).call(this,i.subarray(r.byteLength),t+r.byteLength)};ju=new WeakSet;cm=function(i,t){let e=0,n=i.written.length-1,s=-1;for(;e<=n;){let r=Math.floor(e+(n-e+1)/2);i.written[r].start<=t.start?(e=r+1,s=r):n=r-1}for(i.written.splice(s+1,0,t),(s===-1||i.written[s].end<t.start)&&s++;s<i.written.length-1&&i.written[s].end>=i.written[s+1].start;)i.written[s].end=Math.max(i.written[s].end,i.written[s+1].end),i.written.splice(s+1,1)};Ku=new WeakSet;hm=function(i){let e={start:Math.floor(i/U(this,wi))*U(this,wi),data:new Uint8Array(U(this,wi)),written:[],shouldFlush:!1};return U(this,bn).push(e),U(this,bn).sort((n,s)=>n.start-s.start),U(this,bn).indexOf(e)};Po=new WeakSet;Al=function(i=!1){var t,e;for(let n=0;n<U(this,bn).length;n++){let s=U(this,bn)[n];if(!(!s.shouldFlush&&!i)){for(let r of s.written)(e=(t=U(this,Ro).options).onData)==null||e.call(t,s.data.subarray(r.start,r.end),s.start+r.start);U(this,bn).splice(n--,1)}}};var Q2=class extends Ju{constructor(t){var e;super(new Yu({onData:(n,s)=>t.stream.write({type:"write",data:n,position:s}),chunked:!0,chunkSize:(e=t.options)==null?void 0:e.chunkSize}))}},ru=1e3,tw=["avc","hevc","vp9","av1"],ew=["aac","opus"],nw=2082844800,iw=["strict","offset","cross-track-offset"],Bt,Gt,Cl,xn,Je,qe,dr,yr,Zu,ms,gs,Fo,ou,um,au,dm,Qu,fm,lu,pm,td,mm,ol,cu,Wn,mi,ed,gm,Do,Rl,Pl,nd,Nr,sa,al,hu,sw=class{constructor(t){if(se(this,ou),se(this,au),se(this,Qu),se(this,lu),se(this,td),se(this,ol),se(this,Wn),se(this,ed),se(this,Do),se(this,Pl),se(this,Nr),se(this,al),se(this,Bt,void 0),se(this,Gt,void 0),se(this,Cl,void 0),se(this,xn,void 0),se(this,Je,null),se(this,qe,null),se(this,dr,Math.floor(Date.now()/1e3)+nw),se(this,yr,[]),se(this,Zu,1),se(this,ms,[]),se(this,gs,[]),se(this,Fo,!1),ce(this,ou,um).call(this,t),t.video=Co(t.video),t.audio=Co(t.audio),t.fastStart=Co(t.fastStart),this.target=t.target,Ye(this,Bt,{firstTimestampBehavior:"strict",...t}),t.target instanceof Y2)Ye(this,Gt,new K2(t.target));else if(t.target instanceof Yu)Ye(this,Gt,new Ju(t.target));else if(t.target instanceof j2)Ye(this,Gt,new Q2(t.target));else throw new Error(`Invalid target: ${t.target}`);ce(this,lu,pm).call(this),ce(this,au,dm).call(this)}addVideoChunk(t,e,n,s){if(!(t instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(n!==void 0&&(!Number.isFinite(n)||n<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");if(s!==void 0&&!Number.isFinite(s))throw new TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");let r=new Uint8Array(t.byteLength);t.copyTo(r),this.addVideoChunkRaw(r,t.type,n??t.timestamp,t.duration,e,s)}addVideoChunkRaw(t,e,n,s,r,o){if(!(t instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(n)||n<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(s)||s<0)throw new TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");if(r&&typeof r!="object")throw new TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");if(o!==void 0&&!Number.isFinite(o))throw new TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");if(ce(this,al,hu).call(this),!U(this,Bt).video)throw new Error("No video track declared.");if(typeof U(this,Bt).fastStart=="object"&&U(this,Je).samples.length===U(this,Bt).fastStart.expectedVideoChunks)throw new Error(`Cannot add more video chunks than specified in 'fastStart' (${U(this,Bt).fastStart.expectedVideoChunks}).`);let a=ce(this,ol,cu).call(this,U(this,Je),t,e,n,s,r,o);if(U(this,Bt).fastStart==="fragmented"&&U(this,qe)){for(;U(this,gs).length>0&&U(this,gs)[0].decodeTimestamp<=a.decodeTimestamp;){let l=U(this,gs).shift();ce(this,Wn,mi).call(this,U(this,qe),l)}a.decodeTimestamp<=U(this,qe).lastDecodeTimestamp?ce(this,Wn,mi).call(this,U(this,Je),a):U(this,ms).push(a)}else ce(this,Wn,mi).call(this,U(this,Je),a)}addAudioChunk(t,e,n){if(!(t instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(n!==void 0&&(!Number.isFinite(n)||n<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let s=new Uint8Array(t.byteLength);t.copyTo(s),this.addAudioChunkRaw(s,t.type,n??t.timestamp,t.duration,e)}addAudioChunkRaw(t,e,n,s,r){if(!(t instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(n)||n<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(s)||s<0)throw new TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");if(r&&typeof r!="object")throw new TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");if(ce(this,al,hu).call(this),!U(this,Bt).audio)throw new Error("No audio track declared.");if(typeof U(this,Bt).fastStart=="object"&&U(this,qe).samples.length===U(this,Bt).fastStart.expectedAudioChunks)throw new Error(`Cannot add more audio chunks than specified in 'fastStart' (${U(this,Bt).fastStart.expectedAudioChunks}).`);let o=ce(this,ol,cu).call(this,U(this,qe),t,e,n,s,r);if(U(this,Bt).fastStart==="fragmented"&&U(this,Je)){for(;U(this,ms).length>0&&U(this,ms)[0].decodeTimestamp<=o.decodeTimestamp;){let a=U(this,ms).shift();ce(this,Wn,mi).call(this,U(this,Je),a)}o.decodeTimestamp<=U(this,Je).lastDecodeTimestamp?ce(this,Wn,mi).call(this,U(this,qe),o):U(this,gs).push(o)}else ce(this,Wn,mi).call(this,U(this,qe),o)}finalize(){if(U(this,Fo))throw new Error("Cannot finalize a muxer more than once.");if(U(this,Bt).fastStart==="fragmented"){for(let e of U(this,ms))ce(this,Wn,mi).call(this,U(this,Je),e);for(let e of U(this,gs))ce(this,Wn,mi).call(this,U(this,qe),e);ce(this,Pl,nd).call(this,!1)}else U(this,Je)&&ce(this,Do,Rl).call(this,U(this,Je)),U(this,qe)&&ce(this,Do,Rl).call(this,U(this,qe));let t=[U(this,Je),U(this,qe)].filter(Boolean);if(U(this,Bt).fastStart==="in-memory"){let e;for(let s=0;s<2;s++){let r=il(t,U(this,dr)),o=U(this,Gt).measureBox(r);e=U(this,Gt).measureBox(U(this,xn));let a=U(this,Gt).pos+o+e;for(let l of U(this,yr)){l.offset=a;for(let{data:c}of l.samples)a+=c.byteLength,e+=c.byteLength}if(a<2**32)break;e>=2**32&&(U(this,xn).largeSize=!0)}let n=il(t,U(this,dr));U(this,Gt).writeBox(n),U(this,xn).size=e,U(this,Gt).writeBox(U(this,xn));for(let s of U(this,yr))for(let r of s.samples)U(this,Gt).write(r.data),r.data=null}else if(U(this,Bt).fastStart==="fragmented"){let e=U(this,Gt).pos,n=V2(t);U(this,Gt).writeBox(n);let s=U(this,Gt).pos-e;U(this,Gt).seek(U(this,Gt).pos-4),U(this,Gt).writeU32(s)}else{let e=U(this,Gt).offsets.get(U(this,xn)),n=U(this,Gt).pos-e;U(this,xn).size=n,U(this,xn).largeSize=n>=2**32,U(this,Gt).patchBox(U(this,xn));let s=il(t,U(this,dr));if(typeof U(this,Bt).fastStart=="object"){U(this,Gt).seek(U(this,Cl)),U(this,Gt).writeBox(s);let r=e-U(this,Gt).pos;U(this,Gt).writeBox(e2(r))}else U(this,Gt).writeBox(s)}ce(this,Nr,sa).call(this),U(this,Gt).finalize(),Ye(this,Fo,!0)}};Bt=new WeakMap;Gt=new WeakMap;Cl=new WeakMap;xn=new WeakMap;Je=new WeakMap;qe=new WeakMap;dr=new WeakMap;yr=new WeakMap;Zu=new WeakMap;ms=new WeakMap;gs=new WeakMap;Fo=new WeakMap;ou=new WeakSet;um=function(i){if(typeof i!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(i.target instanceof Kl))throw new TypeError("The target must be provided and an instance of Target.");if(i.video){if(!tw.includes(i.video.codec))throw new TypeError(`Unsupported video codec: ${i.video.codec}`);if(!Number.isInteger(i.video.width)||i.video.width<=0)throw new TypeError(`Invalid video width: ${i.video.width}. Must be a positive integer.`);if(!Number.isInteger(i.video.height)||i.video.height<=0)throw new TypeError(`Invalid video height: ${i.video.height}. Must be a positive integer.`);const t=i.video.rotation;if(typeof t=="number"&&![0,90,180,270].includes(t))throw new TypeError(`Invalid video rotation: ${t}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(t)&&(t.length!==9||t.some(e=>typeof e!="number")))throw new TypeError(`Invalid video transformation matrix: ${t.join()}`);if(i.video.frameRate!==void 0&&(!Number.isInteger(i.video.frameRate)||i.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.video.frameRate}. Must be a positive integer.`)}if(i.audio){if(!ew.includes(i.audio.codec))throw new TypeError(`Unsupported audio codec: ${i.audio.codec}`);if(!Number.isInteger(i.audio.numberOfChannels)||i.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${i.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(i.audio.sampleRate)||i.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${i.audio.sampleRate}. Must be a positive integer.`)}if(i.firstTimestampBehavior&&!iw.includes(i.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${i.firstTimestampBehavior}`);if(typeof i.fastStart=="object"){if(i.video){if(i.fastStart.expectedVideoChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");if(!Number.isInteger(i.fastStart.expectedVideoChunks)||i.fastStart.expectedVideoChunks<0)throw new TypeError("'expectedVideoChunks' must be a non-negative integer.")}if(i.audio){if(i.fastStart.expectedAudioChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");if(!Number.isInteger(i.fastStart.expectedAudioChunks)||i.fastStart.expectedAudioChunks<0)throw new TypeError("'expectedAudioChunks' must be a non-negative integer.")}}else if(![!1,"in-memory","fragmented"].includes(i.fastStart))throw new TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");if(i.minFragmentDuration!==void 0&&(!Number.isFinite(i.minFragmentDuration)||i.minFragmentDuration<0))throw new TypeError("'minFragmentDuration' must be a non-negative number.")};au=new WeakSet;dm=function(){var i;if(U(this,Gt).writeBox(t2({holdsAvc:((i=U(this,Bt).video)==null?void 0:i.codec)==="avc",fragmented:U(this,Bt).fastStart==="fragmented"})),Ye(this,Cl,U(this,Gt).pos),U(this,Bt).fastStart==="in-memory")Ye(this,xn,nu(!1));else if(U(this,Bt).fastStart!=="fragmented"){if(typeof U(this,Bt).fastStart=="object"){let t=ce(this,Qu,fm).call(this);U(this,Gt).seek(U(this,Gt).pos+t)}Ye(this,xn,nu(!0)),U(this,Gt).writeBox(U(this,xn))}ce(this,Nr,sa).call(this)};Qu=new WeakSet;fm=function(){if(typeof U(this,Bt).fastStart!="object")return;let i=0,t=[U(this,Bt).fastStart.expectedVideoChunks,U(this,Bt).fastStart.expectedAudioChunks];for(let e of t)e&&(i+=8*Math.ceil(2/3*e),i+=4*e,i+=12*Math.ceil(2/3*e),i+=4*e,i+=8*e);return i+=4096,i};lu=new WeakSet;pm=function(){if(U(this,Bt).video&&Ye(this,Je,{id:1,info:{type:"video",codec:U(this,Bt).video.codec,width:U(this,Bt).video.width,height:U(this,Bt).video.height,rotation:U(this,Bt).video.rotation??0,decoderConfig:null},timescale:U(this,Bt).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),U(this,Bt).audio&&(Ye(this,qe,{id:U(this,Bt).video?2:1,info:{type:"audio",codec:U(this,Bt).audio.codec,numberOfChannels:U(this,Bt).audio.numberOfChannels,sampleRate:U(this,Bt).audio.sampleRate,decoderConfig:null},timescale:U(this,Bt).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),U(this,Bt).audio.codec==="aac")){let i=ce(this,td,mm).call(this,2,U(this,Bt).audio.sampleRate,U(this,Bt).audio.numberOfChannels);U(this,qe).info.decoderConfig={codec:U(this,Bt).audio.codec,description:i,numberOfChannels:U(this,Bt).audio.numberOfChannels,sampleRate:U(this,Bt).audio.sampleRate}}};td=new WeakSet;mm=function(i,t,e){let s=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(t),r=e,o="";o+=i.toString(2).padStart(5,"0"),o+=s.toString(2).padStart(4,"0"),s===15&&(o+=t.toString(2).padStart(24,"0")),o+=r.toString(2).padStart(4,"0");let a=Math.ceil(o.length/8)*8;o=o.padEnd(a,"0");let l=new Uint8Array(o.length/8);for(let c=0;c<o.length;c+=8)l[c/8]=parseInt(o.slice(c,c+8),2);return l};ol=new WeakSet;cu=function(i,t,e,n,s,r,o){let a=n/1e6,l=(n-(o??0))/1e6,c=s/1e6,h=ce(this,ed,gm).call(this,a,l,i);return a=h.presentationTimestamp,l=h.decodeTimestamp,r!=null&&r.decoderConfig&&(i.info.decoderConfig===null?i.info.decoderConfig=r.decoderConfig:Object.assign(i.info.decoderConfig,r.decoderConfig)),{presentationTimestamp:a,decodeTimestamp:l,duration:c,data:t,size:t.byteLength,type:e,timescaleUnitsToNextSample:ti(c,i.timescale)}};Wn=new WeakSet;mi=function(i,t){U(this,Bt).fastStart!=="fragmented"&&i.samples.push(t);const e=ti(t.presentationTimestamp-t.decodeTimestamp,i.timescale);if(i.lastTimescaleUnits!==null){let s=ti(t.decodeTimestamp,i.timescale,!1),r=Math.round(s-i.lastTimescaleUnits);if(i.lastTimescaleUnits+=r,i.lastSample.timescaleUnitsToNextSample=r,U(this,Bt).fastStart!=="fragmented"){let o=El(i.timeToSampleTable);o.sampleCount===1?(o.sampleDelta=r,o.sampleCount++):o.sampleDelta===r?o.sampleCount++:(o.sampleCount--,i.timeToSampleTable.push({sampleCount:2,sampleDelta:r}));const a=El(i.compositionTimeOffsetTable);a.sampleCompositionTimeOffset===e?a.sampleCount++:i.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:e})}}else i.lastTimescaleUnits=0,U(this,Bt).fastStart!=="fragmented"&&(i.timeToSampleTable.push({sampleCount:1,sampleDelta:ti(t.duration,i.timescale)}),i.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:e}));i.lastSample=t;let n=!1;if(!i.currentChunk)n=!0;else{let s=t.presentationTimestamp-i.currentChunk.startTimestamp;if(U(this,Bt).fastStart==="fragmented"){let r=U(this,Je)??U(this,qe);const o=U(this,Bt).minFragmentDuration??1;i===r&&t.type==="key"&&s>=o&&(n=!0,ce(this,Pl,nd).call(this))}else n=s>=.5}n&&(i.currentChunk&&ce(this,Do,Rl).call(this,i),i.currentChunk={startTimestamp:t.presentationTimestamp,samples:[]}),i.currentChunk.samples.push(t)};ed=new WeakSet;gm=function(i,t,e){var o,a;const n=U(this,Bt).firstTimestampBehavior==="strict",s=e.lastDecodeTimestamp===-1;if(n&&s&&t!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${t}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(U(this,Bt).firstTimestampBehavior==="offset"||U(this,Bt).firstTimestampBehavior==="cross-track-offset"){e.firstDecodeTimestamp===void 0&&(e.firstDecodeTimestamp=t);let l;U(this,Bt).firstTimestampBehavior==="offset"?l=e.firstDecodeTimestamp:l=Math.min(((o=U(this,Je))==null?void 0:o.firstDecodeTimestamp)??1/0,((a=U(this,qe))==null?void 0:a.firstDecodeTimestamp)??1/0),t-=l,i-=l}if(t<e.lastDecodeTimestamp)throw new Error(`Timestamps must be monotonically increasing (DTS went from ${e.lastDecodeTimestamp*1e6} to ${t*1e6}).`);return e.lastDecodeTimestamp=t,{presentationTimestamp:i,decodeTimestamp:t}};Do=new WeakSet;Rl=function(i){if(U(this,Bt).fastStart==="fragmented")throw new Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");if(i.currentChunk){if(i.finalizedChunks.push(i.currentChunk),U(this,yr).push(i.currentChunk),(i.compactlyCodedChunkTable.length===0||El(i.compactlyCodedChunkTable).samplesPerChunk!==i.currentChunk.samples.length)&&i.compactlyCodedChunkTable.push({firstChunk:i.finalizedChunks.length,samplesPerChunk:i.currentChunk.samples.length}),U(this,Bt).fastStart==="in-memory"){i.currentChunk.offset=0;return}i.currentChunk.offset=U(this,Gt).pos;for(let t of i.currentChunk.samples)U(this,Gt).write(t.data),t.data=null;ce(this,Nr,sa).call(this)}};Pl=new WeakSet;nd=function(i=!0){if(U(this,Bt).fastStart!=="fragmented")throw new Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");let t=[U(this,Je),U(this,qe)].filter(a=>a&&a.currentChunk);if(t.length===0)return;let e=JS(this,Zu)._++;if(e===1){let a=il(t,U(this,dr),!0);U(this,Gt).writeBox(a)}let n=U(this,Gt).pos,s=Up(e,t);U(this,Gt).writeBox(s);{let a=nu(!1),l=0;for(let h of t)for(let u of h.currentChunk.samples)l+=u.size;let c=U(this,Gt).measureBox(a)+l;c>=2**32&&(a.largeSize=!0,c=U(this,Gt).measureBox(a)+l),a.size=c,U(this,Gt).writeBox(a)}for(let a of t){a.currentChunk.offset=U(this,Gt).pos,a.currentChunk.moofOffset=n;for(let l of a.currentChunk.samples)U(this,Gt).write(l.data),l.data=null}let r=U(this,Gt).pos;U(this,Gt).seek(U(this,Gt).offsets.get(s));let o=Up(e,t);U(this,Gt).writeBox(o),U(this,Gt).seek(r);for(let a of t)a.finalizedChunks.push(a.currentChunk),U(this,yr).push(a.currentChunk),a.currentChunk=null;i&&ce(this,Nr,sa).call(this)};Nr=new WeakSet;sa=function(){U(this,Gt)instanceof Ju&&U(this,Gt).flush()};al=new WeakSet;hu=function(){if(U(this,Fo))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};var id=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)},C=(i,t,e)=>(id(i,t,"read from private field"),e?e.call(i):t.get(i)),ft=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},jt=(i,t,e,n)=>(id(i,t,"write to private field"),t.set(i,e),e),Ct=(i,t,e)=>(id(i,t,"access private method"),e),_m=class{constructor(i){this.value=i}},sd=class{constructor(i){this.value=i}},vm=i=>i<256?1:i<65536?2:i<1<<24?3:i<2**32?4:i<2**40?5:6,rw=i=>{if(i<127)return 1;if(i<16383)return 2;if(i<(1<<21)-1)return 3;if(i<(1<<28)-1)return 4;if(i<2**35-1)return 5;if(i<2**42-1)return 6;throw new Error("EBML VINT size not supported "+i)},rr=(i,t,e)=>{let n=0;for(let s=t;s<e;s++){let r=Math.floor(s/8),o=i[r],a=7-(s&7),l=(o&1<<a)>>a;n<<=1,n|=l}return n},ow=(i,t,e,n)=>{for(let s=t;s<e;s++){let r=Math.floor(s/8),o=i[r],a=7-(s&7);o&=~(1<<a),o|=(n&1<<e-s-1)>>e-s-1<<a,i[r]=o}},Jl=class{},aw=class extends Jl{constructor(){super(...arguments),this.buffer=null}},rd=class extends Jl{constructor(i){if(super(),this.options=i,typeof i!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(i.onData){if(typeof i.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(i.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(i.onHeader&&typeof i.onHeader!="function")throw new TypeError("options.onHeader, when provided, must be a function.");if(i.onCluster&&typeof i.onCluster!="function")throw new TypeError("options.onCluster, when provided, must be a function.");if(i.chunked!==void 0&&typeof i.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(i.chunkSize!==void 0&&(!Number.isInteger(i.chunkSize)||i.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},lw=class extends Jl{constructor(i,t){if(super(),this.stream=i,this.options=t,!(i instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(t!==void 0&&typeof t!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(t&&t.chunkSize!==void 0&&(!Number.isInteger(t.chunkSize)||t.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},Qi,_e,uu,xm,du,ym,fu,Mm,ll,pu,mu,bm,Sm=class{constructor(){ft(this,uu),ft(this,du),ft(this,fu),ft(this,ll),ft(this,mu),this.pos=0,ft(this,Qi,new Uint8Array(8)),ft(this,_e,new DataView(C(this,Qi).buffer)),this.offsets=new WeakMap,this.dataOffsets=new WeakMap}seek(i){this.pos=i}writeEBMLVarInt(i,t=rw(i)){let e=0;switch(t){case 1:C(this,_e).setUint8(e++,128|i);break;case 2:C(this,_e).setUint8(e++,64|i>>8),C(this,_e).setUint8(e++,i);break;case 3:C(this,_e).setUint8(e++,32|i>>16),C(this,_e).setUint8(e++,i>>8),C(this,_e).setUint8(e++,i);break;case 4:C(this,_e).setUint8(e++,16|i>>24),C(this,_e).setUint8(e++,i>>16),C(this,_e).setUint8(e++,i>>8),C(this,_e).setUint8(e++,i);break;case 5:C(this,_e).setUint8(e++,8|i/2**32&7),C(this,_e).setUint8(e++,i>>24),C(this,_e).setUint8(e++,i>>16),C(this,_e).setUint8(e++,i>>8),C(this,_e).setUint8(e++,i);break;case 6:C(this,_e).setUint8(e++,4|i/2**40&3),C(this,_e).setUint8(e++,i/2**32|0),C(this,_e).setUint8(e++,i>>24),C(this,_e).setUint8(e++,i>>16),C(this,_e).setUint8(e++,i>>8),C(this,_e).setUint8(e++,i);break;default:throw new Error("Bad EBML VINT size "+t)}this.write(C(this,Qi).subarray(0,e))}writeEBML(i){if(i!==null)if(i instanceof Uint8Array)this.write(i);else if(Array.isArray(i))for(let t of i)this.writeEBML(t);else if(this.offsets.set(i,this.pos),Ct(this,ll,pu).call(this,i.id),Array.isArray(i.data)){let t=this.pos,e=i.size===-1?1:i.size??4;i.size===-1?Ct(this,uu,xm).call(this,255):this.seek(this.pos+e);let n=this.pos;if(this.dataOffsets.set(i,n),this.writeEBML(i.data),i.size!==-1){let s=this.pos-n,r=this.pos;this.seek(t),this.writeEBMLVarInt(s,e),this.seek(r)}}else if(typeof i.data=="number"){let t=i.size??vm(i.data);this.writeEBMLVarInt(t),Ct(this,ll,pu).call(this,i.data,t)}else typeof i.data=="string"?(this.writeEBMLVarInt(i.data.length),Ct(this,mu,bm).call(this,i.data)):i.data instanceof Uint8Array?(this.writeEBMLVarInt(i.data.byteLength,i.size),this.write(i.data)):i.data instanceof _m?(this.writeEBMLVarInt(4),Ct(this,du,ym).call(this,i.data.value)):i.data instanceof sd&&(this.writeEBMLVarInt(8),Ct(this,fu,Mm).call(this,i.data.value))}};Qi=new WeakMap;_e=new WeakMap;uu=new WeakSet;xm=function(i){C(this,_e).setUint8(0,i),this.write(C(this,Qi).subarray(0,1))};du=new WeakSet;ym=function(i){C(this,_e).setFloat32(0,i,!1),this.write(C(this,Qi).subarray(0,4))};fu=new WeakSet;Mm=function(i){C(this,_e).setFloat64(0,i,!1),this.write(C(this,Qi))};ll=new WeakSet;pu=function(i,t=vm(i)){let e=0;switch(t){case 6:C(this,_e).setUint8(e++,i/2**40|0);case 5:C(this,_e).setUint8(e++,i/2**32|0);case 4:C(this,_e).setUint8(e++,i>>24);case 3:C(this,_e).setUint8(e++,i>>16);case 2:C(this,_e).setUint8(e++,i>>8);case 1:C(this,_e).setUint8(e++,i);break;default:throw new Error("Bad UINT size "+t)}this.write(C(this,Qi).subarray(0,e))};mu=new WeakSet;bm=function(i){this.write(new Uint8Array(i.split("").map(t=>t.charCodeAt(0))))};var cl,Ls,jo,hl,gu,cw=class extends Sm{constructor(i){super(),ft(this,hl),ft(this,cl,void 0),ft(this,Ls,new ArrayBuffer(2**16)),ft(this,jo,new Uint8Array(C(this,Ls))),jt(this,cl,i)}write(i){Ct(this,hl,gu).call(this,this.pos+i.byteLength),C(this,jo).set(i,this.pos),this.pos+=i.byteLength}finalize(){Ct(this,hl,gu).call(this,this.pos),C(this,cl).buffer=C(this,Ls).slice(0,this.pos)}};cl=new WeakMap;Ls=new WeakMap;jo=new WeakMap;hl=new WeakSet;gu=function(i){let t=C(this,Ls).byteLength;for(;t<i;)t*=2;if(t===C(this,Ls).byteLength)return;let e=new ArrayBuffer(t),n=new Uint8Array(e);n.set(C(this,jo),0),jt(this,Ls,e),jt(this,jo,n)};var cr,Xn,qn,_s,ra=class extends Sm{constructor(i){super(),this.target=i,ft(this,cr,!1),ft(this,Xn,void 0),ft(this,qn,void 0),ft(this,_s,void 0)}write(i){if(!C(this,cr))return;let t=this.pos;if(t<C(this,qn)){if(t+i.byteLength<=C(this,qn))return;i=i.subarray(C(this,qn)-t),t=0}let e=t+i.byteLength-C(this,qn),n=C(this,Xn).byteLength;for(;n<e;)n*=2;if(n!==C(this,Xn).byteLength){let s=new Uint8Array(n);s.set(C(this,Xn),0),jt(this,Xn,s)}C(this,Xn).set(i,t-C(this,qn)),jt(this,_s,Math.max(C(this,_s),t+i.byteLength))}startTrackingWrites(){jt(this,cr,!0),jt(this,Xn,new Uint8Array(2**10)),jt(this,qn,this.pos),jt(this,_s,this.pos)}getTrackedWrites(){if(!C(this,cr))throw new Error("Can't get tracked writes since nothing was tracked.");let t={data:C(this,Xn).subarray(0,C(this,_s)-C(this,qn)),start:C(this,qn),end:C(this,_s)};return jt(this,Xn,void 0),jt(this,cr,!1),t}};cr=new WeakMap;Xn=new WeakMap;qn=new WeakMap;_s=new WeakMap;var hw=2**24,uw=2,vs,Mr,Lo,xo,Ei,Sn,Fl,_u,od,wm,ad,Em,Io,Dl,ld=class extends ra{constructor(i,t){var e,n;super(i),ft(this,Fl),ft(this,od),ft(this,ad),ft(this,Io),ft(this,vs,[]),ft(this,Mr,0),ft(this,Lo,void 0),ft(this,xo,void 0),ft(this,Ei,void 0),ft(this,Sn,[]),jt(this,Lo,t),jt(this,xo,((e=i.options)==null?void 0:e.chunked)??!1),jt(this,Ei,((n=i.options)==null?void 0:n.chunkSize)??hw)}write(i){super.write(i),C(this,vs).push({data:i.slice(),start:this.pos}),this.pos+=i.byteLength}flush(){var e,n;if(C(this,vs).length===0)return;let i=[],t=[...C(this,vs)].sort((s,r)=>s.start-r.start);i.push({start:t[0].start,size:t[0].data.byteLength});for(let s=1;s<t.length;s++){let r=i[i.length-1],o=t[s];o.start<=r.start+r.size?r.size=Math.max(r.size,o.start+o.data.byteLength-r.start):i.push({start:o.start,size:o.data.byteLength})}for(let s of i){s.data=new Uint8Array(s.size);for(let r of C(this,vs))s.start<=r.start&&r.start<s.start+s.size&&s.data.set(r.data,r.start-s.start);if(C(this,xo))Ct(this,Fl,_u).call(this,s.data,s.start),Ct(this,Io,Dl).call(this);else{if(C(this,Lo)&&s.start<C(this,Mr))throw new Error("Internal error: Monotonicity violation.");(n=(e=this.target.options).onData)==null||n.call(e,s.data,s.start),jt(this,Mr,s.start+s.data.byteLength)}}C(this,vs).length=0}finalize(){C(this,xo)&&Ct(this,Io,Dl).call(this,!0)}};vs=new WeakMap;Mr=new WeakMap;Lo=new WeakMap;xo=new WeakMap;Ei=new WeakMap;Sn=new WeakMap;Fl=new WeakSet;_u=function(i,t){let e=C(this,Sn).findIndex(a=>a.start<=t&&t<a.start+C(this,Ei));e===-1&&(e=Ct(this,ad,Em).call(this,t));let n=C(this,Sn)[e],s=t-n.start,r=i.subarray(0,Math.min(C(this,Ei)-s,i.byteLength));n.data.set(r,s);let o={start:s,end:s+r.byteLength};if(Ct(this,od,wm).call(this,n,o),n.written[0].start===0&&n.written[0].end===C(this,Ei)&&(n.shouldFlush=!0),C(this,Sn).length>uw){for(let a=0;a<C(this,Sn).length-1;a++)C(this,Sn)[a].shouldFlush=!0;Ct(this,Io,Dl).call(this)}r.byteLength<i.byteLength&&Ct(this,Fl,_u).call(this,i.subarray(r.byteLength),t+r.byteLength)};od=new WeakSet;wm=function(i,t){let e=0,n=i.written.length-1,s=-1;for(;e<=n;){let r=Math.floor(e+(n-e+1)/2);i.written[r].start<=t.start?(e=r+1,s=r):n=r-1}for(i.written.splice(s+1,0,t),(s===-1||i.written[s].end<t.start)&&s++;s<i.written.length-1&&i.written[s].end>=i.written[s+1].start;)i.written[s].end=Math.max(i.written[s].end,i.written[s+1].end),i.written.splice(s+1,1)};ad=new WeakSet;Em=function(i){let e={start:Math.floor(i/C(this,Ei))*C(this,Ei),data:new Uint8Array(C(this,Ei)),written:[],shouldFlush:!1};return C(this,Sn).push(e),C(this,Sn).sort((n,s)=>n.start-s.start),C(this,Sn).indexOf(e)};Io=new WeakSet;Dl=function(i=!1){var t,e;for(let n=0;n<C(this,Sn).length;n++){let s=C(this,Sn)[n];if(!(!s.shouldFlush&&!i)){for(let r of s.written){if(C(this,Lo)&&s.start+r.start<C(this,Mr))throw new Error("Internal error: Monotonicity violation.");(e=(t=this.target.options).onData)==null||e.call(t,s.data.subarray(r.start,r.end),s.start+r.start),jt(this,Mr,s.start+r.end)}C(this,Sn).splice(n--,1)}}};var dw=class extends ld{constructor(i,t){var e;super(new rd({onData:(n,s)=>i.stream.write({type:"write",data:n,position:s}),chunked:!0,chunkSize:(e=i.options)==null?void 0:e.chunkSize}),t)}},Or=1,Ko=2,Ll=3,fw=1,pw=2,mw=17,gw=2**15,Uo=2**13,Np="https://github.com/Vanilagy/webm-muxer",Tm=6,Am=5,_w=["strict","offset","permissive"],zt,Rt,Jo,Zo,vi,Br,fr,Is,kr,ts,br,Sr,Zn,oa,wr,Gi,Wi,Ss,No,Oo,Er,Tr,Il,Qo,Bo,vu,Cm,xu,Rm,cd,Pm,hd,Fm,ud,Dm,dd,Lm,fd,Im,Zl,pd,Ql,md,gd,Um,ws,pr,Es,mr,yu,Nm,Mu,Om,yo,ul,Mo,dl,_d,Bm,$n,_i,Ar,ta,ko,Ul,vd,km,Nl,xd,bo,fl,vw=class{constructor(i){ft(this,vu),ft(this,xu),ft(this,cd),ft(this,hd),ft(this,ud),ft(this,dd),ft(this,fd),ft(this,Zl),ft(this,Ql),ft(this,gd),ft(this,ws),ft(this,Es),ft(this,yu),ft(this,Mu),ft(this,yo),ft(this,Mo),ft(this,_d),ft(this,$n),ft(this,Ar),ft(this,ko),ft(this,vd),ft(this,Nl),ft(this,bo),ft(this,zt,void 0),ft(this,Rt,void 0),ft(this,Jo,void 0),ft(this,Zo,void 0),ft(this,vi,void 0),ft(this,Br,void 0),ft(this,fr,void 0),ft(this,Is,void 0),ft(this,kr,void 0),ft(this,ts,void 0),ft(this,br,void 0),ft(this,Sr,void 0),ft(this,Zn,void 0),ft(this,oa,void 0),ft(this,wr,0),ft(this,Gi,[]),ft(this,Wi,[]),ft(this,Ss,[]),ft(this,No,void 0),ft(this,Oo,void 0),ft(this,Er,-1),ft(this,Tr,-1),ft(this,Il,-1),ft(this,Qo,void 0),ft(this,Bo,!1),Ct(this,vu,Cm).call(this,i),jt(this,zt,{type:"webm",firstTimestampBehavior:"strict",...i}),this.target=i.target;let t=!!C(this,zt).streaming;if(i.target instanceof aw)jt(this,Rt,new cw(i.target));else if(i.target instanceof rd)jt(this,Rt,new ld(i.target,t));else if(i.target instanceof lw)jt(this,Rt,new dw(i.target,t));else throw new Error(`Invalid target: ${i.target}`);Ct(this,xu,Rm).call(this)}addVideoChunk(i,t,e){if(!(i instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (chunk) must be of type EncodedVideoChunk.");if(t&&typeof t!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");let n=new Uint8Array(i.byteLength);i.copyTo(n),this.addVideoChunkRaw(n,i.type,e??i.timestamp,t)}addVideoChunkRaw(i,t,e,n){if(!(i instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(t!=="key"&&t!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(e)||e<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(n&&typeof n!="object")throw new TypeError("addVideoChunkRaw's fourth argument (meta), when provided, must be an object.");if(Ct(this,bo,fl).call(this),!C(this,zt).video)throw new Error("No video track declared.");C(this,No)===void 0&&jt(this,No,e),n&&Ct(this,yu,Nm).call(this,n);let s=Ct(this,Mo,dl).call(this,i,t,e,Or);for(C(this,zt).video.codec==="V_VP9"&&Ct(this,Mu,Om).call(this,s),jt(this,Er,s.timestamp);C(this,Wi).length>0&&C(this,Wi)[0].timestamp<=s.timestamp;){let r=C(this,Wi).shift();Ct(this,$n,_i).call(this,r,!1)}!C(this,zt).audio||s.timestamp<=C(this,Tr)?Ct(this,$n,_i).call(this,s,!0):C(this,Gi).push(s),Ct(this,yo,ul).call(this),Ct(this,ws,pr).call(this)}addAudioChunk(i,t,e){if(!(i instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (chunk) must be of type EncodedAudioChunk.");if(t&&typeof t!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let n=new Uint8Array(i.byteLength);i.copyTo(n),this.addAudioChunkRaw(n,i.type,e??i.timestamp,t)}addAudioChunkRaw(i,t,e,n){if(!(i instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(t!=="key"&&t!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(e)||e<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(n&&typeof n!="object")throw new TypeError("addAudioChunkRaw's fourth argument (meta), when provided, must be an object.");if(Ct(this,bo,fl).call(this),!C(this,zt).audio)throw new Error("No audio track declared.");C(this,Oo)===void 0&&jt(this,Oo,e),n!=null&&n.decoderConfig&&(C(this,zt).streaming?jt(this,ts,Ct(this,Ar,ta).call(this,n.decoderConfig.description)):Ct(this,ko,Ul).call(this,C(this,ts),n.decoderConfig.description));let s=Ct(this,Mo,dl).call(this,i,t,e,Ko);for(jt(this,Tr,s.timestamp);C(this,Gi).length>0&&C(this,Gi)[0].timestamp<=s.timestamp;){let r=C(this,Gi).shift();Ct(this,$n,_i).call(this,r,!0)}!C(this,zt).video||s.timestamp<=C(this,Er)?Ct(this,$n,_i).call(this,s,!C(this,zt).video):C(this,Wi).push(s),Ct(this,yo,ul).call(this),Ct(this,ws,pr).call(this)}addSubtitleChunk(i,t,e){if(typeof i!="object"||!i)throw new TypeError("addSubtitleChunk's first argument (chunk) must be an object.");if(!(i.body instanceof Uint8Array))throw new TypeError("body must be an instance of Uint8Array.");if(!Number.isFinite(i.timestamp)||i.timestamp<0)throw new TypeError("timestamp must be a non-negative real number.");if(!Number.isFinite(i.duration)||i.duration<0)throw new TypeError("duration must be a non-negative real number.");if(i.additions&&!(i.additions instanceof Uint8Array))throw new TypeError("additions, when present, must be an instance of Uint8Array.");if(typeof t!="object")throw new TypeError("addSubtitleChunk's second argument (meta) must be an object.");if(Ct(this,bo,fl).call(this),!C(this,zt).subtitles)throw new Error("No subtitle track declared.");t!=null&&t.decoderConfig&&(C(this,zt).streaming?jt(this,br,Ct(this,Ar,ta).call(this,t.decoderConfig.description)):Ct(this,ko,Ul).call(this,C(this,br),t.decoderConfig.description));let n=Ct(this,Mo,dl).call(this,i.body,"key",e??i.timestamp,Ll,i.duration,i.additions);jt(this,Il,n.timestamp),C(this,Ss).push(n),Ct(this,yo,ul).call(this),Ct(this,ws,pr).call(this)}finalize(){if(C(this,Bo))throw new Error("Cannot finalize a muxer more than once.");for(;C(this,Gi).length>0;)Ct(this,$n,_i).call(this,C(this,Gi).shift(),!0);for(;C(this,Wi).length>0;)Ct(this,$n,_i).call(this,C(this,Wi).shift(),!0);for(;C(this,Ss).length>0&&C(this,Ss)[0].timestamp<=C(this,wr);)Ct(this,$n,_i).call(this,C(this,Ss).shift(),!1);if(C(this,Zn)&&Ct(this,Nl,xd).call(this),C(this,Rt).writeEBML(C(this,Sr)),!C(this,zt).streaming){let i=C(this,Rt).pos,t=C(this,Rt).pos-C(this,Es,mr);C(this,Rt).seek(C(this,Rt).offsets.get(C(this,Jo))+4),C(this,Rt).writeEBMLVarInt(t,Tm),C(this,fr).data=new sd(C(this,wr)),C(this,Rt).seek(C(this,Rt).offsets.get(C(this,fr))),C(this,Rt).writeEBML(C(this,fr)),C(this,vi).data[0].data[1].data=C(this,Rt).offsets.get(C(this,Sr))-C(this,Es,mr),C(this,vi).data[1].data[1].data=C(this,Rt).offsets.get(C(this,Zo))-C(this,Es,mr),C(this,vi).data[2].data[1].data=C(this,Rt).offsets.get(C(this,Br))-C(this,Es,mr),C(this,Rt).seek(C(this,Rt).offsets.get(C(this,vi))),C(this,Rt).writeEBML(C(this,vi)),C(this,Rt).seek(i)}Ct(this,ws,pr).call(this),C(this,Rt).finalize(),jt(this,Bo,!0)}};zt=new WeakMap;Rt=new WeakMap;Jo=new WeakMap;Zo=new WeakMap;vi=new WeakMap;Br=new WeakMap;fr=new WeakMap;Is=new WeakMap;kr=new WeakMap;ts=new WeakMap;br=new WeakMap;Sr=new WeakMap;Zn=new WeakMap;oa=new WeakMap;wr=new WeakMap;Gi=new WeakMap;Wi=new WeakMap;Ss=new WeakMap;No=new WeakMap;Oo=new WeakMap;Er=new WeakMap;Tr=new WeakMap;Il=new WeakMap;Qo=new WeakMap;Bo=new WeakMap;vu=new WeakSet;Cm=function(i){if(typeof i!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(i.target instanceof Jl))throw new TypeError("The target must be provided and an instance of Target.");if(i.video){if(typeof i.video.codec!="string")throw new TypeError(`Invalid video codec: ${i.video.codec}. Must be a string.`);if(!Number.isInteger(i.video.width)||i.video.width<=0)throw new TypeError(`Invalid video width: ${i.video.width}. Must be a positive integer.`);if(!Number.isInteger(i.video.height)||i.video.height<=0)throw new TypeError(`Invalid video height: ${i.video.height}. Must be a positive integer.`);if(i.video.frameRate!==void 0&&(!Number.isFinite(i.video.frameRate)||i.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.video.frameRate}. Must be a positive number.`);if(i.video.alpha!==void 0&&typeof i.video.alpha!="boolean")throw new TypeError(`Invalid video alpha: ${i.video.alpha}. Must be a boolean.`)}if(i.audio){if(typeof i.audio.codec!="string")throw new TypeError(`Invalid audio codec: ${i.audio.codec}. Must be a string.`);if(!Number.isInteger(i.audio.numberOfChannels)||i.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${i.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(i.audio.sampleRate)||i.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${i.audio.sampleRate}. Must be a positive integer.`);if(i.audio.bitDepth!==void 0&&(!Number.isInteger(i.audio.bitDepth)||i.audio.bitDepth<=0))throw new TypeError(`Invalid audio bit depth: ${i.audio.bitDepth}. Must be a positive integer.`)}if(i.subtitles&&typeof i.subtitles.codec!="string")throw new TypeError(`Invalid subtitles codec: ${i.subtitles.codec}. Must be a string.`);if(i.type!==void 0&&!["webm","matroska"].includes(i.type))throw new TypeError(`Invalid type: ${i.type}. Must be 'webm' or 'matroska'.`);if(i.firstTimestampBehavior&&!_w.includes(i.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${i.firstTimestampBehavior}`);if(i.streaming!==void 0&&typeof i.streaming!="boolean")throw new TypeError(`Invalid streaming option: ${i.streaming}. Must be a boolean.`)};xu=new WeakSet;Rm=function(){C(this,Rt)instanceof ra&&C(this,Rt).target.options.onHeader&&C(this,Rt).startTrackingWrites(),Ct(this,cd,Pm).call(this),C(this,zt).streaming||Ct(this,dd,Lm).call(this),Ct(this,fd,Im).call(this),Ct(this,hd,Fm).call(this),Ct(this,ud,Dm).call(this),C(this,zt).streaming||(Ct(this,Zl,pd).call(this),Ct(this,Ql,md).call(this)),Ct(this,gd,Um).call(this),Ct(this,ws,pr).call(this)};cd=new WeakSet;Pm=function(){let i={id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:C(this,zt).type??"webm"},{id:17031,data:2},{id:17029,data:2}]};C(this,Rt).writeEBML(i)};hd=new WeakSet;Fm=function(){jt(this,kr,{id:236,size:4,data:new Uint8Array(Uo)}),jt(this,ts,{id:236,size:4,data:new Uint8Array(Uo)}),jt(this,br,{id:236,size:4,data:new Uint8Array(Uo)})};ud=new WeakSet;Dm=function(){jt(this,Is,{id:21936,data:[{id:21937,data:2},{id:21946,data:2},{id:21947,data:2},{id:21945,data:0}]})};dd=new WeakSet;Lm=function(){const i=new Uint8Array([28,83,187,107]),t=new Uint8Array([21,73,169,102]),e=new Uint8Array([22,84,174,107]);jt(this,vi,{id:290298740,data:[{id:19899,data:[{id:21419,data:i},{id:21420,size:5,data:0}]},{id:19899,data:[{id:21419,data:t},{id:21420,size:5,data:0}]},{id:19899,data:[{id:21419,data:e},{id:21420,size:5,data:0}]}]})};fd=new WeakSet;Im=function(){let i={id:17545,data:new sd(0)};jt(this,fr,i);let t={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:Np},{id:22337,data:Np},C(this,zt).streaming?null:i]};jt(this,Zo,t)};Zl=new WeakSet;pd=function(){let i={id:374648427,data:[]};jt(this,Br,i),C(this,zt).video&&i.data.push({id:174,data:[{id:215,data:Or},{id:29637,data:Or},{id:131,data:fw},{id:134,data:C(this,zt).video.codec},C(this,kr),C(this,zt).video.frameRate?{id:2352003,data:1e9/C(this,zt).video.frameRate}:null,{id:224,data:[{id:176,data:C(this,zt).video.width},{id:186,data:C(this,zt).video.height},C(this,zt).video.alpha?{id:21440,data:1}:null,C(this,Is)]}]}),C(this,zt).audio&&(jt(this,ts,C(this,zt).streaming?C(this,ts)||null:{id:236,size:4,data:new Uint8Array(Uo)}),i.data.push({id:174,data:[{id:215,data:Ko},{id:29637,data:Ko},{id:131,data:pw},{id:134,data:C(this,zt).audio.codec},C(this,ts),{id:225,data:[{id:181,data:new _m(C(this,zt).audio.sampleRate)},{id:159,data:C(this,zt).audio.numberOfChannels},C(this,zt).audio.bitDepth?{id:25188,data:C(this,zt).audio.bitDepth}:null]}]})),C(this,zt).subtitles&&i.data.push({id:174,data:[{id:215,data:Ll},{id:29637,data:Ll},{id:131,data:mw},{id:134,data:C(this,zt).subtitles.codec},C(this,br)]})};Ql=new WeakSet;md=function(){let i={id:408125543,size:C(this,zt).streaming?-1:Tm,data:[C(this,zt).streaming?null:C(this,vi),C(this,Zo),C(this,Br)]};if(jt(this,Jo,i),C(this,Rt).writeEBML(i),C(this,Rt)instanceof ra&&C(this,Rt).target.options.onHeader){let{data:t,start:e}=C(this,Rt).getTrackedWrites();C(this,Rt).target.options.onHeader(t,e)}};gd=new WeakSet;Um=function(){jt(this,Sr,{id:475249515,data:[]})};ws=new WeakSet;pr=function(){C(this,Rt)instanceof ld&&C(this,Rt).flush()};Es=new WeakSet;mr=function(){return C(this,Rt).dataOffsets.get(C(this,Jo))};yu=new WeakSet;Nm=function(i){if(i.decoderConfig){if(i.decoderConfig.colorSpace){let t=i.decoderConfig.colorSpace;if(jt(this,Qo,t),C(this,Is).data=[{id:21937,data:{rgb:1,bt709:1,bt470bg:5,smpte170m:6}[t.matrix]},{id:21946,data:{bt709:1,smpte170m:6,"iec61966-2-1":13}[t.transfer]},{id:21947,data:{bt709:1,bt470bg:5,smpte170m:6}[t.primaries]},{id:21945,data:[1,2][Number(t.fullRange)]}],!C(this,zt).streaming){let e=C(this,Rt).pos;C(this,Rt).seek(C(this,Rt).offsets.get(C(this,Is))),C(this,Rt).writeEBML(C(this,Is)),C(this,Rt).seek(e)}}i.decoderConfig.description&&(C(this,zt).streaming?jt(this,kr,Ct(this,Ar,ta).call(this,i.decoderConfig.description)):Ct(this,ko,Ul).call(this,C(this,kr),i.decoderConfig.description))}};Mu=new WeakSet;Om=function(i){if(i.type!=="key"||!C(this,Qo))return;let t=0;if(rr(i.data,0,2)!==2)return;t+=2;let e=(rr(i.data,t+1,t+2)<<1)+rr(i.data,t+0,t+1);t+=2,e===3&&t++;let n=rr(i.data,t+0,t+1);if(t++,n)return;let s=rr(i.data,t+0,t+1);if(t++,s!==0)return;t+=2;let r=rr(i.data,t+0,t+24);if(t+=24,r!==4817730)return;e>=2&&t++;let o={rgb:7,bt709:2,bt470bg:1,smpte170m:3}[C(this,Qo).matrix];ow(i.data,t+0,t+3,o)};yo=new WeakSet;ul=function(){let i=Math.min(C(this,zt).video?C(this,Er):1/0,C(this,zt).audio?C(this,Tr):1/0),t=C(this,Ss);for(;t.length>0&&t[0].timestamp<=i;)Ct(this,$n,_i).call(this,t.shift(),!C(this,zt).video&&!C(this,zt).audio)};Mo=new WeakSet;dl=function(i,t,e,n,s,r){let o=Ct(this,_d,Bm).call(this,e,n);return{data:i,additions:r,type:t,timestamp:o,duration:s,trackNumber:n}};_d=new WeakSet;Bm=function(i,t){let e=t===Or?C(this,Er):t===Ko?C(this,Tr):C(this,Il);if(t!==Ll){let n=t===Or?C(this,No):C(this,Oo);if(C(this,zt).firstTimestampBehavior==="strict"&&e===-1&&i!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received ${i}). Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of the document, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
If you want to allow non-zero first timestamps, set firstTimestampBehavior: 'permissive'.
`);C(this,zt).firstTimestampBehavior==="offset"&&(i-=n)}if(i<e)throw new Error(`Timestamps must be monotonically increasing (went from ${e} to ${i}).`);if(i<0)throw new Error(`Timestamps must be non-negative (received ${i}).`);return i};$n=new WeakSet;_i=function(i,t){C(this,zt).streaming&&!C(this,Br)&&(Ct(this,Zl,pd).call(this),Ct(this,Ql,md).call(this));let e=Math.floor(i.timestamp/1e3),n=e-C(this,oa),s=t&&i.type==="key"&&n>=1e3,r=n>=gw;if((!C(this,Zn)||s||r)&&(Ct(this,vd,km).call(this,e),n=0),n<0)return;let o=new Uint8Array(4),a=new DataView(o.buffer);if(a.setUint8(0,128|i.trackNumber),a.setInt16(1,n,!1),i.duration===void 0&&!i.additions){a.setUint8(3,+(i.type==="key")<<7);let l={id:163,data:[o,i.data]};C(this,Rt).writeEBML(l)}else{let l=Math.floor(i.duration/1e3),c={id:160,data:[{id:161,data:[o,i.data]},i.duration!==void 0?{id:155,data:l}:null,i.additions?{id:30113,data:i.additions}:null]};C(this,Rt).writeEBML(c)}jt(this,wr,Math.max(C(this,wr),e))};Ar=new WeakSet;ta=function(i){return{id:25506,size:4,data:new Uint8Array(i)}};ko=new WeakSet;Ul=function(i,t){let e=C(this,Rt).pos;C(this,Rt).seek(C(this,Rt).offsets.get(i));let n=6+t.byteLength,s=Uo-n;if(s<0){let r=t.byteLength+s;t instanceof ArrayBuffer?t=t.slice(0,r):t=t.buffer.slice(0,r),s=0}i=[Ct(this,Ar,ta).call(this,t),{id:236,size:4,data:new Uint8Array(s)}],C(this,Rt).writeEBML(i),C(this,Rt).seek(e)};vd=new WeakSet;km=function(i){C(this,Zn)&&Ct(this,Nl,xd).call(this),C(this,Rt)instanceof ra&&C(this,Rt).target.options.onCluster&&C(this,Rt).startTrackingWrites(),jt(this,Zn,{id:524531317,size:C(this,zt).streaming?-1:Am,data:[{id:231,data:i}]}),C(this,Rt).writeEBML(C(this,Zn)),jt(this,oa,i);let t=C(this,Rt).offsets.get(C(this,Zn))-C(this,Es,mr);C(this,Sr).data.push({id:187,data:[{id:179,data:i},C(this,zt).video?{id:183,data:[{id:247,data:Or},{id:241,data:t}]}:null,C(this,zt).audio?{id:183,data:[{id:247,data:Ko},{id:241,data:t}]}:null]})};Nl=new WeakSet;xd=function(){if(!C(this,zt).streaming){let i=C(this,Rt).pos-C(this,Rt).dataOffsets.get(C(this,Zn)),t=C(this,Rt).pos;C(this,Rt).seek(C(this,Rt).offsets.get(C(this,Zn))+4),C(this,Rt).writeEBMLVarInt(i,Am),C(this,Rt).seek(t)}if(C(this,Rt)instanceof ra&&C(this,Rt).target.options.onCluster){let{data:i,start:t}=C(this,Rt).getTrackedWrites();C(this,Rt).target.options.onCluster(i,t,C(this,oa))}};bo=new WeakSet;fl=function(){if(C(this,Bo))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};new TextEncoder;const xw=130,Hi=60/xw,Op=2/3,yw=.25,Bp=[[1,1],[2.76,.45],[5.4,.22],[8.9,.1]],kn=i=>440*Math.pow(2,(i-69)/12),Mw=[{bass:38,fifth:45,notes:[62,65,69]},{bass:34,fifth:41,notes:[58,62,65]},{bass:31,fifth:38,notes:[58,62,67]},{bass:33,fifth:40,notes:[57,61,64,67]}],kp=[[74,null,77,76,74,null,69,null],[70,null,74,72,70,69,70,null],[67,null,70,69,67,null,62,null],[69,73,76,73,69,null,64,61]],bw=[[81,79,77,null,76,77,74,null],[74,null,77,74,70,null,72,74],[79,null,77,74,70,67,70,null],[73,null,76,79,81,null,76,null]];class tc{constructor(){this.ctx=null,this.musicVolume=.7,this.sfxVolume=.9,this.intensity="calm",this.playing=!1,this.step=0,this.nextTime=0,this.paused=!1,this.clock=null}get ready(){return!!this.ctx}init(){if(this.ctx){this.ctx.state==="suspended"&&!this.paused&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this._build(new t({latencyHint:"interactive"})),this.recDest=this.ctx.createMediaStreamDestination(),this.master.connect(this.recDest))}_build(t){this.ctx=t,this.master=t.createGain(),this.master.gain.value=.9,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.knee.value=12,this.comp.ratio.value=4,this.comp.attack.value=.004,this.comp.release.value=.18,this.bus=t.createGain(),this.musicGain=t.createGain(),this.sfxGain=t.createGain(),this.musicBus=t.createGain(),this.musicBus.gain.value=0,this.musicBus.connect(this.musicGain),this.musicGain.connect(this.bus),this.sfxGain.connect(this.bus),this.bus.connect(this.comp),this.comp.connect(this.master),this.master.connect(t.destination);const e=t.sampleRate*2;this.noise=t.createBuffer(1,e,t.sampleRate);const n=this.noise.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;this.dist=t.createWaveShaper(),this.dist.curve=this._curve(18),this.dist.oversample="2x",this.distGain=t.createGain(),this.distGain.gain.value=0,this.dist.connect(this.distGain),this.distGain.connect(this.musicBus),this.delay=t.createDelay(1),this.delay.delayTime.value=Hi*.75,this.fb=t.createGain(),this.fb.gain.value=.28,this.delayLP=t.createBiquadFilter(),this.delayLP.type="lowpass",this.delayLP.frequency.value=2600,this.delay.connect(this.delayLP),this.delayLP.connect(this.fb),this.fb.connect(this.delay),this.delayLP.connect(this.musicBus),this.setMusicVolume(this.musicVolume),this.setSfxVolume(this.sfxVolume)}static renderOffline(t,e,{musicVolume:n,sfxVolume:s},r,o){const l=new OfflineAudioContext(1,Math.max(1,Math.ceil(e*48e3)),48e3),c=new tc;c.musicVolume=n,c.sfxVolume=s,c.clock=0,c._build(l);let h=0,u=0;const d=p=>{for(;u<p;u+=.05){for(;h<t.length&&t[h].t<=u;){const _=t[h++];c.clock=_.t,c[_.name](..._.args)}c.clock=u,c.update()}},f=1;return d(f*2),new Promise((p,_)=>{for(let g=f;g<e;g+=f)l.suspend(g).then(()=>{if(o&&o()){_(new Error("cancelled"));return}d(g+f*2),r&&r(g/e),l.resume()});l.startRendering().then(p,_)})}_now(){return this.clock!=null?this.clock:this.ctx.currentTime}_curve(t){const n=new Float32Array(1024);for(let s=0;s<1024;s++){const r=s/1023*2-1;n[s]=(1+t)*r/(1+t*Math.abs(r))}return n}setMusicVolume(t){this.musicVolume=t,this.musicGain&&this.musicGain.gain.setTargetAtTime(t*.75,this._now(),.05)}setSfxVolume(t){this.sfxVolume=t,this.sfxGain&&this.sfxGain.gain.setTargetAtTime(t,this._now(),.05)}setPaused(t){this.paused=t,this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}startMusic(t="normal"){if(!this.ctx)return;this.setIntensity(t);const e=this._now();this.playing||(this.playing=!0,this.step=0,this.nextTime=e+.08),this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setTargetAtTime(1,e,.08)}stopMusic(t=.6){if(!this.ctx||!this.playing)return;const e=this._now();this.musicBus.gain.cancelScheduledValues(e),this.musicBus.gain.setTargetAtTime(0,e,t/3),this.playing=!1}setIntensity(t){this.intensity=t,this.distGain&&this.distGain.gain.setTargetAtTime(t==="heavy"?.22:0,this._now(),.2)}update(){if(!this.ctx||!this.playing||this.paused)return;const t=this._now();for(this.nextTime<t-.2&&(this.nextTime=t+.02);this.nextTime<t+yw;){this._scheduleStep(this.step,this.nextTime);const e=this.step%2===0;this.nextTime+=e?Hi*Op:Hi*(1-Op),this.step++}}_scheduleStep(t,e){const n=this.intensity,s=n==="heavy",r=n==="calm",o=Math.floor(t/8),a=t%8,l=a>>1,c=a%2===1,h=Mw[o%4],u=Math.floor(o/4)%2;if(c||(!r&&(s||l===0||l===2)&&this._kick(e,s?1:.9),r&&l===0&&this._kick(e,.5),!r&&(l===1||l===3)&&this._snare(e,s?.9:.7)),this._hat(e,c?.16:.1,c&&!r),s&&c&&l===3&&this._snare(e,.35),c)!r&&l===3&&this._bass(e,h.bass+12,Hi*.25,.5,s);else{const d=l%2===0?h.bass:h.fifth;this._bass(e,d,Hi*.8,r?.5:.85,s)}if(!r&&c&&(l===1||l===3)&&this._stab(e,h.notes,s?.24:.2),r&&a===0&&this._pad(e,h.notes,Hi*4),r){if(o%2===0&&(a===0||a===3||a===6)){const d=kp[o%4][a];d&&this._lead(e,d,Hi*.9,.07,!0)}}else{const f=(u?bw:kp)[o%4][a];f&&this._lead(e,f+(s&&u?12:0),Hi*.45,.16)}}_env(t,e,n,s,r,o=1e-4){t.gain.setValueAtTime(1e-4,e),t.gain.linearRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(Math.max(1e-4,o),e+n+r)}_osc(t,e,n,s){const r=this.ctx.createOscillator();return r.type=t,r.frequency.setValueAtTime(e,n),r.start(n),r.stop(n+s+.05),r.onended=()=>r.disconnect(),r}_free(t,...e){t.onended=()=>{t.disconnect();for(const n of e)n.disconnect()}}_noiseSrc(t,e){const n=this.ctx.createBufferSource();return n.buffer=this.noise,n.start(t,Math.random()*1.5),n.stop(t+e+.05),n.onended=()=>n.disconnect(),n}_kick(t,e){const n=this.ctx,s=this._osc("sine",160,t,.4);s.frequency.exponentialRampToValueAtTime(42,t+.14);const r=n.createGain();this._env(r,t,.003,e,.32),s.connect(r).connect(this.musicBus),this._free(s,r)}_snare(t,e){const n=this.ctx,s=this._noiseSrc(t,.2),r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=1900,r.Q.value=.8;const o=n.createGain();this._env(o,t,.002,e*.55,.16),s.connect(r).connect(o).connect(this.musicBus),this._free(s,r,o);const a=this._osc("triangle",220,t,.1);a.frequency.exponentialRampToValueAtTime(140,t+.08);const l=n.createGain();this._env(l,t,.002,e*.35,.08),a.connect(l).connect(this.musicBus),this._free(a,l)}_hat(t,e,n){const s=this.ctx,r=this._noiseSrc(t,n?.14:.05),o=s.createBiquadFilter();o.type="highpass",o.frequency.value=7500;const a=s.createGain();this._env(a,t,.001,e*.5,n?.12:.04),r.connect(o).connect(a).connect(this.musicBus),this._free(r,o,a)}_bass(t,e,n,s,r){const o=this.ctx,a=this._osc("sawtooth",kn(e),t,n),l=this._osc("square",kn(e-12),t,n),c=o.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(r?1400:900,t),c.frequency.exponentialRampToValueAtTime(220,t+n),c.Q.value=4;const h=o.createGain();this._env(h,t,.005,s*.42,n),a.connect(c),l.connect(c),c.connect(h),h.connect(this.musicBus),r&&h.connect(this.dist),this._free(l,c,h)}_stab(t,e,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(3200,t),r.frequency.exponentialRampToValueAtTime(700,t+.18);const o=s.createGain();this._env(o,t,.004,n,.2);let a;for(const l of e)a=this._osc("sawtooth",kn(l),t,.25),a.detune.value=(Math.random()-.5)*14,a.connect(r);r.connect(o),o.connect(this.musicBus),o.connect(this.delay),this._free(a,r,o)}_pad(t,e,n){const s=this.ctx,r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=1100;const o=s.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(.07,t+.4),o.gain.linearRampToValueAtTime(1e-4,t+n);let a;for(const l of e)a=this._osc("triangle",kn(l),t,n),a.detune.value=(Math.random()-.5)*10,a.connect(r);r.connect(o).connect(this.musicBus),this._free(a,r,o)}_lead(t,e,n,s,r=!1){const o=this.ctx,a=this._osc(r?"sine":"square",kn(e),t,n+.1),l=this._osc("sine",6,t,n+.1),c=o.createGain();c.gain.value=kn(e)*.012,l.connect(c).connect(a.frequency);const h=o.createBiquadFilter();h.type="lowpass",h.frequency.value=r?1800:2600;const u=o.createGain();this._env(u,t,.01,s,n,s*.1),u.gain.exponentialRampToValueAtTime(1e-4,t+n+.08),a.connect(h).connect(u),u.connect(this.musicBus),u.connect(this.delay),this._free(a,c,h,u)}play(t){if(!this.ctx||this.paused)return;const e=this._now()+.005,n=this["_sfx_"+t];n&&n.call(this,e)}_out(){return this.sfxGain}_sfx_jump(t){const e=this.ctx,n=this._osc("sine",180,t,.45);n.frequency.exponentialRampToValueAtTime(720,t+.16),n.frequency.exponentialRampToValueAtTime(420,t+.4);const s=this._osc("sine",22,t,.45),r=e.createGain();r.gain.value=40,s.connect(r).connect(n.frequency);const o=e.createGain();this._env(o,t,.01,.4,.42),n.connect(o).connect(this._out()),this._free(n,r,o),this._sfx_whoosh(t,.25)}_sfx_whoosh(t,e=.45,n=.38,s=400,r=2400){const o=this.ctx,a=this._noiseSrc(t,n),l=o.createBiquadFilter();l.type="bandpass",l.Q.value=1.2,l.frequency.setValueAtTime(s,t),l.frequency.exponentialRampToValueAtTime(r,t+n*.45),l.frequency.exponentialRampToValueAtTime(s*.8,t+n);const c=o.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(e,t+n*.4),c.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(l).connect(c).connect(this._out()),this._free(a,l,c)}_sfx_duck(t){this._sfx_whoosh(t,.5,.4,1800,300)}_sfx_dodge(t){this._sfx_whoosh(t,.5,.32,500,3e3)}_sfx_punch(t){const e=this.ctx,n=this._osc("sine",140,t,.3);n.frequency.exponentialRampToValueAtTime(38,t+.18);const s=e.createGain();this._env(s,t,.002,1,.26),n.connect(s).connect(this._out()),this._free(n,s);const r=this._noiseSrc(t,.2),o=e.createWaveShaper();o.curve=this._curve(40);const a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=1400,a.Q.value=.7;const l=e.createGain();this._env(l,t,.001,.55,.14),r.connect(o).connect(a).connect(l).connect(this._out()),this._free(r,o,a,l);const c=this._osc("square",900,t+.02,.16);c.frequency.exponentialRampToValueAtTime(160,t+.16);const h=e.createGain();this._env(h,t+.02,.002,.1,.12),c.connect(h).connect(this._out()),this._free(c,h)}_bell(t,e,n,s){const r=this.ctx,o=r.createGain();this._env(o,t,.003,n,s),Bp.forEach(([a,l],c)=>{const h=this._osc("sine",e*a,t,s),u=r.createGain();u.gain.value=l,h.connect(u).connect(o),c===Bp.length-1?this._free(h,u,o):this._free(h,u)}),o.connect(this._out())}_sfx_chime(t){this._bell(t,1568,.32,1.2),this._bell(t+.09,2093,.26,1.3),this._sfx_whoosh(t+.02,.35,.5,600,3500)}_sfx_beep(t){const e=this._osc("square",880,t,.16),n=this.ctx.createGain();this._env(n,t,.003,.22,.15),e.connect(n).connect(this._out()),this._free(e,n)}_sfx_go(t){for(const[e,n]of[[1320,0],[1760,.04],[2640,.08]]){const s=this._osc("square",e,t+n,.5),r=this.ctx.createGain();this._env(r,t+n,.003,.14,.45),s.connect(r).connect(this._out()),this._free(s,r)}}_sfx_stinger(t){const e=this.ctx,n=e.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(400,t),n.frequency.exponentialRampToValueAtTime(3500,t+.08),n.frequency.exponentialRampToValueAtTime(900,t+.9);const s=e.createGain();this._env(s,t,.02,.3,1);let r;for(const c of[50,57,62,65,69])for(const h of[-8,8])r=this._osc("sawtooth",kn(c),t,1.1),r.detune.value=h,r.connect(n);n.connect(s).connect(this._out()),this._free(r,n,s);const o=this._noiseSrc(t,1.4),a=e.createBiquadFilter();a.type="highpass",a.frequency.value=5e3;const l=e.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(.25,t+.05),l.gain.exponentialRampToValueAtTime(1e-4,t+1.3),o.connect(a).connect(l).connect(this._out()),this._free(o,a,l),this._kickSfx(t)}_kickSfx(t){const e=this._osc("sine",150,t,.4);e.frequency.exponentialRampToValueAtTime(40,t+.2);const n=this.ctx.createGain();this._env(n,t,.002,.8,.35),e.connect(n).connect(this._out()),this._free(e,n)}_sfx_victory(t){const e=[62,66,69,74,78,81];e.forEach((s,r)=>{const o=t+r*.1,a=this._osc("square",kn(s),o,.3),l=this.ctx.createGain();this._env(l,o,.004,.13,.26),a.connect(l).connect(this._out()),this._free(a,l)});const n=t+e.length*.1;for(const s of[62,66,69,74]){const r=this._osc("sawtooth",kn(s),n,1.2),o=this.ctx.createGain();this._env(o,n,.01,.08,1.1),r.connect(o).connect(this._out()),this._free(r,o)}this._bell(n,kn(86),.25,1.5)}_sfx_hit(t){const e=this.ctx,n=this._osc("sawtooth",220,t,.45);n.frequency.exponentialRampToValueAtTime(55,t+.4);const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900;const r=e.createGain();this._env(r,t,.004,.45,.42),n.connect(s).connect(r).connect(this._out()),this._free(n,s,r),this._kickSfx(t)}_sfx_click(t){const e=this._osc("triangle",1200,t,.06);e.frequency.exponentialRampToValueAtTime(700,t+.05);const n=this.ctx.createGain();this._env(n,t,.001,.18,.05),e.connect(n).connect(this._out()),this._free(e,n)}_sfx_gameover(t){[62,61,60,59].forEach((e,n)=>{const s=t+n*.28,r=this._osc("triangle",kn(e),s,.4),o=this.ctx.createGain();this._env(o,s,.01,.25,n===3?.9:.3),r.connect(o).connect(this._out()),this._free(r,o)})}}const gi=60,fo=48e3,Sw=2*gi,zp=["play","startMusic","stopMusic","setIntensity"],Vp=["init","update","setPaused","setMusicVolume","setSfxVolume"],bu={"1280x720":{label:"1280 × 720 (HD)",size:[1280,720],bitrate:8e6},"1920x1080":{label:"1920 × 1080 (Full HD)",size:[1920,1080],bitrate:14e6},"1080x1920":{label:"1080 × 1920 (Vertical)",size:[1080,1920],bitrate:14e6}},ww=["avc1.64002A","avc1.4D402A","avc1.42E02A","avc1.640033","avc1.4D4033"],Ew=[["vp09.00.41.08","V_VP9"],["vp8","V_VP8"]];class Hp extends Error{}class Tw{constructor(){this.parts=[],this.starts=[],this.size=0}write(t,e){let n=0;if(e<this.size)for(let s=0;s<this.parts.length&&n<t.length;s++){const r=this.parts[s],o=this.starts[s],a=e+n;if(o+r.length<=a)continue;if(o>=e+t.length)break;const l=a-o,c=Math.min(r.length-l,t.length-n);r.set(t.subarray(n,n+c),l),n+=c}if(n<t.length){const s=e+n;s>this.size&&this._push(new Uint8Array(s-this.size)),this._push(t.slice(n))}}_push(t){this.parts.push(t),this.starts.push(this.size),this.size+=t.length}}const nh=(()=>{const i=new MessageChannel,t=[];return i.port1.onmessage=()=>t.shift()(),()=>new Promise(e=>{t.push(e),i.port2.postMessage(0)})})(),Gp=i=>(i=Math.max(0,Math.round(i)),`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`);class yd{constructor(t){this.g=t,this.busy=!1,this.cancelled=!1,this._buildUi()}static supported(){return typeof VideoEncoder<"u"&&typeof VideoFrame<"u"&&typeof OfflineAudioContext<"u"}_buildUi(){const t=document.createElement("div");t.className="export-overlay hidden",t.innerHTML=`
      <div class="panel export-panel">
        <h2 class="panel-title">EXPORTING VIDEO</h2>
        <div class="export-phase">Preparing…</div>
        <div class="export-bar"><div class="export-fill"></div></div>
        <div class="export-meta"><b class="export-pct">0%</b><span class="export-eta"></span></div>
        <div class="hint export-note">Rendering runs faster or slower than real time depending on your PC. The video is always a smooth 60 fps.</div>
        <div class="panel-buttons"><button class="btn btn-red export-btn">✕ CANCEL</button></div>
      </div>`,(this.g.ui||document.body).appendChild(t),this.el=t,this.elPhase=t.querySelector(".export-phase"),this.elFill=t.querySelector(".export-fill"),this.elPct=t.querySelector(".export-pct"),this.elEta=t.querySelector(".export-eta"),this.elNote=t.querySelector(".export-note"),this.elBtn=t.querySelector(".export-btn"),this.elBtn.addEventListener("click",()=>{this.busy?this.cancelled=!0:this._close()})}_open(){this.el.classList.remove("hidden"),this.el.classList.remove("done"),this.elBtn.innerHTML="✕ CANCEL",this.elNote.textContent="Rendering runs faster or slower than real time depending on your PC. The video is always a smooth 60 fps.",this._progress(0,"Preparing…")}_close(){this.el.classList.add("hidden"),this.g.menus.show("title")}_finishUi(t){this.el.classList.add("done"),this.elBtn.innerHTML="OK",this.elEta.textContent="",this.elNote.textContent=t,this.elBtn.focus({preventScroll:!0})}_progress(t,e){e&&e!==this._phase&&(this._phase=e,this.elPhase.textContent=e),t=Math.min(1,Math.max(0,t)),this.elFill.style.width=(t*100).toFixed(1)+"%",this.elPct.textContent=Math.floor(t*100)+"%";const n=(performance.now()-this.t0)/1e3;this.elEta.textContent=t>.03&&t<1?`ETA ${Gp(n*(1-t)/t)} · elapsed ${Gp(n)}`:""}_check(){if(this.cancelled)throw new Hp}async _pickFormat(t,e,n){const s={width:t,height:e,bitrate:n,framerate:gi,latencyMode:"quality"},r=async(f,p)=>{try{return(await f.isConfigSupported(p)).supported?p:null}catch{return null}};let o=null;for(const f of ww)if(o=await r(VideoEncoder,{...s,codec:f,avc:{format:"avc"}}))break;const a=typeof AudioEncoder<"u",l={sampleRate:fo,numberOfChannels:2},c=a?await r(AudioEncoder,{...l,codec:"mp4a.40.2",bitrate:192e3}):null;if(o&&c)return{kind:"mp4",video:o,audio:c};let h=null,u="";for(const[f,p]of Ew)if(h=await r(VideoEncoder,{...s,codec:f})){u=p;break}const d=a?await r(AudioEncoder,{...l,codec:"opus",bitrate:16e4}):null;return h&&d?{kind:"webm",video:h,audio:d,vName:u}:o?{kind:"mp4",video:o,audio:null}:h?{kind:"webm",video:h,audio:null,vName:u}:null}async start(t){if(this.busy)return;const e=this.g;if(!yd.supported()){alert("Export Video needs WebCodecs (Chrome or Edge 94+). Use RECORD instead in this browser.");return}const n=bu[t]||bu["1920x1080"],[s,r]=n.size,o=await this._pickFormat(s,r,n.bitrate);if(!o){alert("This browser cannot encode video at that size. Try 1280 × 720, or use RECORD.");return}this.busy=!0,this.cancelled=!1,this.t0=performance.now(),e.menus.hide(),this._open();const a=e.audio,l=a.paused;a.setPaused(!0),e.loop.stop(),e.recorder.recording&&e.stopRecording();const c=[];let h=!1;for(const g of zp)a[g]=(...m)=>h&&c.push({t:e.simTime,name:g,args:m});for(const g of Vp)a[g]=()=>{};let u=null,d=null,f=null,p=null,_=null;try{h=!0,this._startRun();let g=0;for(;e.state==="run"&&g<3600;)g+=1/gi,e.time=g,e.simulate(g);h=!1;const m=e.simTime,M=Math.max(1,Math.round(m*gi));await nh(),this._check();const x=[];if(o.audio){this._progress(.01,"Rendering soundtrack…");const k=await tc.renderOffline(c,m,{musicVolume:e.settings.musicVolume,sfxVolume:e.settings.sfxVolume},j=>this._progress(.01+j*.06),()=>this.cancelled);this._check(),this._progress(.07,"Encoding soundtrack…");let W=null;f=new AudioEncoder({output:(j,X)=>x.push([j,X]),error:j=>W=j}),f.configure(o.audio);const Y=k.getChannelData(0),q=4800;for(let j=0;j<Y.length;j+=q){const X=Math.min(q,Y.length-j),ct=new Float32Array(X*2);ct.set(Y.subarray(j,j+X),0),ct.set(Y.subarray(j,j+X),X);const mt=new AudioData({format:"f32-planar",sampleRate:fo,numberOfFrames:X,numberOfChannels:2,timestamp:Math.round(j/fo*1e6),data:ct});f.encode(mt),mt.close(),f.encodeQueueSize>32&&await nh()}if(await f.flush(),W)throw W;f.close(),f=null}this._check();const v=new Tw,I=(k,W)=>v.write(k,W);let T;o.kind==="mp4"?T=new sw({target:new Yu({onData:I,chunked:!0,chunkSize:8*1024*1024}),video:{codec:"avc",width:s,height:r,frameRate:gi},audio:o.audio?{codec:"aac",numberOfChannels:2,sampleRate:fo}:void 0,fastStart:!1,firstTimestampBehavior:"offset"}):T=new vw({target:new rd({onData:I,chunked:!0,chunkSize:8*1024*1024}),video:{codec:o.vName,width:s,height:r,frameRate:gi},audio:o.audio?{codec:"A_OPUS",numberOfChannels:2,sampleRate:fo}:void 0,firstTimestampBehavior:"offset"});for(const[k,W]of x)T.addAudioChunk(k,W);x.length=0;let R=null;u=new VideoEncoder({output:(k,W)=>T.addVideoChunk(k,W),error:k=>R=k}),u.configure(o.video),e.settings.quality!=="high"&&(d=e.settings.quality,e.settings.quality="high",e.applySettings()),e.renderer.setDynScale(1),e.renderer.setResolution(`${s}x${r}`),this._startRun();const F=.08;let w=performance.now();for(let k=0;k<M;k++){e.frame(k===0?0:1/gi);const W=new VideoFrame(e.canvas,{timestamp:Math.round(k*1e6/gi),duration:Math.round(1e6/gi)});if(u.encode(W,{keyFrame:k%Sw===0}),W.close(),R)throw R;for(;u.encodeQueueSize>6;)await new Promise(q=>u.addEventListener("dequeue",q,{once:!0}));performance.now()-w>120&&(this._progress(F+k/M*.9,`Rendering video… frame ${k+1} / ${M}`),await nh(),w=performance.now(),this._check())}if(this._progress(.985,"Finishing file…"),await u.flush(),R)throw R;u.close(),u=null,T.finalize();const y=o.kind;p=`pumpkin-dash-${String(e.settings.seed).replace(/[^\w-]+/g,"_")||"run"}-${s}x${r}-${Cw()}.${y}`;const V=new Blob(v.parts,{type:y==="mp4"?"video/mp4":"video/webm"});v.parts.length=0,Aw(V,p),this._progress(1,"Done!")}catch(g){_=g}finally{for(const g of[u,f])if(g&&g.state!=="closed")try{g.close()}catch{}for(const g of zp.concat(Vp))delete a[g];d&&(e.settings.quality=d,e.applySettings()),e.renderer.setResolution(e.settings.resolution),e.enterMenu(!0),e.menus.hide(),a.setPaused(l),e.loop.start(),this.busy=!1}if(_ instanceof Hp||_&&_.message==="cancelled")this._close();else if(_)console.error("export failed",_),this._progress(0,"Export failed"),this._finishUi(`Something went wrong: ${_.message||_}. Try a smaller size, or use RECORD.`);else{const g=o.audio?"":" (this browser has no audio encoder, so the file is silent)";this._finishUi(`🎬 Saved ${p}${g}`)}}_startRun(){const t=this.g;t.startRun("auto"),t.menus.setRunBar(!1),t.input.showTouch(!1)}}function Aw(i,t){const e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(e),6e4)}function Cw(){const i=new Date,t=e=>String(e).padStart(2,"0");return`${i.getFullYear()}${t(i.getMonth()+1)}${t(i.getDate())}-${t(i.getHours())}${t(i.getMinutes())}`}const Rw='<svg viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="38" rx="27" ry="21" fill="#FF5E00"/><ellipse cx="20" cy="38" rx="9" ry="19" fill="#FF7A14" opacity=".55"/><ellipse cx="44" cy="38" rx="9" ry="19" fill="#E04A00" opacity=".55"/><rect x="29" y="8" width="6" height="13" rx="2" fill="#3D6B22"/><path d="M17 33l7-8 7 8zM33 33l7-8 7 8z" fill="#FFE600"/><path d="M16 43h32l-5 9h-6l-2-4-3 4h-6l-3-4-2 4h-1z" fill="#FFE600"/></svg>',po=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);class Pw{constructor(t,{settings:e,rounds:n,onAction:s,onSettings:r}){this.root=t,this.settings=e,this.rounds=n,this.onAction=s,this.onSettings=r,this.screens={},this.current=null,this.back="title",this._buildTitle(),this._buildSettings(),this._buildExport(),this._buildPause(),this._buildEnd("gameover"),this._buildEnd("victory"),this.runBar=ue("div","run-bar hidden"),this.pauseBtn=ue("button","icon-btn pause-btn","❚❚"),this.pauseBtn.setAttribute("aria-label","Pause"),this.pauseBtn.addEventListener("click",()=>this.onAction("pause")),this.recBadge=ue("button","rec-badge hidden",'<span class="rec-dot"></span>REC <span class="rec-stop">■ STOP</span>'),this.recBadge.addEventListener("click",()=>this.onAction("stopRec")),this.runBar.append(this.recBadge,this.pauseBtn),t.appendChild(this.runBar)}_btn(t,e,n,s){const r=ue("button","btn "+(e||""),t);return r.addEventListener("click",()=>{this.onAction("click"),this.onAction(n,typeof s=="function"?s():s)}),r}_screen(t,e=""){const n=ue("div","screen hidden "+e);return n.dataset.screen=t,this.root.appendChild(n),this.screens[t]=n,n}_buildTitle(){const t=this._screen("title","screen-title"),e=ue("div","title-panel");e.innerHTML=`
      <div class="logo">
        <div class="logo-pumpkin">${Rw}</div>
        <h1 class="logo-text"><span>PUMPKIN</span><span>DASH</span></h1>
        <div class="logo-sub">HALLOWEEN FITNESS RUN</div>
      </div>`;const n=ue("div","round-select"),s=ue("label","field-label","ROUNDS"),r=document.createElement("select");r.className="select",r.innerHTML=`<option value="all">ALL ROUNDS (${this.rounds.length})</option>`+this.rounds.map((l,c)=>`<option value="${c}">${po(l.label)} · ${po(l.title)}</option>`).join(""),r.value=String(this.settings.roundSelection),r.value!==String(this.settings.roundSelection)&&(r.value="all"),r.addEventListener("change",()=>{this.settings.roundSelection=r.value,this.onSettings(this.settings,"roundSelection")}),this.roundSelect=r,n.append(s,r);const o=ue("div","title-buttons");o.append(this._btn("▶ AUTO RUN","btn-primary","auto"),this._btn("🎮 PLAY","btn-green","play"),this._btn("⚙ SETTINGS","btn-ghost","settings"),this._btn('<span class="dot-red"></span> RECORD',"btn-red","record"),this._btn("🎬 EXPORT VIDEO","btn-orange","export"));const a=ue("div","hint","AUTO RUN = hands-free video mode · PLAY: ←→ / A D dodge · ↑ / W jump · ↓ / S duck · SPACE / F punch · ESC pause");e.append(n,o,a),t.appendChild(e)}_buildSettings(){const t=this._screen("settings"),e=ue("div","panel panel-wide");e.appendChild(ue("h2","panel-title","SETTINGS"));const n=ue("div","form"),s=this.settings,r=p=>this.onSettings(s,p),o=(p,_,g)=>{const m=ue("label","form-row");m.appendChild(ue("span","form-label",p)),m.appendChild(_),g&&m.appendChild(g),n.appendChild(m)},a=(p,_)=>{const g=document.createElement("select");return g.className="select",g.innerHTML=Object.entries(_).map(([m,M])=>`<option value="${m}">${po(M)}</option>`).join(""),g.value=s[p],g.addEventListener("change",()=>{s[p]=g.value,r(p)}),this.inputs[p]=g,g},l=(p,_,g,m,M)=>{const x=document.createElement("input");x.type="range",x.min=_,x.max=g,x.step=m,x.value=s[p];const v=ue("span","form-value",M(s[p]));return x.addEventListener("input",()=>{s[p]=Number(x.value),v.textContent=M(s[p]),r(p)}),x._sync=()=>v.textContent=M(s[p]),this.inputs[p]=x,[x,v]},c=(p,_,g)=>{const m=document.createElement("input");return m.type="text",m.className="text-input",m.placeholder=_,m.maxLength=g,m.value=s[p],m.addEventListener("change",()=>{s[p]=m.value.trim(),r(p)}),this.inputs[p]=m,m};this.inputs={},o("Quality",a("quality",Object.fromEntries(Object.entries(Ps).map(([p,_])=>[p,_.label])))),o("Resolution",a("resolution",Object.fromEntries(Object.entries(vr).map(([p,_])=>[p,_.label]))));const h=p=>Math.round(p*100)+"%";o("Music volume",...l("musicVolume",0,1,.05,h)),o("SFX volume",...l("sfxVolume",0,1,.05,h)),o("Round length",...l("roundLength",15,180,5,p=>p+" s")),o("Seed",c("seed","1031",24)),o("Watermark",c("watermark","your channel name (optional)",40));const u=document.createElement("input");u.type="checkbox",u.className="checkbox",u.checked=!!s.cleanRecording,u.addEventListener("change",()=>{s.cleanRecording=u.checked,r("cleanRecording")}),this.inputs.cleanRecording=u,o("Clean recording (hide cursor & buttons)",u);const d=document.createElement("input");d.type="checkbox",d.className="checkbox",d.checked=!!s.autoRes,d.addEventListener("change",()=>{s.autoRes=d.checked,r("autoRes")}),this.inputs.autoRes=d,o("Auto resolution (lower res when FPS < 50)",d),e.appendChild(n),e.appendChild(ue("div","hint",'Same seed = same run, frame for frame. Recording at "Fit window" records at 1920 × 1080.'));const f=ue("div","panel-buttons");f.appendChild(this._btn("◀ BACK","btn-primary","settingsBack")),e.appendChild(f),t.appendChild(e)}_buildExport(){const t=this._screen("export"),e=ue("div","panel");e.appendChild(ue("h2","panel-title","EXPORT VIDEO"));const n=ue("div","form"),s=ue("label","form-row");s.appendChild(ue("span","form-label","Size"));const r=document.createElement("select");r.className="select",r.innerHTML=Object.entries(bu).map(([a,l])=>`<option value="${a}">${po(l.label)}</option>`).join(""),r.value=this.settings.exportSize,r.value||(r.value="1920x1080"),s.appendChild(r),n.appendChild(s),this.exportSelect=r,e.appendChild(n),e.appendChild(ue("div","hint","Renders the AUTO RUN (rounds, seed and watermark from Settings) frame by frame into a smooth 60 fps MP4 with sound, even on a slow PC. Chrome / Edge."));const o=ue("div","panel-buttons");o.append(this._btn("🎬 START EXPORT","btn-primary","exportStart",()=>r.value),this._btn("◀ BACK","btn-ghost","exportBack")),e.appendChild(o),t.appendChild(e)}_buildPause(){const t=this._screen("pause"),e=ue("div","panel");e.appendChild(ue("h2","panel-title","PAUSED"));const n=ue("div","panel-buttons col");this.recToggle=this._btn("● START RECORDING","btn-red","toggleRec"),n.append(this._btn("▶ RESUME","btn-primary","resume"),this.recToggle,this._btn("↻ RESTART","btn-green","restart"),this._btn("⚙ SETTINGS","btn-ghost","settings"),this._btn("✕ QUIT TO MENU","btn-ghost","quit")),e.appendChild(n),e.appendChild(ue("div","hint","ESC to resume")),t.appendChild(e)}_buildEnd(t){const e=this._screen(t),n=ue("div","panel"),s=ue("h2","panel-title big",t==="gameover"?"GAME OVER":"MISSION COMPLETE!"),r=ue("div","stats"),o=ue("div","hint note hidden"),a=ue("div","panel-buttons");a.append(this._btn(t==="gameover"?"↻ TRY AGAIN":"↻ PLAY AGAIN","btn-primary","restart"),this._btn("☰ MENU","btn-ghost","quit")),n.append(s,r,o,a),e.appendChild(n),e._stats=r,e._note=o}show(t,e={}){for(const[n,s]of Object.entries(this.screens))s.classList.toggle("hidden",n!==t);if(this.current=t||null,t==="settings"){this.back=e.back||"title";for(const[n,s]of Object.entries(this.inputs))s.type==="checkbox"?s.checked=!!this.settings[n]:s.value=this.settings[n],s._sync&&s._sync()}if(t==="title"&&(this.roundSelect.value=String(this.settings.roundSelection)),t==="export"&&(this.exportSelect.value=this.settings.exportSize),t==="gameover"||t==="victory"){const n=this.screens[t],s=[];e.play?(s.push(["SCORE",e.score]),s.push(["DISTANCE",Math.floor(e.distance)+" m"]),e.best!=null&&s.push(["BEST",e.best])):(s.push(["DISTANCE",Math.floor(e.distance)+" m"]),s.push(["SEED",po(e.seed)])),n._stats.innerHTML=s.map(([r,o])=>`<div class="stat"><span>${r}</span><b>${o}</b></div>`).join(""),n._note.classList.toggle("hidden",!e.savedFile),e.savedFile&&(n._note.textContent=`🎬 Video saved: ${e.savedFile}`)}if(t){const n=this.screens[t]&&this.screens[t].querySelector(".btn-primary");n&&!matchMedia("(pointer: coarse)").matches&&n.focus({preventScroll:!0})}}hide(){this.show(null)}setRunBar(t){this.runBar.classList.toggle("hidden",!t)}setRecording(t){this.recBadge.classList.toggle("hidden",!t),this.recToggle.innerHTML=t?"■ STOP & SAVE RECORDING":"● START RECORDING"}}function ue(i,t,e){const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n}const Fw=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"];class Ol{constructor(t,e){this.canvas=t,this.audio=e,this.rec=null,this.chunks=[],this.recording=!1,this.filename="pumpkin-dash.webm",this.onState=null}static supported(){return typeof MediaRecorder<"u"&&!!HTMLCanvasElement.prototype.captureStream}start(t="pumpkin-dash.webm"){if(this.recording||!Ol.supported())return!1;this.filename=t;const e=this.canvas.captureStream(60);if(this.audio&&this.audio.recDest)for(const o of this.audio.recDest.stream.getAudioTracks())e.addTrack(o);const n=Fw.find(o=>MediaRecorder.isTypeSupported(o))||"",r={videoBitsPerSecond:this.canvas.width*this.canvas.height>=1920*1080*.9?16e6:9e6,audioBitsPerSecond:192e3};n&&(r.mimeType=n);try{this.rec=new MediaRecorder(e,r)}catch(o){return console.warn("MediaRecorder failed",o),!1}return this.chunks=[],this.stream=e,this.rec.ondataavailable=o=>{o.data&&o.data.size&&this.chunks.push(o.data)},this.rec.onstop=()=>this._save(),this.rec.start(1e3),this.recording=!0,this.onState&&this.onState(!0),!0}setPaused(t){if(!(!this.recording||!this.rec))try{t&&this.rec.state==="recording"?this.rec.pause():!t&&this.rec.state==="paused"&&this.rec.resume()}catch{}}stop(){if(!(!this.recording||!this.rec)){this.recording=!1;try{this.rec.requestData()}catch{}this.rec.stop(),this.onState&&this.onState(!1)}}_save(){if(this.stream)for(const s of this.stream.getVideoTracks())s.stop();if(this.stream=null,!this.chunks.length)return;const t=new Blob(this.chunks,{type:this.rec.mimeType||"video/webm"});this.chunks=[];const e=URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download=this.filename,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(e),1e4)}}const Dw=.25,ih=[["Digit1","bloom","bloom"],["Digit2","post","post-processing"],["Digit3","shadows","shadows"],["Digit4","sky","sky dome / clouds"],["Digit5","foliage","foliage (corn/grass)"],["Digit6","crowd","crowd"],["Digit7","props","props"],["Digit8","particles","particles"],["Digit9","fog","fog / transparent fx"],["Digit0","road","road / terrain"]],Wp=["director","road","props","foliage","sky","crowd","entities","particles","hud","shadows","render"];class Lw{constructor(t){this.g=t,this.on=!1,this.acc=0,this.frames=0,this.cpu=0,this.worstMs=0,this.off={};for(const[,s]of ih)this.off[s]=!1;this.any=!1,this._fog=null,this.sys={};for(const s of Wp)this.sys[s]=0;this._t0=0;const e=t.renderer.renderer.shadowMap,n=e.render.bind(e);e.render=(...s)=>{if(!this.on)return n(...s);const r=performance.now();n(...s),this.sys.shadows+=performance.now()-r},this.gl=t.renderer.renderer.getContext(),this.timer=this.gl.getExtension("EXT_disjoint_timer_query_webgl2"),this.query=null,this._querying=!1,this.gpuSum=0,this.gpuN=0,this.el=document.createElement("pre"),this.el.id="debug-overlay",this.el.style.cssText="position:fixed;left:8px;top:8px;z-index:9999;margin:0;padding:8px 10px;font:12px/1.35 ui-monospace,Consolas,monospace;color:#d8ffcf;background:rgba(10,4,20,0.78);border-radius:6px;pointer-events:none;white-space:pre;display:none;",document.body.appendChild(this.el),window.addEventListener("keydown",s=>{if(s.code==="F3"){s.preventDefault(),this.toggle();return}if(!this.on||s.repeat)return;const r=ih.find(o=>o[0]===s.code);r&&(s.preventDefault(),s.stopImmediatePropagation(),this.off[r[1]]=!this.off[r[1]],this._changed(r[1]))},!0)}begin(){this.on&&(this._t0=performance.now())}lap(t){if(!this.on)return;const e=performance.now();this.sys[t]+=e-this._t0,this._t0=e}gpuBegin(){!this.on||!this.timer||this.query||(this.query=this.gl.createQuery(),this.gl.beginQuery(this.timer.TIME_ELAPSED_EXT,this.query),this._querying=!0)}gpuEnd(){this._querying&&(this.gl.endQuery(this.timer.TIME_ELAPSED_EXT),this._querying=!1)}_pollGpu(){const t=this.gl,e=this.query;!e||this._querying||!t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE)||(t.getParameter(this.timer.GPU_DISJOINT_EXT)||(this.gpuSum+=t.getQueryParameter(e,t.QUERY_RESULT)/1e6,this.gpuN++),t.deleteQuery(e),this.query=null)}toggle(){this.on=!this.on,this.el.style.display=this.on?"block":"none",this.acc=0,this.frames=0,this.cpu=0,this.worstMs=0}_objects(t){const e=this.g;switch(t){case"sky":return[e.sky.group];case"foliage":return e.foliage.meshes;case"crowd":return e.crowd.meshes;case"props":{const n=[e.scenery.backdrop];for(const s of e.scenery.batches.values())for(const r of s.meshes)n.push(r);return n}case"particles":return[e.effects.add.points,e.effects.norm.points];case"road":{const n=[e.road.rocks];for(const s of e.road.chunks)n.push(s.road,s.terrain);return n}case"fog":return e.sky.ghosts}return null}_changed(t){const e=this.g;if(this.any=Object.values(this.off).some(Boolean),t==="fog"&&(this.off.fog?(this._fog=e.scene.fog,e.scene.fog=null):this._fog&&(e.scene.fog=this._fog)),t==="shadows"&&e.applySettings(),(t==="bloom"||t==="post")&&e.renderer.setQuality(e.settings.quality),!this.off[t]){const n=this._objects(t);if(n)for(const s of n)s&&(s.visible=!s.isInstancedMesh||s.count>0);e.foliage.version=-1,e.scenery.forceSync=!0}}apply(){if(!this.any)return;const t=this.g.renderer;this.off.bloom&&(t.bloom.enabled=!1),t.bypassPost=this.off.post,this.off.shadows&&(this.g.sun.castShadow=!1);for(const e of["sky","foliage","crowd","props","particles","road","fog"]){if(!this.off[e])continue;const n=this._objects(e);if(n)for(const s of n)s&&(s.visible=!1)}}update(t,e){if(!this.on||(this._pollGpu(),this.acc+=t,this.frames++,this.cpu+=e,this.worstMs=Math.max(this.worstMs,t*1e3),this.acc<Dw))return;const n=this.g,s=n.renderer.renderer.info,r=this.frames/this.acc,o=n.foliage;let a=0;if(o&&o.meshes)for(const f of o.meshes)f.visible&&(a+=f.count);const l=n.renderer;let c="";for(const[f,p,_]of ih)c+=`
 ${f.slice(5)} ${this.off[p]?"OFF":"on "} ${_}`;const h=this.sys;h.render-=h.shadows;let u="";for(const f of Wp)u+=`
 ${f.padEnd(10)}${(h[f]/this.frames).toFixed(2)}`,h[f]=0;const d=this.timer?this.gpuN?(this.gpuSum/this.gpuN).toFixed(1):"…":"n/a (no timer queries)";this.gpuSum=0,this.gpuN=0,this.el.textContent=`FPS        ${r.toFixed(0)}
frame ms   ${(this.acc/this.frames*1e3).toFixed(1)}  (worst ${this.worstMs.toFixed(1)})
CPU ms     ${(this.cpu/this.frames).toFixed(2)}
GPU ms     ${d}
draw calls ${s.render.calls}
triangles  ${s.render.triangles}
geometries ${s.memory.geometries}
textures   ${s.memory.textures}
programs   ${s.programs?s.programs.length:0}
canvas     ${l.width}×${l.height}  (${n.settings.quality}${l.dynScale<1?`, auto ${Math.round(l.dynScale*100)}%`:""})
props      ${n.scenery.propCount}
crowd      ${n.crowd.total}
entities   ${n.manager.list.length}
foliage    ${a}
particles  ${n.effects.count}
── CPU ms per system ──`+u+`
── toggles (keys) ──`+c,this.acc=0,this.frames=0,this.cpu=0,this.worstMs=0}}const Xp=20,qp=new vt("#7E64A6"),Iw=new vt("#C8C6D4"),$p="pumpkin-dash-best-v1",sh=1/60,Uw=8,Yp=12,jp=i=>i<=0?0:i>=1?1:i*i*(3-2*i);class Nw{constructor(t,e){this.canvas=t,this.ui=e,this.timeline=so,this.speed=so.speed,this.settings=OM(),this.renderer=new VM(t,document.getElementById("stage")||t.parentElement),this.scene=new Xh,this.scene.fog=new Lu(qp.clone(),Xp,45),this.camera=new yn(45,16/9,.1,200),this.camera.rotation.order="YXZ",this.hemi=new wM("#C4AEFF","#3A2416",1.5),this.scene.add(this.hemi),this.ambient=new CM("#8A6CC0",.5),this.scene.add(this.ambient),this.sun=new AM("#FFD9B0",2.6),this.sun.shadow.camera.left=-22,this.sun.shadow.camera.right=22,this.sun.shadow.camera.top=22,this.sun.shadow.camera.bottom=-22,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=90,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun,this.sun.target),this.sunOffset=new P(-14,26,10);const n=new oe().lookAt(this.sunOffset,new P,new P(0,1,0));this._sunX=new P().setFromMatrixColumn(n,0),this._sunY=new P().setFromMatrixColumn(n,1),this.track=new lb(1),this.biomes=new fb,this.crowd=new bS(this.scene),this.road=new xb(this.scene,this.track,this.biomes),this.scenery=new jb(this.scene,this.track,this.biomes,this.crowd),this.foliage=new oS(this.scene,this.track,this.biomes,this.scenery),this.sky=new mS(this.scene),this.effects=new vS(this.scene),this.manager=new qS(this.scene,this.track,this.effects),this.rig=new ib(this.camera,this.track),this.emitters=[],this.hud=new KS(this.renderer),this.audio=new tc,this.recorder=new Ol(t,this.audio),this.director=new ob(this),this.input=new Ms,this.input.buildTouch(e),this.input.on((r,o)=>this.onInput(r,o)),this.rig.onStart=(r,o)=>this.director.started(r,o),this.menus=new Pw(e,{settings:this.settings,rounds:so.rounds,onAction:(r,o)=>this.onMenu(r,o),onSettings:(r,o)=>this.onSettings(o)}),this.recorder.onState=r=>this.menus.setRecording(r),this.exporter=new yd(this),this.debug=new Lw(this),this.renderer.onResize=(r,o)=>this.rig.setAspect(r/o),this.state="menu",this.mode="auto",this.time=0,this.simTime=0,this.schedule=null,this.segIndex=-1,this.lastCountStep=-1,this.recordingRun=!1,this._shadowTick=!1,this._fpsAvg=60,this._resWait=1,this.prevResolution=null,this.savedFile=null,this.endAt=0,this._fogCol=new vt,this._fwd=new P,this._hud={time:0,seg:null,segT:0,roundFrac:0,prompts:this.director.prompts,showStats:!1,score:0,lives:3,maxLives:3,distance:0,watermark:"",hidden:!0,flashOnly:!1},this.applySettings(),this.renderer.resize(),this.rig.setAspect(this.renderer.aspect),this.loop=new HM(r=>this.frame(r));const s=()=>{this.audio.init(),this.audio.ready&&(window.removeEventListener("pointerdown",s),window.removeEventListener("keydown",s),this.state==="menu"&&!this.audio.playing&&this.audio.startMusic("calm"))};window.addEventListener("pointerdown",s,{passive:!0}),window.addEventListener("keydown",s),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state==="run"&&!this.recorder.recording&&!this.exporter.busy&&this.pause()})}start(){this.enterMenu(),this.warmup(),this.loop.start()}warmup(){const t=this.settings,e=Hf(so,{seed:this.seed,roundLength:t.roundLength,roundIndex:-1});this.manager.setSchedule(e),this.manager.setSchedule({events:[],speed:this.speed});const n=[],s=[],r=[];this.scene.traverse(o=>{o.visible||(o.visible=!0,n.push(o)),o.isInstancedMesh&&o.count===0&&(o.count=1,s.push(o)),(o.isMesh||o.isPoints)&&o.frustumCulled&&(o.frustumCulled=!1,r.push(o))});try{this.renderer.renderer.compile(this.scene,this.camera),this.renderer.render(this.scene,this.camera)}catch(o){console.warn("warm-up failed",o)}for(const o of n)o.visible=!1;for(const o of s)o.count=0;for(const o of r)o.frustumCulled=!0}applySettings(){const t=this.settings,e=Ps[t.quality]||Ps.high;this.quality=e,this.renderer.setQuality(t.quality),this.recordingRun||this.renderer.setResolution(t.resolution);const n=e.shadows>0,s=this.renderer.renderer;s.shadowMap.enabled!==n&&(s.shadowMap.enabled=n,this.scene.traverse(c=>{if(c.material)for(const h of[].concat(c.material))h.needsUpdate=!0})),this.sun.castShadow=n;const r=this.sun.shadow.camera,o=e.shadowBox||16;r.right!==o&&(r.left=r.bottom=-o,r.right=r.top=o,r.far=70,r.updateProjectionMatrix()),n&&this.sun.shadow.mapSize.x!==e.shadows&&(this.sun.shadow.mapSize.set(e.shadows,e.shadows),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.crowd.shadows=n,this.manager.shadows=n,this.scenery.setShadows(n),this.effects.setDensity(e.particles),this.foliage.setDensity(Math.max(.5,e.particles)),this.scenery.setAhead(e.ahead),this.manager.setAhead(e.ahead+6),this.fogFar=e.fogFar;const a=e.lodScale||1,l=e.cull?e.fogFar+2:1/0;this.scenery.setLod(a,l),this.crowd.setLod(a,l),this.foliage.setLod(a,l),this.audio.setMusicVolume(t.musicVolume),this.audio.setSfxVolume(t.sfxVolume)}onSettings(t){if(zf(this.settings),t==="roundSelection"||t==="seed"||t==="roundLength"||t==="watermark"){t==="seed"&&this.state==="menu"&&this.enterMenu(!0);return}t==="cleanRecording"||t==="autoRes"||this.applySettings()}get seed(){return XM(this.settings.seed)}resetWorld(t){this.track.setSeed(t),this.road.reset(t),this.scenery.reset(t),this.crowd.reset(),this.foliage.reset(t),this.effects.clear(),this.rig.reset(),this.hud.clearTransient()}enterMenu(t=!1){this.state="menu",this.input.active=!1,this.time=0,this.simTime=0,this.schedule=null,this.resetWorld(this.seed),this.manager.setSchedule({events:[],speed:this.speed}),this.director.setSchedule({events:[]},"auto"),this.rig.setMode("auto"),this.renderer.setBlur(0),this.input.showTouch(!1),this.menus.setRunBar(!1),t||this.menus.show("title"),this.audio.ready&&this.audio.startMusic("calm")}startRun(t,e=!1){Ms.blurActive(),this.audio.init();const n=this.settings,s=this.seed,r=n.roundSelection==="all"?-1:Number(n.roundSelection);this.schedule=Hf(so,{seed:s,roundLength:n.roundLength,roundIndex:r}),this.mode=t,this.resetWorld(s),this.manager.setSchedule(this.schedule),this.director.setSchedule(this.schedule,t),this.rig.setMode(t),this.time=0,this.simTime=0,this.segIndex=-1,this.lastCountStep=-1,this.savedFile=null,this.endAt=0,this.state="run",this.input.active=t==="play",this.audio.setPaused(!1),this.audio.stopMusic(.2),this.menus.hide(),this.menus.setRunBar(!0),this.input.showTouch(t==="play"&&Ms.isTouch()),e&&this.startRecording()}startRecording(){if(this.recorder.recording)return;if(!Ol.supported()){alert("Recording is not supported in this browser. Try Chrome, Edge or Firefox.");return}this.recordingRun=!0,this.settings.resolution==="window"&&(this.prevResolution="window",this.renderer.setResolution("1920x1080"));const t=`pumpkin-dash-${String(this.settings.seed).replace(/[^\w-]+/g,"_")||"run"}-${Ow()}.webm`;this.recorder.start(t)?(this.savedFile=t,document.body.classList.toggle("clean-rec",!!this.settings.cleanRecording)):(this.recordingRun=!1,this.restoreResolution())}stopRecording(){this.recorder.recording&&(this.recorder.stop(),document.body.classList.remove("clean-rec"),this.recordingRun=!1,this.restoreResolution())}restoreResolution(){this.prevResolution&&(this.renderer.setResolution(this.prevResolution),this.prevResolution=null)}pause(){this.state==="run"&&(this.state="paused",this.input.active=!1,this.input.releaseAll(),this.audio.setPaused(!0),this.recorder.setPaused(!0),document.body.classList.remove("clean-rec"),this.menus.show("pause"),this.menus.setRunBar(!1),this.input.showTouch(!1))}resume(){this.state==="paused"&&(Ms.blurActive(),this.state="run",this.input.active=this.mode==="play",this.audio.setPaused(!1),this.recorder.setPaused(!1),this.recorder.recording&&this.settings.cleanRecording&&document.body.classList.add("clean-rec"),this.menus.hide(),this.menus.setRunBar(!0),this.input.showTouch(this.mode==="play"&&Ms.isTouch()))}finishRun(){if(this.state!=="run")return;this.state="ended",this.input.active=!1;const t=this.recorder.recording?this.savedFile:null;this.stopRecording(),this.audio.stopMusic(1.5),this.menus.setRunBar(!1),this.input.showTouch(!1);const e=this.mode==="play"?this.updateBest(this.director.score):null;this.menus.show("victory",{play:this.mode==="play",score:this.director.score,distance:this.speed*this.time,seed:this.settings.seed,best:e,savedFile:t})}onGameOver(){if(this.state!=="run")return;this.state="ended",this.input.active=!1;const t=this.recorder.recording?this.savedFile:null;this.stopRecording(),this.audio.stopMusic(.4),this.audio.play("gameover"),this.menus.setRunBar(!1),this.input.showTouch(!1);const e=this.updateBest(this.director.score);this.menus.show("gameover",{play:!0,score:this.director.score,distance:this.speed*this.time,best:e,savedFile:t})}updateBest(t){let e=0;try{e=Number(localStorage.getItem($p))||0,t>e&&(e=t,localStorage.setItem($p,String(e)))}catch{e=Math.max(e,t)}return e}onInput(t,e=!0){if(!this.exporter.busy){if(!e){this.mode==="play"&&(this.state==="run"||this.state==="paused")&&this.director.input(t,this.time,!1);return}if(t==="pause"){this.state==="run"?this.pause():this.state==="paused"?this.resume():this.menus.current==="settings"&&this.onMenu("settingsBack");return}this.state==="run"&&this.mode==="play"&&this.director.input(t,this.time,!0)}}onMenu(t,e){if(!this.exporter.busy)switch(t){case"click":this.audio.init(),this.audio.play("click");break;case"auto":this.startRun("auto");break;case"play":this.startRun("play");break;case"record":this.startRun("auto",!0);break;case"export":this.menus.show("export");break;case"exportStart":this.settings.exportSize=e,zf(this.settings),this.exporter.start(e);break;case"settings":this.menus.show("settings",{back:this.state==="paused"?"pause":"title"});break;case"exportBack":this.menus.show("title");break;case"settingsBack":this.menus.show(this.menus.back==="pause"&&this.state==="paused"?"pause":this.state==="menu"?"title":this.menus.back);break;case"pause":this.pause();break;case"resume":this.resume();break;case"restart":{const n=this.recorder.recording;this.stopRecording(),this.audio.setPaused(!1),this.startRun(this.mode,n);break}case"quit":this.stopRecording(),this.audio.setPaused(!1),this.enterMenu();break;case"toggleRec":this.recorder.recording?this.stopRecording():(this.startRecording(),this.recorder.setPaused(!0));break;case"stopRec":this.stopRecording();break}}simulate(t){let e=0;for(;this.state==="run"&&this.schedule&&this.simTime+sh<=t+1e-9;)++e>Uw&&(this.simTime=Math.max(this.simTime,t-sh)),this.simTime+=sh,this.step(this.simTime)}step(t){const e=this.schedule,n=Gf(e,t),s=e.segments[n],r=t-s.start;if(n!==this.segIndex&&this.onSegment(s,n),s.kind==="countdown"){const o=Math.floor(r/(s.duration/4));o!==this.lastCountStep&&o<4&&(this.lastCountStep=o,this.audio.play(o<3?"beep":"go"))}this.director.update(t),t>=e.duration&&(this.endAt||(this.endAt=t),t-this.endAt>.3&&this.finishRun())}frame(t){const e=performance.now(),n=this.debug;n.begin(),this.state!=="paused"&&(this.time+=t);const s=this.time;this.audio.update(),this.simulate(s),n.lap("director");let r=null,o=0;this.schedule&&this.state!=="menu"&&(r=this.schedule.segments[Gf(this.schedule,s)],o=s-r.start);const a=this.speed*s;this.rig.update(s,a),this.road.update(a),n.lap("road"),this.scenery.update(a,this.camera),n.lap("props"),this.foliage.update(a),n.lap("foliage");const l=this.biomes.fog(a+10),c=this.track.heading(a);this._fogCol.copy(qp).lerp(Iw,l*.8);const h=this.scene.fog;h.color.copy(this._fogCol),h.near=Xp-12*l,h.far=this.fogFar-17*l,this.sky.update(s,this.camera,c,l,this._fogCol),n.lap("sky"),this.crowd.update(s,this.camera),n.lap("crowd"),this.manager.update(s,a),n.lap("entities");const u=this.emitters;u.length=0;for(const T of this.scenery.emitters)u.push(T);for(const T of this.manager.emitters)u.push(T);this._fwd.set(Math.sin(c),0,-Math.cos(c)),this.effects.update(this.state==="paused"?0:t,this.camera,this.renderer.height,u,l,this._fwd),n.lap("particles");const d=this.camera.position,f=this.sun.target.position;f.set(d.x+this._fwd.x*Yp,0,d.z+this._fwd.z*Yp);const p=2*this.sun.shadow.camera.right/this.sun.shadow.mapSize.x,_=f.dot(this._sunX),g=f.dot(this._sunY);f.addScaledVector(this._sunX,Math.round(_/p)*p-_).addScaledVector(this._sunY,Math.round(g/p)*p-g),this.sun.position.copy(f).add(this.sunOffset),this.sun.target.updateMatrixWorld(),KM(s);let m=0;if(r&&this.state!=="menu"){const T=Math.min(jp(o/.4),jp((r.duration-o)/.4));r.kind==="card"?m=9*T:r.kind==="title"?m=5*T:r.kind==="outro"&&(m=7*T)}this.renderer.setBlur(m),n.lap("sky");const M=this.state==="run"||this.state==="paused",x=this._hud;x.time=s,x.seg=r,x.segT=o,x.roundFrac=r&&r.kind==="round"?o/r.duration:0,x.showStats=this.mode==="play"&&!!r&&r.kind==="round",x.score=this.director.score,x.lives=this.director.lives,x.maxLives=this.director.maxLives,x.distance=a,x.watermark=this.settings.watermark,x.hidden=!M,this.hud.draw(x),n.lap("hud");const v=this.renderer.renderer,I=this.exporter.busy;this._shadowTick=!this._shadowTick,v.shadowMap.autoUpdate=!1,(I||this._shadowTick)&&(v.shadowMap.needsUpdate=!0),this.autoResolution(t,I),this.renderer.setHudInScene(I||this.recorder.recording),n.apply(),n.gpuBegin(),this.renderer.render(this.scene,this.camera),n.gpuEnd(),n.lap("render"),n.update(t,performance.now()-e)}autoResolution(t,e){const n=this.renderer;if(!this.settings.autoRes||e||this.recordingRun){n.dynScale!==1&&n.setDynScale(1),this._fpsAvg=60,this._resWait=1;return}t<=0||t>.5||(this._fpsAvg+=(1/t-this._fpsAvg)*.05,this._resWait-=t,!(this._resWait>0)&&(this._fpsAvg<50&&n.dynScale>.5?(n.setDynScale(n.dynScale-.1),this._resWait=1.5):this._fpsAvg>58&&n.dynScale<1&&(n.setDynScale(n.dynScale+.05),this._resWait=2.5)))}onSegment(t,e){this.segIndex=e;const n=this.audio;switch(t.kind){case"title":n.play("stinger"),n.startMusic("calm");break;case"countdown":this.lastCountStep=-1;break;case"round":n.startMusic(t.round.music==="heavy"?"heavy":"normal");break;case"card":n.play("chime"),n.setIntensity("calm");break;case"outro":this.schedule.segments[e-1]&&this.schedule.segments[e-1].kind!=="outro"?(n.stopMusic(.5),n.play("victory")):n.play("stinger");break}}}function Ow(){const i=new Date,t=e=>String(e).padStart(2,"0");return`${i.getFullYear()}${t(i.getMonth()+1)}${t(i.getDate())}-${t(i.getHours())}${t(i.getMinutes())}`}async function Bw(){if(!document.fonts||!document.fonts.load)return;const i=new Promise(t=>setTimeout(t,4e3));try{await Promise.race([Promise.all([document.fonts.load('64px "Luckiest Guy"'),document.fonts.load('64px "Bungee"')]),i])}catch{}}(async()=>{await Bw();const i=new Nw(document.getElementById("game"),document.getElementById("ui"));i.start();const t=document.getElementById("loading");t&&(t.classList.add("fade"),setTimeout(()=>t.remove(),600)),window.__pumpkinDash=i})();
