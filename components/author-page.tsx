import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Edit, Eye, BarChart, Settings, Plus, Zap } from 'lucide-react'
import {Button} from './ui/button'

export default function PaginaAutor() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-avatar.jpg" alt="@autorexemplo" />
              <AvatarFallback>AE</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-semibold">Olá, Autor Exemplo</h1>
              <p className="text-sm text-muted-foreground">Bem-vindo ao seu painel</p>
            </div>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configurações
            </Button>
            <Button variant="ghost" size="sm">
              Sair
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Livros</CardTitle>
              <Book className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 no último mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leitores</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+15% desde o último mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 45,231.89</div>
              <p className="text-xs text-muted-foreground">+20% desde o último mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Manuscritos Ativos</CardTitle>
              <Edit className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 usando revisão por IA</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="livros" className="mt-6">
          <TabsList>
            <TabsTrigger value="livros">Livros Publicados</TabsTrigger>
            <TabsTrigger value="manuscritos">Manuscritos</TabsTrigger>
            <TabsTrigger value="estatisticas">Estatísticas</TabsTrigger>
            <TabsTrigger value="ferramentas">Ferramentas de Publicação</TabsTrigger>
          </TabsList>
          <TabsContent value="livros" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Seus Livros Publicados</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Novo Livro
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((book) => (
                <Card key={book}>
                  <CardHeader>
                    <CardTitle>Título do Livro {book}</CardTitle>
                    <CardDescription>Publicado em 01/0{book}/2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-[3/4] relative mb-4">
                      <img
                        src={`/placeholder.svg?height=400&width=300`}
                        alt={`Capa do Livro ${book}`}
                        className="object-cover rounded-md"
                        style={{width: '100%', height: '100%'}}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Vendas: 1,23{book}</span>
                      <span>Avaliação: 4.{book}/5</span>
                    </div>
                    <Progress value={7 * book} className="h-2" />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">Editar</Button>
                    <Button variant="outline" size="sm">Ver Análise</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="manuscritos" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Seus Manuscritos</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Novo Manuscrito
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((manuscript) => (
                <Card key={manuscript}>
                  <CardHeader>
                    <CardTitle>Manuscrito {manuscript}</CardTitle>
                    <CardDescription>Última edição: há {manuscript} dia(s)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={33 * manuscript} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {3000 * manuscript} palavras / 50,000 palavras
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">Continuar Escrevendo</Button>
                    <Button size="sm">
                      <Zap className="h-4 w-4 mr-2" />
                      Revisão IA
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="estatisticas">
            <Card>
              <CardHeader>
                <CardTitle>Estatísticas Detalhadas</CardTitle>
                <CardDescription>Visão geral do desempenho dos seus livros</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Vendas por Mês</h4>
                    <div className="h-[200px] bg-muted rounded-md"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Livros Mais Vendidos</h4>
                    <ul className="space-y-2">
                      {[1, 2, 3].map((book) => (
                        <li key={book} className="flex items-center justify-between text-sm">
                          <span>Título do Livro {book}</span>
                          <span className="font-medium">{1000 - (book * 200)} vendas</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ferramentas">
            <Card>
              <CardHeader>
                <CardTitle>Ferramentas de Autopublicação</CardTitle>
                <CardDescription>Recursos para ajudar na sua jornada de publicação</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Button className="h-auto flex flex-col items-center justify-center p-4 space-y-2">
                  <Zap className="h-6 w-6 mb-2" />
                  <span className="text-lg font-medium">Revisão por IA</span>
                  <span className="text-sm text-muted-foreground text-center">
                    Analise e melhore seu manuscrito com IA
                  </span>
                </Button>
                <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 space-y-2">
                  <Book className="h-6 w-6 mb-2" />
                  <span className="text-lg font-medium">Formatação de eBook</span>
                  <span className="text-sm text-muted-foreground text-center">
                    Converta seu manuscrito para formatos de eBook
                  </span>
                </Button>
                <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 space-y-2">
                  <Eye className="h-6 w-6 mb-2" />
                  <span className="text-lg font-medium">Pré-visualização</span>
                  <span className="text-sm text-muted-foreground text-center">
                    Veja como seu livro ficará em diferentes dispositivos
                  </span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Plataforma de Autopublicação. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Termos</Button>
            <Button variant="ghost" size="sm">Privacidade</Button>
            <Button variant="ghost" size="sm">Contato</Button>
          </div>
        </div>
      </footer>
    </div>
  )
}