/* river-shader.js: GLSL fragment shader that paints the river (WebGL). */
window.RIVER_FRAG=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 R,ms;uniform float dpr,sy,t,H,Wd,N,mv;
float hash(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
vec2 hash22(vec2 p){return vec2(hash(p),hash(p+37.7));}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p,int o){float v=0.,a=.5;for(int i=0;i<5;i++){if(i>=o)break;v+=a*noise(p);p=p*2.03+17.1;a*=.5;}return v;}
vec2 vor(vec2 p){vec2 g=floor(p),f=fract(p);float md=8.,id=0.;for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec2 o=vec2(float(i),float(j));vec2 r=o+hash22(g+o)-f;float d=dot(r,r);if(d<md){md=d;id=hash(g+o);}}}return vec2(sqrt(md),id);}
float cx(float y){float u=y/H*N;float A=Wd*(Wd<700. ? .37 : .4);return Wd*.5+A*cos(3.14159*(u-.5))+Wd*.045*sin(u*7.+1.)+Wd*.02*sin(u*19.+2.)+Wd*.008*sin(u*41.);}
float hw(float y){float u=y/H*N;float b=clamp(Wd*.045,(Wd<700. ? 24. : 34.),66.);return b*(.8+.28*sin(u*5.+.5)+.15*sin(u*13.+2.));}
float rip(vec2 w){float a=fbm(vec2(w.x*.05,(w.y-t*32.)*.02),4);float b=fbm(vec2(w.x*.12+5.,(w.y-t*55.)*.05),3);return a*.65+b*.35;}
void main(){
 vec2 p=vec2(gl_FragCoord.x/dpr,R.y-gl_FragCoord.y/dpr+sy);
 float c=cx(p.y),h=hw(p.y);
 float sl=(cx(p.y+3.)-cx(p.y-3.))/6.;
 float off=(p.x-c)*inversesqrt(1.+sl*sl);
 float wob=(fbm(vec2(p.y*.02,sign(off)*3.+off*.01),3)-.5)*22.+(fbm(p*.06,3)-.5)*8.;
 float sd=abs(off)-h+wob;
 vec3 cream=vec3(.937,.902,.831);
 vec3 col;
 if(sd<0.){
  float dn=clamp(-sd/h+(fbm(p*.02,3)-.5)*.35,0.,1.);
  vec2 w=vec2(off,p.y);
  float r0=rip(w);
  vec2 g=vec2(rip(w+vec2(1.5,0.))-r0,rip(w+vec2(0.,1.5))-r0)/1.5;
  vec3 n=normalize(vec3(-g*16.,1.));vec2 md=p-ms;float dm=length(md);n.xy+=md/(dm+.001)*sin(dm*.4-t*7.)*exp(-dm*.025)*mv*.35;n=normalize(n);
  vec2 pv=vor((w+g*120.)*.07);
  vec3 wc=mix(mix(vec3(.66,.69,.58),vec3(.48,.51,.40),smoothstep(0.,.5,dn)),vec3(.20,.23,.17),smoothstep(.5,1.,dn));
  vec3 bed=mix(vec3(.80,.76,.60)*(.8+.4*pv.y),vec3(.36,.33,.26),smoothstep(.3,.6,pv.x));
  float vis=1.-smoothstep(.05,.7,dn+(r0-.5)*.3);
  col=mix(wc,mix(bed,wc,.3),vis*.8);
  vec3 Rf=reflect(vec3(0.,0.,-1.),n);
  float cl=smoothstep(.45,.75,fbm(Rf.xy*3.+vec2(t*.02,0.)+p*.0008,3));
  col=mix(col,mix(vec3(.80,.82,.72),vec3(.94,.90,.83),cl),clamp(.08+(1.-n.z)*6.,0.,.45));
  float sp=pow(max(dot(n,normalize(normalize(vec3(-.45,-.35,.8))+vec3(0.,0.,1.))),0.),90.);
  col+=vec3(.94,.90,.83)*sp*.8;
  for(int k=0;k<3;k++){float fk=float(k);float ly=mod(t*(26.+fk*7.)+fk*1900.,H);
   float lx=cx(ly)+sin(ly*.02+fk*2.)*hw(ly)*.45+(fk-1.)*hw(ly)*.25;
   vec2 dq=p-vec2(lx,ly);
   col=mix(col,vec3(.12,.09,.07),(1.-smoothstep(.9,1.6,length(vec2((dq.x-3.)/6.,(dq.y-4.)/12.))))*.3);
   col=mix(col,vec3(.71,.34,.23),1.-smoothstep(.85,1.,length(vec2(dq.x/5.,dq.y/11.))));}
  float fm=(1.-smoothstep(0.,8.,-sd))*(.35+.65*fbm(vec2(off*.12,(p.y-t*18.)*.06),3));
  col=mix(col,vec3(.94,.90,.83),clamp(fm*1.3,0.,.8));
  col*=mix(.8,1.,smoothstep(0.,16.,-sd));
 }else{
  col=cream*(.975+.05*noise(p*.7));
 }
 col*=1.-.04*smoothstep(.45,.7,fbm(p*.0015+vec2(t*.01,0.),3));
 float pr=clamp(sy/max(H-R.y,1.),0.,1.);
 vec3 tn=mix(vec3(1.03,1.,.95),vec3(.99,.99,1.),smoothstep(0.,.5,pr));tn=mix(tn,vec3(1.05,.94,.86),smoothstep(.6,1.,pr));
 gl_FragColor=vec4(col*mix(vec3(1.),tn,.06),1.);
}`;
