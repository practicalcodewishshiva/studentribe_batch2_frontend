# 🔐 Protected Routes Flow Diagram
## Visual Representation for Beginners

---

## 🏠 Complete App Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    🌐 ZERODHA TRADING APP                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    📱 USER JOURNEY                              │
└─────────────────────────────────────────────────────────────────┘

Step 1: User Opens App
┌─────────────────┐
│   🌐 Browser    │
│ localhost:3000  │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│   📝 Login      │
│     Page        │
│   (Public)      │
└─────────┬───────┘
          │
          │ User enters:
          │ Username: test
          │ Password: 123
          │
          ▼
┌─────────────────┐
│  🔍 Login Check │
│                 │
│ ✅ Valid?       │
│ ❌ Invalid?     │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│  💾 Save Token  │
│ localStorage    │
│ access_token    │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│  📊 Dashboard   │
│  (Protected)    │
└─────────┬───────┘
          │
          │ User clicks navigation
          │
          ▼
┌─────────────────┐
│  🔐 Protected   │
│     Routes      │
│                 │
│ Check Token?    │
│ ✅ Yes → Show   │
│ ❌ No → Login   │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│  💼 Portfolio   │
│  📋 Orders      │
│  👤 Profile     │
│  (All Protected)│
└─────────────────┘
```

---

## 🛡️ Security Guard Logic

```
┌─────────────────────────────────────────────────────────────────┐
│                    🛡️ PROTECTED ROUTES COMPONENT                │
└─────────────────────────────────────────────────────────────────┘

User tries to visit: /dashboard, /portfolio, /orders

┌─────────────────┐
│  🔍 Check Token │
│                 │
│ localStorage    │
│ .getItem(       │
│ "access_token") │
└─────────┬───────┘
          │
          │ Token exists?
          │
    ┌─────▼─────┐
    │           │
    ▼           ▼
┌───────┐   ┌─────────┐
│  ✅   │   │   ❌    │
│ YES   │   │   NO    │
└───┬───┘   └────┬────┘
    │            │
    ▼            ▼
┌───────┐   ┌─────────┐
│ Show  │   │Redirect │
│ Page  │   │ to Login│
└───────┘   └─────────┘
```

---

## 🎯 Route Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                        📋 ROUTE CONFIGURATION                   │
└─────────────────────────────────────────────────────────────────┘

App.jsx Routes:

┌─────────────────┐
│   📝 /login     │
│   (Public)      │
│   LoginForm     │
└─────────────────┘

┌─────────────────┐
│  📊 /dashboard  │
│  (Protected)    │
│  ProtectedRoutes│
│  └─ Dashboard   │
└─────────────────┘

┌─────────────────┐
│  💼 /portfolio  │
│  (Protected)    │
│  ProtectedRoutes│
│  └─ Portfolio   │
└─────────────────┘

┌─────────────────┐
│  📋 /orders     │
│  (Protected)    │
│  ProtectedRoutes│
│  └─ Orders      │
└─────────────────┘
```

---

## 🔄 User States

```
┌─────────────────────────────────────────────────────────────────┐
│                        👤 USER STATES                           │
└─────────────────────────────────────────────────────────────────┘

State 1: Not Logged In
┌─────────────────┐
│  🚫 No Token    │
│                 │
│ Can only visit: │
│ - /login        │
│ - /signup       │
│                 │
│ Cannot visit:   │
│ - /dashboard    │
│ - /portfolio    │
│ - /orders       │
└─────────────────┘

State 2: Logged In
┌─────────────────┐
│  ✅ Has Token   │
│                 │
│ Can visit:      │
│ - /dashboard    │
│ - /portfolio    │
│ - /orders       │
│ - /profile      │
│                 │
│ Can logout      │
└─────────────────┘
```

---

## 🎮 Navigation Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                      🔗 NAVIGATION FLOW                         │
└─────────────────────────────────────────────────────────────────┘

Dashboard Page
┌─────────────────┐
│  📊 Dashboard   │
│                 │
│ [View Portfolio]│
│ [View Orders]   │
│ [Logout]        │
└─────────┬───────┘
          │
          │ Click "View Portfolio"
          ▼
┌─────────────────┐
│  🔐 Check Token │
│                 │
│ ✅ Token OK     │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│  💼 Portfolio   │
│                 │
│ [Back to Dash]  │
│ [View Orders]   │
└─────────────────┘
```

---

## 🚨 Error Handling

```
┌─────────────────────────────────────────────────────────────────┐
│                      ⚠️ ERROR SCENARIOS                         │
└─────────────────────────────────────────────────────────────────┘

Scenario 1: User tries to access protected page without login
┌─────────────────┐
│  🚫 No Token    │
│                 │
│ User visits:    │
│ /dashboard      │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│  🔄 Redirect    │
│                 │
│ Navigate to:    │
│ /login          │
└─────────────────┘

Scenario 2: User logs out while on protected page
┌─────────────────┐
│  🚪 Logout      │
│                 │
│ Remove token    │
│ from storage    │
└─────────┬───────┘
          │
          ▼
┌─────────────────┐
│  🔄 Redirect    │
│                 │
│ Navigate to:    │
│ /login          │
└─────────────────┘
```

---

## 🎯 Key Components

```
┌─────────────────────────────────────────────────────────────────┐
│                    🧩 COMPONENT STRUCTURE                       │
└─────────────────────────────────────────────────────────────────┘

1. App.jsx (Main Router)
┌─────────────────┐
│  🌐 App.jsx     │
│                 │
│ - Routes        │
│ - Route         │
│ - ProtectedRoutes│
└─────────────────┘

2. ProtectedRoutes.jsx (Security Guard)
┌─────────────────┐
│  🛡️ Protected   │
│     Routes      │
│                 │
│ - Check token   │
│ - Show page     │
│ - Redirect      │
└─────────────────┘

3. LoginPage.jsx (Entry Point)
┌─────────────────┐
│  📝 LoginPage   │
│                 │
│ - Username      │
│ - Password      │
│ - Login button  │
│ - Save token    │
└─────────────────┘

4. Dashboard.jsx (Protected Page)
┌─────────────────┐
│  📊 Dashboard   │
│                 │
│ - User info     │
│ - Navigation    │
│ - Logout        │
└─────────────────┘
```

---

## 🎨 Visual Summary

```
🏠 ZERODHA APP = HOUSE WITH SECURITY

┌─────────────────────────────────────────────────────────────────┐
│                    🏠 YOUR ZERODHA HOUSE                        │
└─────────────────────────────────────────────────────────────────┘

Front Door (Public)
┌─────────────────┐
│  📝 Login Page  │
│  (Anyone can    │
│   see this)     │
└─────────────────┘
          │
          │ After login
          ▼
┌─────────────────┐
│  🛡️ Security    │
│     Guard       │
│  (Checks if you │
│   have key)     │
└─────────────────┘
          │
          │ If you have key
          ▼
┌─────────────────┐
│  🏠 Inside      │
│     House       │
│                 │
│ 📊 Dashboard    │
│ 💼 Portfolio    │
│ 📋 Orders       │
│ 👤 Profile      │
└─────────────────┘

🔑 Key = access_token in localStorage
🛡️ Security Guard = ProtectedRoutes component
```

---

## 🎯 Learning Summary

**What you learned:**
1. **Protected Routes** = Security system for your app
2. **localStorage** = How to remember if user is logged in
3. **Navigate** = How to redirect users
4. **Route Protection** = Wrapping components with security

**The Pattern:**
```javascript
<Route
  path="/protected-page"
  element={
    <ProtectedRoutes>
      <YourComponent />
    </ProtectedRoutes>
  }
/>
```

**Security Flow:**
```
User visits page → Check if logged in → 
If YES: Show page → If NO: Redirect to login
```

---

**🎉 Congratulations! You now understand how to protect your app like a real security guard! 🛡️**

