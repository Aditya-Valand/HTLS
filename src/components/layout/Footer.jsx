// src/components/layout/footer.jsx
export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          <span className="font-bold text-sm">HxTLS DAO</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2025 HxTLS DAO. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}