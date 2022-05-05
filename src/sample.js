class Car{
  
    constructor(){
      
      this.drive = this.drive.bind(this);
    }
    
    setDriveSounds(sound){
      
      this.sound = sound;
    }
    
    drive(){
      // this will be undefined
      return this.sound;
    }
  }
  
  
  const car = new Car();
  car.setDriveSounds("broom");
  car.drive();
  
  
  
  const truck = {
    
    sound: "putput",
    driveMyTruck: car.drive
   
  }
  
  truck.driveMyTruck();

  // scenario without object calling the function we have to bind in the constructor
  const drive = car.drive;
  // it does not know which object is calling this method
  drive();