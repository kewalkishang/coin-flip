#pragma strict
var un : int;
var asl;
function Start () {
Screen.orientation = ScreenOrientation.Portrait;
un=0;
asl=Random.Range(15,25);
}

function Update () {
if(toss1.ing==1)
{transform.Rotate(0,0,asl);
un=1;
}
if(un==1)
{ //if((transform.rotation.eulerAngles.z<88&&transform.rotation.eulerAngles.z>178)||(transform.rotation.eulerAngles.z<358&&transform.rotation.eulerAngles.z>88)||(transform.rotation.eulerAngles.z<178&&transform.rotation.eulerAngles.z>268)||(transform.rotation.eulerAngles.z<268&&transform.rotation.eulerAngles.z>350))
  if((transform.rotation.eulerAngles.z>2&&transform.rotation.eulerAngles.z<178)||(transform.rotation.eulerAngles.z>182&&transform.rotation.eulerAngles.z<358))
  transform.Rotate(0,0,2);
}
}