import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Book, BookOpen, Heart, Star, Search, Settings, LogOut } from 'lucide-react'

export default function PaginaLeitor() {
  const bookCategories = ['Biblioteca', 'Favoritos', 'Em Leitura', 'Recomendados']

  const renderBookGrid = (category: string) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((book) => (
        <Card key={`${category}-${book}`}>
          <CardHeader className="relative p-0">
            <img
              src={`/placeholder.svg?height=300&width=200`}
              alt={`Capa do Livro ${book}`}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-primary-foreground"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-lg mb-2">Título do Livro {book}</CardTitle>
            <p className="text-sm text-muted-foreground mb-2">Autor do Livro {book}</p>
            <div className="flex items-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${star <= book % 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <Progress value={book * 10} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">{book * 10}% concluído</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <BookOpen className="mr-2 h-4 w-4" />
              Continuar Leitura
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Book className="h-6 w-6" />
            <h1 className="text-lg font-semibold">BibliotecaDigital</h1>
          </div>
          <div className="flex items-center space-x-4">
            <form className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar livros..."
                className="pl-8 w-[200px] lg:w-[300px]"
              />
            </form>
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="@leitorexemplo" />
              <AvatarFallback>LE</AvatarFallback>
            </Avatar>
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-medium">Leitor Exemplo</span>
              <span className="text-xs text-muted-foreground">leitor@exemplo.com</span>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Sua Biblioteca</h2>
          <div className="flex items-center space-x-2">
            <Select defaultValue="recentes">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recentes">Mais Recentes</SelectItem>
                <SelectItem value="titulo">Título</SelectItem>
                <SelectItem value="autor">Autor</SelectItem>
                <SelectItem value="progresso">Progresso</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="Biblioteca" className="space-y-4">
          <TabsList>
            {bookCategories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          {bookCategories.map((category) => (
            <TabsContent key={category} value={category}>
              {renderBookGrid(category)}
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 BibliotecaDigital. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Ajuda</Button>
            <Button variant="ghost" size="sm">Termos</Button>
            <Button variant="ghost" size="sm">Privacidade</Button>
          </div>
        </div>
      </footer>
    </div>
  )
}