✅ Task 1: Setting Up Your Environment - Install VS Code (if not installed). (done ✅) - Set up Live Server or open the HTML file directly in a browser (done ✅) - Open the DevTools Console (Right-click → Inspect → Console). (done ✅)

✅ Task 2: Write Your First JavaScript Code - answer in : index.html and script.js

    Note:
    document.write() breaks with defer

    When you use: <script src="script.js" defer></script>

    - The browser behavior changes:
        HTML is parsed first
        Then your script runs after the page is loaded
    -The problem with document.write()
        document.write() only works while the page is being parsed

    But with defer:
        The page is already finished loading
        So calling document.write() becomes dangerous

✅ Task 3: Experiment with Different JavaScript Loading Methods

    - defer (Modern best practice)

        <head>
        <script src="script.js" defer></script>
        </head>

    🟢 Behavior:

        Script downloads in parallel
        Executes after HTML is parsed

            👉 Best for most cases

    - async (⚡ Advanced)

        <head>
        <script src="script.js" async></script>
        </head>

    🟡 Behavior:

        Loads and runs whenever ready
        Doesn’t wait for HTML

    🔴 Use case:
        - Analytics scripts
        - Ads
        - Chatbot
    best for independent script

✅ Task 4: Take Notes and Submit
