import { createSelector, createSlice } from "@reduxjs/toolkit";
const initialState = { contacts: [] };
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    startData(state, action) {
      state.contacts = action.payload;
    },
    add(state, action) {
      state.contacts.push(action.payload);
    },
    remove(state, action) {
      state.contacts = state.contacts.filter(
        (contacts) => contacts.id !== action.payload
      );
    },
    toggle(state, action) {
      const contact = state.contacts.find(
        (contact) => contact?.id === action.payload
      );
      contact.favorite = !contact.favorite;
    },
  },
});

export const { add, remove, startData, toggle } = contactsSlice.actions;
export default contactsSlice.reducer;

export const contactsActions = (state) => state.contacts;
export const getContactsSlice = (state) => state.contacts.contacts ?? [];
export const favorites = createSelector([getContactsSlice], (contacts) =>
  contacts.filter((contact) => contact.favorite)
);
