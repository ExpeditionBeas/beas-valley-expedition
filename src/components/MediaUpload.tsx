import { useState, useRef } from "react";
import { Upload, X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MediaUploadProps {
  type: 'video' | 'photo';
  placeholder: string;
  maxSize?: number;
  accept?: string;
}

const MediaUpload = ({ type, placeholder, maxSize = 10, accept }: MediaUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFile: File) => {
    if (selectedFile.size > maxSize * 1024 * 1024) {
      alert(`File size should be less than ${maxSize}MB`);
      return;
    }

    setFile(selectedFile);
    const url = URL.createObjectURL(selectedFile);
    setPreview(url);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Card className={`relative w-full aspect-video bg-muted/20 border-2 border-dashed border-border transition-colors ${
      isDragging ? 'border-primary bg-primary/10' : ''
    }`}>
      {preview ? (
        <div className="relative w-full h-full">
          {type === 'video' ? (
            <video 
              src={preview} 
              className="w-full h-full object-cover rounded-md"
              controls
            />
          ) : (
            <img 
              src={preview} 
              alt="Preview" 
              className="w-full h-full object-cover rounded-md"
            />
          )}
          <Button
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2"
            onClick={removeFile}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center h-full cursor-pointer p-4"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          {type === 'video' ? (
            <Play className="h-12 w-12 text-muted-foreground mb-4" />
          ) : (
            <Upload className="h-12 w-12 text-muted-foreground mb-4" />
          )}
          <p className="text-center text-sm text-muted-foreground">
            {placeholder}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Max size: {maxSize}MB
          </p>
        </div>
      )}
      
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleFileInput}
      />
    </Card>
  );
};

export default MediaUpload;