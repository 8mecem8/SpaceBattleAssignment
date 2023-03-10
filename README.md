# 🌒 SpaceBattleAssignment 🌠
This Html game created as a bootcamp Project, Tech Stack is Html, Css, Javascript  Game's type is mixture of turn-based &amp; text-based with some added simple graphics &amp; sounds &amp; Css animations

<br />

### ASSIGNMENT

Build a game of battling alien spaceships using Javascript, HTML, and CSS.
 

Earth has been attacked by a horde of aliens! You are the captain of the USS HelloWorld, on a mission to destroy every last alien ship.

Battle the aliens as you try to destroy them with your lasers.

There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. 

 

The HTML should show the starting and final hull of the ships. 


AFTER the game, prompt the user letting them know if they won or lost, and asking if they would like to play again. 

**A game round would look like this:**

* You attack the first alien ship (update alien ship in html)

*  If the ship survives, it attacks you (update your ship in html)

* If you survive, you attack the ship again

* If it survives, it attacks you again … etc

* You win the game if you destroy all of the aliens

* You lose the game if you are destroyed

* User is prompted to play again
 

### Ship Properties

* hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed

* firepower is the amount of damage done to the hull of the target with a successful hit

* accuracy is the chance between 0 and 1 that the ship will hit its target

**Your spaceship, the USS HelloWorld should have the following properties:**

* **hull - 20**
* **firepower - 5**
* **accuracy - .7**

**The alien ships should each have the following ranged properties determined randomly:**

* hull - between 3 and 6
* firepower - between 2 and 4
* accuracy - between .6 and .8
You could be battling six alien ships each with unique values.

<br />

### 👾 Where to begin?
Read over the specifications. Make sure you understand them. If you do not understand them, try to clarify them for yourself.

Plan the game. This is an act of simplification.

From these programming principlesLinks to an external site.

* Use pseudo code to get a sketch of your game first.
* Avoid Creating a YAGNI (You aren't going to need it) - You should not try to add functionality until you need it.
* Do the simplest thing that could possibly work.


Often, beginning something is an act of creative inspiration to find the simplest possible case. The first step is not necessarily a matter of logical deduction. Once you have a few 'clues' you can follow the trail of crumbs to a logical conclusion.





### 👾 Actors and then actions
A good rule of thumb is start with the actors and then the actions. What actors do we need? In this case, we need our spaceship and the alien spaceships. An action these ships can take is to attack something. Perhaps a ship object (an actor) could therefore have an attack method (an action).

A repeating action in the game is that these ships attack each other until one of them has been destroyed. This might necessitate a loop or multiple loops.





### 👾 Start simpler than the instructions suggest
Keep these five things in mind when planning and coding your game:

* Begin even simpler than the specifications suggest. In this case, perhaps just start with one alien ship instead of many alien ships, and get the code for one ship working first.

* Root out any 'gotchas' that you really ought to foresee. In this case, will we really want nested loops -- one for a battle, one for iterating over aliens)? How will we exit one loop and then exit the parent loop? Perhaps keeping it to one loop somehow will help us avoid unnecessary difficulties.

* When coding, form a solid and testable foundation before building upon it with more functionality. In this case, is there a bug where an alien can attack after it has been destroyed? Better fix that bug before increasing the complexity of the code.

* When you have a piece of functionality tested and working, commit it. Try not to commit broken code. Unsure of when to commit? Commit when something works. You want to save working code.









### 👾 Code quality and code sharing
From the beginning, you will be writing your code for other developers.

Having to read and understand another developer's code is common practice. Get used to it now! In the 'real world', you will be in a position where you inherit someone else's code-base and are told to 'fix it' or to add a feature to the code.

What does this mean for your coding practices?

* Use proper indentation! On the job, your code immediately fails a code review if indentation is not perfect.
* Use semantic variable and function names, and use a verb for your function/method names.
* What your code does should be self-evident.
* If a piece of code is hard to read have a comment above those few lines explaining what they do.
Your code should be as coherent to another developer as possible.


![image](https://user-images.githubusercontent.com/42888722/215939908-3b7c115b-8a79-4fea-99c2-bc8c87bdd375.png)




![image](https://user-images.githubusercontent.com/42888722/215939984-a89871b2-77b8-4611-93be-30138ba767ef.png)



![image](https://user-images.githubusercontent.com/42888722/215940073-20e2d465-e921-4dd1-9293-d2efb1d6735d.png)



![image](https://user-images.githubusercontent.com/42888722/215940156-a764eb97-3dd1-413e-820d-273849641bb6.png)




![image](https://user-images.githubusercontent.com/42888722/215940258-21cbf9cf-27b0-43cd-94de-a15c4724a89e.png)




![image](https://user-images.githubusercontent.com/42888722/215940403-d1f9a64b-f50f-4715-b473-350dcd8a22bc.png)




![image](https://user-images.githubusercontent.com/42888722/215941502-b988af0d-ce8a-4fbb-a76f-82ab95dad3d2.png)




![image](https://user-images.githubusercontent.com/42888722/215941928-8a6a8adf-0f4f-400f-97f7-533d40970896.png)



![image](https://user-images.githubusercontent.com/42888722/215942042-0aa8d13a-6d02-4023-88f9-cf7ff08e323e.png)

