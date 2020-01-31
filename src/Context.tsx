import React, { createContext, useState } from 'react';

interface AppContextInterface {
    name: string,
    author: string,
    url: string
}

export const { Provider, Consumer } = createContext<AppContextInterface| null>(null);