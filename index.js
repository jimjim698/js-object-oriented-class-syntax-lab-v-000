class BoardMember{
  constructor(name, homestate, training){
    this.name = name 
    this.homestate = homestate
    this.training = training 
  }
  
  veto(){
    return "No, I must disagree"
  }

approve(){
  return "You can do that!"
  }
  releasePressStatement(){
    return "You will see great things from Scuber."
  } 
  
}

