
import { useState } from "react";
import { Upload, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface FileUploadProps {
  onUploadStart: () => void;
  onUploadComplete: () => void;
}

export const FileUpload = ({ onUploadStart, onUploadComplete }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadComplete, setUploadComplete] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload");
      return;
    }

    setUploading(true);
    setError(null);
    onUploadStart();

    // Simulate file upload with progress
    const totalSteps = 10;
    for (let i = 1; i <= totalSteps; i++) {
      await new Promise(resolve => setTimeout(resolve, 300));
      setProgress((i / totalSteps) * 100);
    }

    setUploading(false);
    setUploadComplete(true);
    onUploadComplete();
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
        {!uploading && !uploadComplete ? (
          <>
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400">
              <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-semibold text-primary hover:text-primary/80 focus-within:outline-none">
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              PDF, PNG, JPG up to 10MB
            </p>
          </>
        ) : uploadComplete ? (
          <div className="space-y-2">
            <Check className="mx-auto h-12 w-12 text-green-500" />
            <p className="text-sm font-medium text-green-600 dark:text-green-400">Upload complete!</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{file?.name}</p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm font-medium">Uploading...</p>
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-gray-500 dark:text-gray-400">{file?.name}</p>
          </div>
        )}
      </div>

      {file && !uploading && !uploadComplete && (
        <div className="flex items-center justify-between bg-muted p-2 rounded-md">
          <span className="text-sm truncate max-w-[200px]">{file.name}</span>
          <Button onClick={handleUpload} disabled={uploading}>
            Upload
          </Button>
        </div>
      )}

      {error && (
        <div className="flex items-center text-red-600 text-sm">
          <AlertCircle className="h-4 w-4 mr-1" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
