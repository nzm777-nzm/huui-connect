const GoogleCloudSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Full Video Library</h2>

        <p className="text-muted-foreground mb-6">
          View all high-quality videos uploaded to Google Cloud Storage.
        </p>

        <a
          href="https://drive.google.com/drive/folders/1J-AIA23xAd5jNKArZpy0Saaqbuf3RTbF"
          target="_blank"
          className="px-6 py-3 text-lg font-semibold bg-primary text-primary-foreground rounded-xl shadow-lg hover:opacity-90 transition"
        >
          Open Google Cloud Folder
        </a>
      </div>
    </section>
  );
};

export default GoogleCloudSection;
