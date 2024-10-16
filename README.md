# Serverless-Web-App-using-AWS
The Serverless Application is a cloud-based web application designed to store, retrieve, and manage recipes. The application is built using AWS serverless architecture, ensuring scalability, high availability, and cost-efficiency. The frontend is hosted on Amazon S3 and interacts with backend services like API Gateway, AWS Lambda, and DynamoDB.

## Architecture 
![Serverless Application on AWS](https://github.com/user-attachments/assets/875aa700-cca2-4251-b01d-483bbf36c3c8)


## Technologies Used
• AWS Services:
o Amazon S3 (Static Website Hosting)
o AWS Lambda (Serverless Backend)
o Amazon API Gateway (REST API)
o Amazon DynamoDB (NoSQL Database)
• Frontend Technologies:
o HTML, CSS, JavaScript

## How the Application Works
1. Accessing the Application: The front end hosted on S3 provides an easy-to-use interface where users can view recipe data.
2. Sending Requests: The JavaScript code in app.js sends a GET request to the API Gateway to retrieve the list of recipes from DynamoDB.
3. API Gateway: API Gateway forwards the request to the Lambda function.
4. Lambda Processing: The Lambda function executes the necessary logic to fetch all recipe data from the DynamoDB table using a ScanCommand.
5. Response Handling: The Lambda function sends the data back to the API Gateway, which forwards it to the front end.
6. Displaying Data: The front end receives the response and dynamically displays the list of recipes on the website.
   
## Challenges Faced
• CORS Configuration: Handling CORS (Cross-Origin Resource Sharing) to allow communication between the frontend (hosted on S3) and API Gateway required specific configurations to avoid blocking requests.
• Lambda and DynamoDB Integration: Ensuring smooth data retrieval from DynamoDB through Lambda while managing permissions and handling errors efficiently was key to the project’s success.

## Skills Highlighted
• AWS Cloud: Serverless architecture using Lambda, API Gateway, DynamoDB, and S3.
• Full-Stack Development: Experience in integrating backend services with a dynamic frontend.
• JavaScript: Use of modern JavaScript to interact with REST APIs and dynamically update the front end.
• NoSQL Databases: Practical experience in using DynamoDB for scalable and efficient data storage.

## Conclusion
This project highlights the power of AWS Serverless Architecture in building scalable, cost-efficient web applications. By leveraging services like S3, API Gateway, Lambda, and DynamoDB, I was able to create an efficient, highly available recipe application with no need for traditional server management.

## Step by Step guide on Medium: https://medium.com/@cloud.hardikrathod/how-to-build-a-serverless-web-application-using-aws-efeb164d6962
