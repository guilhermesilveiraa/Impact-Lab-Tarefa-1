import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useState } from "react";

export function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);
    setMessage(null);
    setError(null);

    if (selected) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selected);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setMessage(null);
    setError(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Erro no upload");

      setMessage(data.message || "Upload feito com sucesso!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      p={4}
      maxWidth={400}
      mx="auto"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Typography variant="h5" textAlign="center">
        Upload de Imagem
      </Typography>

      <Button variant="outlined" component="label">
        Escolher imagem
        <input
          hidden
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </Button>

      {preview && (
        <Box mt={1}>
          <img
            src={preview}
            alt="Preview"
            style={{ width: "100%", borderRadius: 8, border: "1px solid #ccc" }}
          />
        </Box>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!file || loading}
      >
        Enviar
      </Button>

      {loading && <CircularProgress />}
      {message && <Alert severity="success">{message}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  );
}
