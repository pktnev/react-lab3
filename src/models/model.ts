export type IPalette = PaletteFields[]

export interface PaletteFields {
    paletteName: string
    id: string
    emoji: string
    colors: Color[]
}

export interface Color {
    name: string
    color: string
}