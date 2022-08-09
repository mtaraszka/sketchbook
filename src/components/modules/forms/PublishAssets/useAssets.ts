import { ChangeEvent } from "react";

export const useAssets = () => {

    const publishAsset = ({ title, file }: { title: string, file: any }) => {
        console.log(title, file)
    }

    const handleFileLoad = (event: ChangeEvent<HTMLInputElement>, callback: (field: string, value: any, shouldValidate?: boolean) => void) => {
        if (event.target.files) {
            const file = event.target.files[0];
            callback('file', file);
        }
    }

    return { publishAsset, handleFileLoad };
}
