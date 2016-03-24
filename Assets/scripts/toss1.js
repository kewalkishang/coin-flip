#pragma strict
static var ing : int;
var goa : int;
var col : Collider;
var rb: Rigidbody;
function Start () {
Screen.orientation = ScreenOrientation.Portrait;
ing =0;
goa =2;
}

function Update () {
 if (Input.GetKeyDown(KeyCode.Escape)) 
    Application.Quit(); 

if(goa==0)
{col.transform.Translate(Vector3.up*Time.deltaTime*2);
if(transform.position.y>7)
goa=1;
}
else
if(goa==1)
{col.attachedRigidbody.useGravity=true;
if(transform.position.y<4.1){
col.attachedRigidbody.useGravity=false;
ing=0;
}
}
}


function  FixedUpdate(){
if(Input.GetTouch(0).phase==TouchPhase.Began)
{ing=1;
goa=0;
}
}

