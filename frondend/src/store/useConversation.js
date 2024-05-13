import {create} from "zustand";

const useConversation = create((set) => ({
    selectedConversation : null, 
    setSelectedConversation : (selectedConversation)=> set({selectedConversation}),           //(presentSelected) => set((state)=>({selectedConversation: state.presentSelected})),
    messages: [],
    setMessages: (messages)=>set({messages})

}));

export default useConversation;