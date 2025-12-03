import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { 
  Search, 
  LayoutGrid, 
  List, 
  Mic, 
  Bell, 
  ShoppingCart, 
  HelpCircle, 
  User,
  Folder,
  FileCode,
  Trash2,
  FilePlus,
  FolderPlus,
  Home,
  ChevronRight,
  Download,
  Loader2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const FileManager = () => {
  const [location, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileClick = (fileName: string) => {
    if (fileName === "index.html") {
      startDownload();
    }
  };

  const startDownload = () => {
    setIsDownloading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLocation("/loja");
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  // Filter logic could go here, but for now just visual
  const files = [
    { name: "css", type: "folder", date: "há 8 horas", size: "-" },
    { name: "fonts", type: "folder", date: "há 8 horas", size: "-" },
    { name: "images", type: "folder", date: "há 8 horas", size: "-" },
    { name: "js", type: "folder", date: "há 8 horas", size: "-" },
    { name: "index.html", type: "file", date: "há 8 horas", size: "10.69 KB" },
  ].filter(f => f.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#1e2124] text-gray-300 font-sans flex flex-col overflow-hidden">
      {/* Dialog for Download Simulation */}
      <Dialog open={isDownloading} onOpenChange={() => {}}>
        <DialogContent className="bg-[#2d3035] border-gray-700 text-gray-200 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Download className="w-5 h-5 text-blue-500" />
              Baixando arquivos...
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Preparando o ambiente da loja segura. Por favor, aguarde.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div className="flex justify-between text-xs text-gray-400">
              <span>index.html</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-gray-700" indicatorClassName="bg-blue-500" />
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Loader2 className="w-3 h-3 animate-spin" />
              Verificando integridade dos arquivos...
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Header */}
      <header className="h-14 bg-[#2d3035] flex items-center justify-between px-4 shadow-sm shrink-0">
        <div className="flex items-center gap-4 w-1/3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
            h
          </div>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar..." 
              className="bg-[#1e2124] border-none h-9 pl-10 text-sm text-gray-300 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-gray-600"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <LayoutGrid className="w-5 h-5 cursor-pointer hover:text-gray-200" />
          <Mic className="w-5 h-5 cursor-pointer hover:text-gray-200" />
          <div className="w-px h-4 bg-gray-600"></div>
          <Bell className="w-5 h-5 cursor-pointer hover:text-gray-200" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-200" />
          <HelpCircle className="w-5 h-5 cursor-pointer hover:text-gray-200" />
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white cursor-pointer">
            <User className="w-5 h-5" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#212428] flex flex-col border-r border-gray-700/50 hidden md:flex">
          <div className="p-4 space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 bg-[#2c3036] text-white rounded-md cursor-pointer">
              <Folder className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">Arquivos</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#2c3036] hover:text-gray-200 rounded-md cursor-pointer transition-colors">
              <FolderPlus className="w-5 h-5" />
              <span className="text-sm font-medium">Nova pasta</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#2c3036] hover:text-gray-200 rounded-md cursor-pointer transition-colors">
              <FilePlus className="w-5 h-5" />
              <span className="text-sm font-medium">Novo arquivo</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:bg-[#2c3036] hover:text-gray-200 rounded-md cursor-pointer transition-colors">
              <Trash2 className="w-5 h-5" />
              <span className="text-sm font-medium">Lixeira</span>
            </div>
          </div>

          <div className="mt-auto p-4">
            <div className="text-xs text-gray-500 mb-2 flex justify-between">
              <span>Espaço</span>
              <span>16.96 MB / 25 GB</span>
            </div>
            <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[1%] bg-blue-500 rounded-full"></div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700/50 text-xs text-gray-500">
              <p>Inodes</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col bg-[#1e2124]">
          {/* Breadcrumbs */}
          <div className="h-12 border-b border-gray-700/50 flex items-center px-4 gap-2 text-sm text-gray-400 overflow-x-auto">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="hover:text-gray-200 cursor-pointer">public_html</span>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="hover:text-gray-200 cursor-pointer">quiz</span>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-white font-medium">loja</span>
          </div>

          {/* File List Header */}
          <div className="grid grid-cols-12 px-4 py-2 text-xs font-medium text-gray-500 border-b border-gray-700/50">
            <div className="col-span-6 flex items-center gap-2 cursor-pointer hover:text-gray-300">
              Nome <span className="text-[10px]">↑</span>
            </div>
            <div className="col-span-2 text-right cursor-pointer hover:text-gray-300">
              Tamanho
            </div>
            <div className="col-span-4 text-right cursor-pointer hover:text-gray-300">
              Última modificação
            </div>
          </div>

          {/* File List */}
          <div className="flex-1 overflow-auto">
            {files.map((item, i) => (
              <div 
                key={i} 
                onClick={() => handleFileClick(item.name)}
                className="grid grid-cols-12 px-4 py-3 border-b border-gray-700/30 hover:bg-[#2c3036] cursor-pointer group transition-colors items-center"
              >
                <div className="col-span-6 flex items-center gap-3">
                  {item.type === 'folder' ? (
                    <Folder className="w-5 h-5 text-blue-400 fill-blue-400/20" />
                  ) : (
                    <FileCode className="w-5 h-5 text-orange-500" />
                  )}
                  <span className="text-sm text-gray-200 font-medium group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </span>
                </div>
                <div className="col-span-2 text-right text-sm text-gray-400">
                  {item.size}
                </div>
                <div className="col-span-4 text-right text-sm text-gray-400 flex items-center justify-end gap-4">
                  {item.date}
                  <div className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono mr-2">drwxr-xr-x</span>
                  </div>
                </div>
              </div>
            ))}
            {files.length === 0 && (
              <div className="p-8 text-center text-gray-500 text-sm">
                Nenhum arquivo encontrado. Tente pesquisar por "index.html"
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FileManager;
