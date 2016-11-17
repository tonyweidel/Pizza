class pizza{
  //type constructor below
constructor (s,mT,vT){
  this.size = s; //array ["s","m","l","xL"]
  this.meatToppings = mT; //array
  this.veggieToppings = vT;
}
  //type instance functions below
  sizeCost(){
    this.size(s) = 7.99
    this.size(m) = 9.99
    this.size(l) = 12.99
    this.size(xL) = 15.99
  }
  toppingCost(top){
    if(top == this.meatToppings){
      return top.length*0.99;
    }
    if(top == this.veggieToppings){
      return top.length*0.5;p
    }
  }
  //type class functions below


}
