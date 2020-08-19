import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import App from '../../App.js';

describe("Renderizacao" , () => {
    test("Imagem", () => {
        const {getByTestId} = render(<App />)
        const imagem = getByTestId("imagem")

        expect(imagem).toBeInTheDocument()
    })
})