import { v7 as uuidv7 } from "uuid";

export interface ImageProps {
    id: string
    fileName: string
    mimeType: string
    sizeInBytes: number
}

export class Image {
    private constructor( readonly props: ImageProps) {}


    static create(props: Omit<ImageProps, "id">, id?: string) {
        return new Image({
            id:id ?? uuidv7(),
            ...props
        })
    }

    isValid(): boolean {
    return this.props.sizeInBytes > 0 && this.props.mimeType.startsWith('image/');
  }

}