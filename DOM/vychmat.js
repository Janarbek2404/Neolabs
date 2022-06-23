function f(x){
    let fx=Math.log(x)+0.1*Math.sin(0.1*x);
    return fx;
}
function f1(x){
    let f1x=0.01*Math.cos(0.1*x)+1/x;
    return f1x;
}
function rounding(x){
    let Round=(x*1000)/1000;
    return Round;
}
    let a=10;
    let b=12;
    let e=0.01;
    let L=0;
    let f1a=f1(a);
    let f1b=f1(b);
    console.log("\nf'(a) "+f1a);
    console.log("f'(b) "+f1b);
    console.log("max   ");
    console.log(f1a>f1b?f1a:f1b);
    L=f1a+0.0946;
    console.log("L\t  "+L);
    console.log("a \tb \te \tL \t\t\tf(a) \t\t\tf(b)");
    let fa=f(a);
    let fb=f(b);
    console.log(a+"\t"+b+"\t"+e+"\t"+L+"\t"+rounding(fa)+"\t"+rounding(fb));

    let x=(fa-fb+L*(a+b))/(2*L);
    let p=(fa+fb+L*(a-b))/2;
    let n=1;
    console.log("n\tx*n\t\tp*n\t\tf(x*n)\t"+"n\t\t2L"+"n\tx'n\t\tx''n\tf(x'n)\tf(x''n)\tNote");
    while(true){
        let fx=f(x);
        let del=(fx-p)/(2*L);
        let x1=x-del;
        let x2=x+del;
        let pn=(fx+p)/2;
        let fx1=f(x1);
        let fx2=f(x2);
        String(note="false");
        if(Math.abs(fx1-fx2)<=L*Math.abs(x1-x2)){
            note="True";
        }
        console.log(n+"\t"+rounding(x)+"\t"+rounding(p)+"\t"+rounding(fx)+"\t\t"+rounding(del+2*L*del)+"\t"+rounding(x1)+"\t"+rounding(x2)+"\t"+rounding(pn)+"\t"+rounding(fx1)+"\t"+rounding(fx2)+"\t"+note);
        if(note=="True"){
            let f=fx;
            break;
        }
        x=x1;
    }