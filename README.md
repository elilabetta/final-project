# final-project

https://ironhack-todo-list.netlify.app


## Technologies used in this project

For this project has been used several tools and technologies to ensure a robust, efficient, and maintainable codebase. Below is a brief overview of each technology used:

- Vue 3 Composition API: The core framework used for building the SPA user interface, taking advantage of the Composition API for better code organization and reusability including HTML and CSS. 

- Pinia: A state management library for Vue that simplifies the process of managing shared state across components.

- Supabase 2.0: An open-source backend-as-a-service providing authentication, real-time databases, and storage, used for handling the backend functionalities of the application. It has been used to mock the backend, real time update and to verify that application is saving and loading data correctly.

- ESLint: A static code analysis tool for identifying problematic patterns found in JavaScript code, helped me to ensure my project code quality and consistency.

- Visual Studio Code: Code editor used for this project.

- Prettier: This code formatter helped me in maintaining a consistent coding style across the project.

- Tabnine: this AI-powered code completion tool was extremely useful for productivity by providing intelligent code suggestions.

- Netlify: this platform has been used for deploying and hosting the application.

- GitHub: this platform has been used for managing the project's source code and for saving all updates to the project.

- IA: Suporte de ChatGPT para 

- Trello: A project management tool used to organize the project, track progress of it through boards. It has been a useful tool for breaking down and developing the project.

### Features used

- SPA system for creating the application.

- SUPABASE VALIDATION:

· .env FILE: it helpes to configure supabase and the application. This enable real-time syncing  of tasks with Supabase ensures that users always see the most up-to-date information without needing to refresh the page. It 

· Real-time syncing between users and Supabase for user authentication and task management is facilitated through the implementation of promises, async/await functions coupled with the Fetch API. This handle asynchronous operation, enabling a responsive and dynamic user experience.

. To create the application CRUD operation has been used as follow:


- USER AUTHENTICATION:

· Sign up, sign in and log-out users:  Secure user authentication using Supabase, allowing users to create accounts, log in to access their personal todo lists and log out once they are done. 
Challege here was making sure that user access only to their own tasks card and not to all users one.

- TASK MANAGEMENT:

The task management system is divided into two main components:
  - Add Tasks: Users can easily add new tasks to their todo list with a simple input form.
  - Ongoing Tasks: Users can manages ongoing tasks, allowing users to modify task details, mark tasks as complete, or delete tasks. This component utilizes event emission to communicate these changes to the parent component (AddTask.vue).
  Also those actions are handled within EMIT
  · Edit Tasks: Tasks can be edited to update details or correct mistakes.
  · Delete Tasks: Users can remove tasks that are no longer needed.
  · Mark as Completed: Users can mark tasks as completed, helping them keep track of their progress. To maintain simplicity and clarity (stick with KISS and DRY principles), a ternary operator combined with a CSS effect is used to indicate completion status, rather than employing a filter method.


- RESPONSIVE DESIGN: 

A responsive layout that works seamlessly across various devices, including desktops, tablets, and mobile phones.
It has been used CSS flexbox layout and percentage-based font sizing, along with viewport units (vh/vw), ensures adaptability to various screen sizes and resolutions.
Moreover, it has been used @media rule to enhance usability on mobile devices. When accessed via mobile, content and tasks are centered and displayed in a vertical layout, offering improved readability and ease of use. Furthermore, both the navigation bar and footer layout have been meticulously adjusted to fit the mobile screen, delivering a user-friendly interface tailored to mobile users' needs.



#### Backlog 


· For the user authentication I could have implemented a Password Recovery option for users who have forgotten their login credentials.

· I could have implemented a profile tab for users who enjoy customizing their experience with personalized images.

· Could have been developed more the task management to provide a more complete experience to the user. For example adding few more features such as:
 - a filter tasks to give users options to filter tasks based on their status (personal, business ,completed or pending); 
 - task prioritization and due date option to allow users to get focus on the most importat task.



##### Contributors

The project has been developed by myself with the help of my teacher Jarko (Github: https://github.com/CarlosGaLo) 
and the support of my colleagues:
Agustina (Github: https://github.com/aguscassini)
Carolina (Github: https://github.com/Carol-88)
Diego (Github: https://github.com/diegochiola) 
Thais (Github:https://github.com/thaisReAg)
Valentina (https://github.com/valekimi)
