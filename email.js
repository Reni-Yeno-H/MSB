"use strict";
/*

    The Wings Group
    Author: Hao Ren Yuan
    Date: June 6, 2023

    Filename: email.js
*/

document.addEventListener("DOMContentLoaded", function () {
    const sendMessageButton = document.getElementById("sendMessageButton");
    const promptOverlay = document.createElement("div");
    promptOverlay.classList.add("prompt-overlay");
  
    const promptBox = document.createElement("div");
    promptBox.classList.add("prompt-box");
  
    promptBox.innerHTML = `
      <h3>Send Message</h3>
      <label for="name">Name:</label>
      <input type="text" id="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" required>
      <label for="message">Message:</label>
      <input type="text" id="message" required>
      <p class="message-error" style="display: none;">Please fill out all fields.</p>
      <button class="cancel" id="cancelButton">Cancel</button>
      <button id="sendButton">Send</button>
    `;
  
    promptOverlay.appendChild(promptBox);
    document.body.appendChild(promptOverlay);
  
    sendMessageButton.addEventListener("click", function () {
      promptOverlay.style.display = "block";
    });
  
    const cancelButton = document.getElementById("cancelButton");
    cancelButton.addEventListener("click", function () {
      promptOverlay.style.display = "none";
    });
  
    const sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", function () {
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      const messageError = document.querySelector(".message-error");
  
      if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        messageError.style.display = "block";
      } else {
        // Perform the action to send the message here (e.g., AJAX request)
        // For this example, we'll just close the prompt
        promptOverlay.style.display = "none";
      }
    });
  });