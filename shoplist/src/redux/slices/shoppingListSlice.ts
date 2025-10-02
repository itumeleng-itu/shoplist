import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  notes?: string;
  category: string;
  image?: string;
  dateAdded: string;
}

export interface ShoppingList {
  id: string;
  userId: string;
  title: string;
  items: ShoppingItem[];
  createdAt: string;
  updatedAt: string;
  isShared?: boolean;
  sharedWith?: string[];
}

interface ShoppingListState {
  lists: ShoppingList[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  sortBy: 'name' | 'category' | 'dateAdded';
  sortOrder: 'asc' | 'desc';
}

const initialState: ShoppingListState = {
  lists: [],
  loading: false,
  error: null,
  searchQuery: '',
  sortBy: 'dateAdded',
  sortOrder: 'desc',
};

const shoppingListSlice = createSlice({
  name: 'shoppingLists',
  initialState,
  reducers: {
    // Fetch Lists
    fetchListsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchListsSuccess: (state, action: PayloadAction<ShoppingList[]>) => {
      state.lists = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchListsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Add List
    addList: (state, action: PayloadAction<ShoppingList>) => {
      state.lists.push(action.payload);
    },

    // Update List
    updateList: (state, action: PayloadAction<ShoppingList>) => {
      const index = state.lists.findIndex((list) => list.id === action.payload.id);
      if (index !== -1) {
        state.lists[index] = action.payload;
      }
    },

    // Delete List
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },

    // Add Item to List
    addItemToList: (
      state,
      action: PayloadAction<{ listId: string; item: ShoppingItem }>
    ) => {
      const list = state.lists.find((list) => list.id === action.payload.listId);
      if (list) {
        list.items.push(action.payload.item);
        list.updatedAt = new Date().toISOString();
      }
    },

    // Update Item in List
    updateItemInList: (
      state,
      action: PayloadAction<{ listId: string; item: ShoppingItem }>
    ) => {
      const list = state.lists.find((list) => list.id === action.payload.listId);
      if (list) {
        const itemIndex = list.items.findIndex(
          (item) => item.id === action.payload.item.id
        );
        if (itemIndex !== -1) {
          list.items[itemIndex] = action.payload.item;
          list.updatedAt = new Date().toISOString();
        }
      }
    },

    // Delete Item from List
    deleteItemFromList: (
      state,
      action: PayloadAction<{ listId: string; itemId: string }>
    ) => {
      const list = state.lists.find((list) => list.id === action.payload.listId);
      if (list) {
        list.items = list.items.filter((item) => item.id !== action.payload.itemId);
        list.updatedAt = new Date().toISOString();
      }
    },

    // Search
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    // Sort
    setSortBy: (state, action: PayloadAction<'name' | 'category' | 'dateAdded'>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },

    // Clear Error
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  fetchListsStart,
  fetchListsSuccess,
  fetchListsFailure,
  addList,
  updateList,
  deleteList,
  addItemToList,
  updateItemInList,
  deleteItemFromList,
  setSearchQuery,
  setSortBy,
  setSortOrder,
  clearError,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;