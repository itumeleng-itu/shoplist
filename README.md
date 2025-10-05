# shoplist

## Shopping List App Planning

### Moodboard

- **Colors:** Soft blues, greens, and whites for a clean, friendly look.
- **Typography:** Sans-serif fonts (e.g., Inter, Roboto) for readability.
- **Icons:** Shopping cart, user profile, category tags, edit/delete.
- **Layout:** Card-based lists, clear navigation bar, responsive grid.
- **Interactivity:** Hover effects, cursor changes, subtle transitions.
- **Notifications:** Toasts/snackbars for feedback (success, error, loading).

### Step-by-Step Planning

1. **Project Setup**
   - Initialize ReactTS project (Vite).
   - Set up Redux Toolkit for state management.
   - Install react-router-dom v6 for navigation.
   - Set up json-server for backend data persistence.

2. **Routing & Navigation**
   - Configure routes for Login, Register, Home, Profile, Shopping List pages.
   - Implement protected routes for authenticated users.
   - Redirect users based on authentication state.

3. **Authentication & User Management**
   - Registration form: email, password, name, surname, cell number.
   - Encrypt password before storing (e.g., using bcryptjs).
   - Login form: validate credentials, decrypt password.
   - Store user session in Redux and localStorage.
   - Restrict access to login/register for logged-in users.

4. **Profile Management**
   - Display user profile info.
   - Allow editing of profile and credentials.
   - Update user data in json-server and Redux.

5. **Shopping List CRUD**
   - Add new shopping list: name, quantity, notes, category, image.
   - Display all lists for the user.
   - Edit and delete lists/items.
   - Persist changes to json-server and Redux.

6. **Search & Sort**
   - Implement search by name (sync with URL query).
   - Implement sorting by name, category, date (sync with URL query).
   - Listen for URL changes and update view accordingly.

7. **Categories/Tags**
   - Allow categorization of items.
   - Filter lists by category.

8. **Sharing**
   - Generate shareable links for shopping lists.

9. **UI/UX & Responsiveness**
   - Use reusable components (Button, Form, Card, etc.).
   - Responsive design for breakpoints: 320px, 480px, 768px, 1024px, 1200px.
   - Visual feedback for actions (hover, cursor, notifications).

10. **Security & Privacy**
    - Encrypt sensitive data.
    - Protect routes.
    - Validate user input.

11. **Documentation**
    - Update README with setup, usage, and design decisions.

### Pseudocode

#### Authentication Flow
```
On Register:
  - Collect user info
  - Encrypt password
  - Save user to json-server

On Login:
  - Collect credentials
  - Fetch user from json-server
  - Decrypt password
  - If match, set user in Redux & localStorage
  - Redirect to Home

ProtectedRoute:
  - If user not authenticated, redirect to Login
```

#### Shopping List CRUD
```
AddList:
  - Show form
  - On submit, validate & save to json-server
  - Update Redux state

EditList:
  - Fetch list by ID
  - Show editable form
  - On submit, update json-server & Redux

DeleteList:
  - Confirm deletion
  - Remove from json-server & Redux

ViewLists:
  - Fetch lists for user
  - Display in responsive grid/cards
```

#### Search & Sort
```
On Search Input:
  - Update URL query
  - Filter lists by name

On Sort Change:
  - Update URL query
  - Sort lists by selected field

On URL Change:
  - Parse query params
  - Update Redux state/view
```

#### Profile Management
```
ViewProfile:
  - Fetch user data
  - Display info

EditProfile:
  - Show editable form
  - On submit, update json-server & Redux
```

#### Sharing
```
ShareList:
  - Generate unique URL for list
  - Copy/share link
```

### Next Steps

- Commit this planning to the main branch.
- Create a development branch for implementation.
- Begin development following this plan.
