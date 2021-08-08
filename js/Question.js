class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter your answer here...");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.options = createElement("h4")



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.message.hide();  
    //Add hide() for questions, options & input box
    this.question.hide();
    this.options.hide();
    this.input2.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("What is full of holes but still holds water?");
    this.question.position(250, 50);

    this.options.html("OPTIONS: Cup, Cloud, Sponge, Jug with holes")
    this.options.position(260, 120);


    this.input1.position(150, 230);
    this.input2.position(420, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.button.hide();
      this.question.hide();
      this.options.hide();
      this.input2.hide();
      var message = ` Hello ${this.input2.value()} 
      </br>Thank You, Your Answer Has Been Submitted`;

      this.message.html(message);
      this.message.position(300, 90);
    })


  }
}
