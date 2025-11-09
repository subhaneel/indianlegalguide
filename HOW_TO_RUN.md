# How to Run the Indian Legal Guide Application

## ✅ Server is Currently Running!

### 🔗 Access the Application:

**Main URL**: http://localhost:3000

### All Available Pages:

1. **Home**: http://localhost:3000
2. **Documents**: http://localhost:3000/documents
   - Constitution: http://localhost:3000/documents/constitution
   - Laws: http://localhost:3000/documents/laws
   - Legal System: http://localhost:3000/documents/legal-system
3. **AI Legal Advisor**: http://localhost:3000/ask-ai
4. **Emergency Contacts**: http://localhost:3000/emergency
5. **Police Guidance**: http://localhost:3000/police-guidance

## If the Link Doesn't Work:

### Step 1: Check if Server is Running
Open PowerShell and run:
```powershell
netstat -ano | findstr "3000"
```

If you see `LISTENING` on port 3000, the server is running.

### Step 2: Restart the Server

**Option A: Using Command Prompt (Recommended)**
1. Open Command Prompt (CMD)
2. Navigate to project folder:
   ```
   cd D:\project7
   ```
3. Run:
   ```
   npm run dev
   ```
4. Wait for "Ready" message
5. Open http://localhost:3000 in your browser

**Option B: Using the Batch File**
1. Double-click `start-server.bat` in the project folder
2. Wait for server to start
3. Open http://localhost:3000 in your browser

### Step 3: Try Alternative URLs
- http://127.0.0.1:3000
- http://localhost:3000

### Step 4: Check Browser
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Try incognito/private mode
- Disable browser extensions temporarily

### Step 5: Check Firewall
- Make sure Windows Firewall allows Node.js
- Port 3000 should not be blocked

## Troubleshooting

### If you get "Cannot GET /" error:
- Wait a few seconds for Next.js to compile
- Refresh the page
- Check the terminal for errors

### If port 3000 is already in use:
1. Find the process using port 3000:
   ```
   netstat -ano | findstr "3000"
   ```
2. Kill the process (replace PID with actual process ID):
   ```
   taskkill /PID <PID> /F
   ```
3. Restart the server

### If npm commands don't work:
1. Check Node.js is installed: `node --version`
2. Install dependencies: `npm install`
3. Try using `npx next dev` instead

## Server Status Check

Run this in PowerShell to check if server is responding:
```powershell
Test-NetConnection -ComputerName localhost -Port 3000 -InformationLevel Quiet
```

If it returns `True`, the server is running!

## Need Help?

1. Check the terminal/console for error messages
2. Verify all files are in place
3. Make sure Node.js version is 18 or higher
4. Try reinstalling dependencies: `npm install`

---

**The server is running on port 3000. Open http://localhost:3000 in your browser!**

