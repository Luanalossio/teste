const data = {
    "salão": {
        "Operador de Caixa": {
            "Abertura do caixa": [
                "A01: Diariamente",
                "A02: Verificar o carregamento das maquinetas",
                "A03: Verificar o caixa central",
                "A04: Verificar se possui 300 reais no caixa em espécie (fundo de caixa)",
                "A05: Possui o dinheiro no fundo de caixa?",
                "A06: Caso SIM: Seguir para A08",
                "A07: Caso NÃO: Falar com analista financeiro pessoalmente",
                "A08: Entrar no sistema (3LM)",
                "A09: Processo finalizado"
            ],
            "Atendimento ao cliente - online": [
                "A01: Diariamente",
                "A02: Entrar no WhatsApp",
                "A03: Verificar grupo de reservas",
                "A04: Verificar as conversas privadas com os sócios",
                "A05: Responder mensagem dos clientes",
                "A06: A reserva é grande?",
                "A07: Caso SIM: passar o contato de Paulo Braz",
                "A08: Caso NÃO: Marcar a reserva",
                "A09: Perguntar dados ao cliente: nome, telefone, data e horário, e quantidade de pessoas",
                "A10: Só faz reserva até 1h antes do show começar",
                "A11: Abrir a agenda digital",
                "A12: Colocar as informações solicitadas",
                "A13: Colocar as informações dos eventos fechados por Paulo Braz",
                "A14: Avisar a Tatu das reservas",
                "A15: Processo finalizado"
            ],
            "Fechamento de mesa/comanda individual": [
                "A01: Diariamente",
                "A02: Tirar a conta da mesa através do sistema 3LM",
                "A03: Entregar a conta para o cliente conferir",
                "A04: A conta está certa?",
                "A05: Caso SIM: Perguntar a forma de pagamento",
                "A06: Caso NÃO: Chamar Maître, Luciana ou Renato",
                "A07: Qual a forma de pagamento?",
                "A08: CARTÃO: Digitar o valor na maquineta",
                "A09: Efetuar o pagamento",
                "A10: Acessar o sistema 3LM",
                "A11: Selecionar pagamento mesa",
                "A12: Lançar no sistema o pagamento",
                "A13: Emitir nota fiscal",
                "A14: DINHEIRO: Informar o valor ao cliente",
                "A15: Receber o dinheiro do cliente",
                "A16: Tem troco?",
                "A17: Caso SIM: Tirar do fundo de caixa",
                "A18: Caso NÃO: Seguir o processo",
                "A19: Acessar o sistema 3LM",
                "A20: Acessar pagamento mesa",
                "A21: Lançar no sistema o pagamento",
                "A22: Emitir nota fiscal",
                "A23: Entregar nota fiscal ao cliente",
                "A24: Processo finalizado"
            ],
            "Pagamento de consumo no balcão": [
                "A01: Diariamente",
                "A02: Entrar no sistema 3LM",
                "A03: Selecionar o modo balcão",
                "A04: Selecionar item solicitado pelo cliente",
                "A05: Perguntar a forma de pagamento",
                "A06: Cartão: digitar valor na maquineta",
                "A07: Entregar ao cliente a maquineta",
                "A08: Lançar o pagamento no 3LM",
                "A09: Emitir nota fiscal e ficha do pedido",
                "A10: Entregar nota fiscal e ficha do pedido ao cliente",
                "A11: Dinheiro: receber dinheiro",
                "A12: Tem troco?",
                "A13: Caso SIM: tirar do fundo de caixa",
                "A14: Caso NÃO: lançar o pagamento no sistema",
                "A15: Emitir nota fiscal e ficha do pedido",
                "A16: Entregar nota fiscal e ficha do pedido ao cliente",
                "A17: É bebida? Encaminhar ao bar",
                "A18: É comida? Encaminhar para boqueta",
                "A19: Processo finalizado"
            ],
            "Fechamento de contas assinadas": [
                "A01: Entrar no sistema 3LM",
                "A02: Selecionar o sócio no sistema",
                "A03: Emitir nota fiscal no modelo de nota assinada",
                "A04: Fechar a conta",
                "A05: Processo finalizado"
            ]
        },
        "Garçom": {
            "Abertura do salão": [
                "A01: Diariamente",
                "A02: Colocar as mesas da área externa para a calçada",
                "A03: Retirar cadeiras de cima das mesas do salão",
                "A04: Colocar guarda-sol",
                "A05: Limpar mesas",
                "A06: Colocar itens da mesa de volta (Porta guardanapos, azeite, pimenta, display)",
                "A07: Observar os aparadores para ver se tem os materiais",
                "A08: Os aparadores estão abastecidos?",
                "A09: Caso SIM: Se organizar para o serviço",
                "A10: Caso NÃO: Esterilizar os pratos e talheres",
                "A11: Abastecer os aparadores",
                "A12: Processo finalizado"
            ],
            "Fechamento do salão": [
                "A01: Diariamente", 
                "A02: Pegar as mesas e cadeiras da área externa para dentro",
                "A03: Retirar os itens de mesa",
                "A04: Juntar duas mesas",
                "A05: Colocar os itens de mesa retirados em cima das mesas separadas",
                "A06: Colocar as cadeiras viradas em cima da mesa",
                "A07: Fechar as grades",
                "A08: Processo finalizado"
            ],
            "Contagem dos utensílios": [
                "A01: Quinzenalmente", 
                "A02: Juntar todos os utensílios",
                "A03: Contar os utensílios",
                "A04: Passar valores para gerente administrativo",
                "A05: Processo finalizado"
            ],
            "Adicionar pedidos": [
                "A01: Quando tiver pedido",
                "A02: Colocar número da mesa na maquininha pelo sistema 3LM",
                "A03: Selecionar pedido do cliente",
                "A04: Colocar quantidade do item",
                "A05: O cliente quer mais de um item?",
                "A06: Caso SIM: Clicar em 'adicionar'",
                "A07: Selecionar novo item",
                "A08: Caso NÃO: Clicar em 'enviar'",
                "A09: Processo finalizado"
            ]
        },
        "Mestre de Salão": {
            "Cancelamento de bebidas": [
                "A01: Quando o cliente cancelar a bebida ou o garçom levar errado ou o cliente desistir do pedido",
                "A02: Receber bebida do bar",
                "A03: Inserir senha de passe pro sistema",
                "A04: Cancelar o pedido no sistema 3LM",
                "A05: Processo finalizado"
            ],
            "Análise do salão no dia anterior": [
                "A01: De terça a domingo",
                "A02: Quando o restaurante fecha",
                "A03: Olhar escala dos funcionários do dia seguinte",
                "A04: Olhar o salão",
                "A05: Analisar o calendário da casa",
                "A06: Vai ter evento privativo?",
                "A07: Caso SIM: Analisar se a escala comporta o número de pessoas",
                "A08: A escala comporta?",
                "A09: Caso SIM: Manter a escala do dia normal",
                "A10: Caso NÃO: Solicitar serviço extra de terceirizada",
                "A11: Fazer ocorrência com os cargos dos funcionários necessários",
                "A12: Caso NÃO: Analisar e olhar o salão sobre a limpeza ou manutenção",
                "A13: Fazer solicitação de limpeza pro S.G que estiver no dia",
                "A14: Processo finalizado"
            ],
            "Requisição de bebidas": [
                "A01: Diariamente", 
                "A02: Quando estiver uma baixa quantidade de bebida no bar",
                "A03: Observar os freezers e geladeiras",
                "A04: Analisar se a quantidade de bebidas está condizente com a média de bebidas que saem no dia",
                "A05: A quantidade está baixa?",
                "A06: Caso SIM: Fazer lista de solicitação com bebidas para o Estoquista",
                "A07: Caso Não: Processo finalizado"
            ],
            "Transferência de mesa": [
                "A01: Quando o cliente quiser trocar a mesa",
                "A02: Receber informações sobre as mesas que vão ser transferidas",
                "A03: Tirar a parcial dos pedidos",
                "A04: Colocar senha no sistema",
                "A05: Pegar a parcial e entregar ao novo garçom",
                "A06: Autorizar a troca das mesas",
                "A07: Processo finalizado"
            ],
            "Fechamento do salão": [
                "A01: Diariamente",
                "A02: Desligar as caixas de luz",
                "A03: Fechar hidráulica",
                "A04: Verificar limpeza de salão e bar",
                "A05: Verificar o lixo do bar",
                "A06: Processo finalizado"
            ]
        },
        "Auxiliar de Serviços Gerais": {
            "Auxiliar a limpeza": [
                "A01: Diariamente",
                "A02: Varrer salão",
                "A03: Passar pano com desinfectante",
                "A04: Na hora do almoço, retirar excesso de comida dos pratos",
                "A05: Colocar na lava louças",
                "A06: Processo finalizado"
            ],
            "Recebimento das mercadorias": [
                "A01: Quando chegar mercadoria",
                "A02: Receber fornecedor",
                "A03: Conferir mercadoria",
                "A04: Faltou algum item?",
                "A05: Caso SIM: Informar a gerente administrativo ou pessoa do setor específico",
                "A06: Caso NÃO: Assinar documento de recebimento",
                "A07: Entregar nota fiscal para o setor financeiro",
                "A08: Processo finalizado"
            ],
            "Arrumação do estoque de bebidas": [
                "A01: Toda segunda-feira",
                "A02: Fazer contagem das bebidas",
                "A03: Informar quantidade das bebidas para gerente administrativo",
                "A04: Processo finalizado"
            ]
        },
        "Auxiliar de Limpeza": {
            "Limpeza do Salão":[
                "A01: Varrer o salão",
                "A02: Lavar o salão (terças) com água sanitária e sabão clorado",
                "A03: Passar pano no salão",
                "A04: Limpar vidros da entrada",
                "A05: Varrer a calçada e corredores",
                "A06: Processo finalizado"
            ],
            "Limpeza dos Banheiros": [
                "A01: Varrer o banheiro",
                "A02: Lavar e passar pano no banheiro",
                "A03: Limpar espelhos e pias",
                "A04: Repor papel e saco de lixo",
                "A05: Processo finalizado"
            ],
            "Limpeza do Escritório": [
                "A01: Varrer o chão",
                "A02: Recolher o lixo",
                "A03: Lavar e passar pano no escritório (terças)",
                "A04: Processo finalizado"
            ],
            "Limpeza dos Refeitórios": [
                "A01: Recolher sapatos e cadeiras",
                "A02: Varrer e lavar o refeitório",
                "A03: Limpar o banheiro do refeitório",
                "A04: Processo finalizado"
            ],
            "Limpeza do Quartinho do Gerente": [
                "A01: Varrer o chão",
                "A02: Aplicar essência",
                "A03: Passar pano",
                "A04: Processo finalizado"
            ],
            "Limpeza do Dormitório": [
                "A01: Recolher colchões e lençóis",
                "A02: Varrer e lavar o dormitório (terças)",
                "A03: Passar pano",
                "A04: Processo finalizado"
            ],
            "Limpeza da Copa": [
                "A01: Recolher o lixo",
                "A02: Lavar pratos e panos de chão",
                "A03: Lavar a copa com água sanitária",
                "A04: Varrer e lavar corredor da copa",
                "A05: Recolher o lixo no fechamento",
                "A06: Processo finalizado"
            ]
        }
    },
    "financeiro": {
        "Gerente Administrativo": {
            "Compras dos pedidos": [
                "A01: Todo início de semana",
                "A02: Olhar o estoque",
                "A03: Fazer contagem do estoque (3LM)",
                "A04: Mensurar conforme a programação da semana",
                "A05: Fazer cotação",
                "A06: Fazer pedidos (Ambev, supermercado, Heineken, DLP, DWINE)",
                "A07: Faturar os pedidos",
                "A08: Aguardar a chegada das mercadorias",
                "A09: Receber notas das mercadorias com o supervisor de estoque",
                "A10: Analisar notas das mercadorias",
                "A11: Há algum erro nas notas?",
                "A12: Caso SIM: Emitir nota de devolução",
                "A13: Aguardar a entrega do produto certo",
                "A14: Caso NÃO: Guardar mercadorias no estoque",
                "A15: Passar as faturas para o financeiro",
                "A16: Atualizar as mercadorias no sistema (planilha/3LM)",
                "A17: Conferir os estoques de cima e de baixo",
                "A18: Processo finalizado"
            ],
            "Solicitação de conserto": [
                "A01: Eventualmente", 
                "A02: Receber sinalização de equipamento quebrado",
                "A03: Analisar urgência da danificação",
                "A04: Leva muito tempo para o reparo?",
                "A05: Caso SIM: Contato com 0 Grau ou Kalunga",
                "A06: Caso NÃO: Entrar em contato com a assistência",
                "A07: Analisar se compensa pagar ou comprar novo",
                "A08: O preço da manutenção é alto?",
                "A09: Caso SIM: Passar preço para o financeiro",
                "A10: Caso NÃO: Encaminhar para conserto",
                "A11: Aguardar manutenção",
                "A12: Retirar produto na assistência",
                "A13: Encaminhar nota fiscal para o financeiro",
                "A14: Processo finalizado"
            ],
            "Solicitação de manutenção": [
                "A01: Receber solicitação de manutenção",
                "A02: Analisar se o auxiliar de serviços gerais pode resolver",
                "A03: É algo grave?",
                "A04: Caso SIM: Entrar em contato com a assistência para a manutenção",
                "A05: Caso NÃO: Encaminhar para auxiliar de serviços gerais resolver",
                "A04: Fazer orçamento",
                "A05: Passar orçamento para o financeiro",
                "A06: Aguardar manutenção do equipamento",
                "A07: O equipamento é grande?",
                "A08: Caso SIM: Aguardar assistência retirar e devolver",
                "A09: Caso NÃO: Levar à assistência",
                "A10: Aguardar instalação do equipamento",
                "A11: Realizar pagamento via Pix",
                "A12: Processo finalizado"
            ],
            "Cadastro de produto no 3LM": [
                "A01: Quando houver alteração de preço ou cardápio",
                "A02: Abrir o sistema 3LM",
                "A03: Clonar um produto antigo",
                "A04: Adicionar as informações do novo produto",
                "A05: Gerar novo código de série",
                "A06: Atualizar o banco de dados",
                "A07: Baixar a atualização nas maquinetas e caixa",
                "A08: Atualizar cardápio digital",
                "A09: Subir o cardápio digital para a nuvem",
                "A10: Processo finalizado"
            ],
            "Saída do sistema de ar": [
                "A01: Analisar o problema",
                "A02: Verificar se está tudo ligado",
                "A03: Mapear o problema",
                "A04: Caso esteja tudo funcionando, ligar para 3LM",
                "A05: Acompanhar a resolução do problema",
                "A06: Testar o problema para verificar se foi solucionado",
                "A07: Processo finalizado"
            ],
            "Problemas com a internet": [
                "A01: Eventualmente",
                "A02: Entrar em contato com a empresa de internet",
                "A03: Aguardar a chegada da equipe para assistência",
                "A04: Processo finalizado"
            ],
            "Problemas com as maquininhas STONE": [
                "A01: Receber solicitação de manutenção das maquininhas",
                "A02: Identificar o problema",
                "A03: Verificar número de série",
                "A04: Abrir o aplicativo STONE",
                "A05: Acionar manutenção no app",
                "A06: Aguardar retorno da STONE",
                "A07: Precisa de conserto?",
                "A08: Caso SIM: Técnico conserta na hora",
                "A09: Caso NÃO: Receber maquineta nova",
                "A10: Instalar aplicativo 3LM na maquineta nova",
                "A11: Informar 3LM para excluir a maquineta antiga",
                "A12: Configurar IP e Porta no 3LM",
                "A13: Ligar para 3LM e liberar acesso remoto",
                "A14: Aguardar 3LM adicionar nova maquineta ao sistema",
                "A15: Baixar atualizações do banco de dados",
                "A16: Processo finalizado"
            ],
            "Configuração do evento no Sympla": [
                "A01: Semanalmente",
                "A02: Abrir o Sympla",
                "A03: Criar um novo evento",
                "A04: Adicionar as informações",
                "A05: Copiar link do evento",
                "A06: Enviar para Sócio",
                "A07: Monitorar as vendas",
                "A08: Processo finalizado"
            ],
            "Ajuste da arte do cardápio digital e físico": [
                "A01: Quando houver necessidade",
                "A02: Solicitar ajuste",
                "A03: Abrir arquivo com o cardápio atual",
                "A04: Atualizar as informações",
                "A05: Exportar em PDF para impressão",
                "A06: Adicionar informações ao sistema",
                "A07: Baixar na nuvem para o cardápio online",
                "A08: Processo finalizado"
            ]
        },
        "Analista Financeiro": {
            "Contas a pagar": [
                "A01: Diariamente",
                "A02: Receber fornecedor",
                "A03: Receber nota fiscal",
                "A04: Dar entrada em contas a pagar (Moneta Web)",
                "A05: Coletar boletos que estão para pagar",
                "A06: Pagar em boleto",
                "A07: Efetuar pagamento (Santander, Nubank)",
                "A08: Comunicar ao Gestor Financeiro",
                "A09: Aguardar lançamento dos pagamentos",
                "A10: Dar baixa dos pagamentos pelo Moneta Web",
                "A11: Conciliar os pagamentos",
                "A12: Processo finalizado"
            ],
            "Contas a receber (apenas eventos)": [
                "A01: Acessar Moneta Web",
                "A02: Acessar aba contas a receber",
                "A03: Cadastrar conta a pagar",
                "A04: Verificar pagamentos a serem recebidos",
                "A05: Pagamento foi efetuado?",
                "A06: Caso SIM: Dar baixa no sistema",
                "A07: Caso NÃO: Comunicar gestores para cobrança",
                "A08: Realizar conciliação bancária",
                "A09: Processo finalizado"
            ],
            "Pagamento de compras geral": [
                "A01: Diariamente",
                "A02: Entregar valor para o gestor administrativo ou líder de cozinha",
                "A03: Receber as notas fiscais",
                "A04: Dar baixa do valor no Moneta Web",
                "A05: Processo finalizado"
            ],
            "Pagamento de folhas de funcionários": [
                "A01: Quinzenalmente",
                "A02: Todo dia 27 enviar para a contabilidade os dados dos funcionários",
                "A03: Aguardar a contabilidade colocar no sistema",
                "A04: Receber contracheques",
                "A05: Realizar pagamento pelo Santander",
                "A06: Lançar no sistema Moneta Web",
                "A07: Dar baixa no sistema",
                "A08: Lançar na conta banco os pagamentos",
                "A09: Conciliar pagamento bancário",
                "A10: Processo finalizado"
            ],
            "Lançamento de ponto eletrônico": [
                "A01: Diariamente",
                "A02: Verificar folgas para lançar no sistema (tecnoponto)",
                "A03: Verificar banco de horas semanal",
                "A04: Verificar atestados",
                "A05: Entre 21 e 25 do mês, mapear ponto eletrônico",
                "A06: Transformar horas extras em folgas",
                "A07: Comunicar aos gestores",
                "A08: Processo finalizado"
            ],
            "Emissão de admissão": [
                "A01: Quando o funcionário é admitido",
                "A02: Preencher ficha com documentos",
                "A03: Solicitar exame admissional",
                "A04: Escanear documentos para a contabilidade",
                "A05: Solicitar VEM",
                "A06: Imprimir documentos",
                "A07: Colocar em pasta com nome do funcionário",
                "A08: Cadastrar funcionário no sistema de ponto (tecnoponto)",
                "A09: Processo finalizado"
            ],
            "Demissão": [
                "A01: Quando algum colaborador for demitido",
                "A02: Comunicar a contabilidade sobre a demissão",
                "A03: O funcionário pediu demissão?",
                "A04: Caso SIM: Receber carta de demissão",
                "A05: Escanear carta e enviar para a contabilidade",
                "A06: Caso NÃO: Solicitar aviso prévio",
                "A07: Enviar para a contabilidade o aviso prévio",
                "A08: Encaminhar funcionário para exame demissional",
                "A09: Receber resultado do exame",
                "A10: Aguardar valor da rescisão",
                "A11: Assinar documentos",
                "A12: Entregar vias de rescisão e extrato do FGTS",
                "A13: Realizar pagamento",
                "A14: Enviar comprovante de pagamento",
                "A15: Processo finalizado"
            ],
            "Emissão do XML": [
                "A01: Mensalmente",
                "A02: Gerar XML pelo 3LM",
                "A03: Enviar para a contabilidade",
                "A04: Aguardar envio dos boletos de pagamento (ICMS simples)",
                "A05: Incluir no sistema Moneta Web",
                "A06: Efetuar o pagamento",
                "A07: Baixar no sistema",
                "A08: Realizar conciliação bancária",
                "A09: Processo finalizado"
            ],
            "Pagamento de comissão": [
                "A01: Mensalmente",
                "A02: Baixar valor da taxa de serviço do mês anterior no 3LM",
                "A03: Realizar soma e retirar 20%",
                "A04: Dividir valor: 70% para salão e 30% para cozinha",
                "A05: Atribuir valores na planilha para cada funcionário",
                "A06: Mandar valores para o Gestor financeiro",
                "A07: Pagar a comissão (PIX ou Santander)",
                "A08: Dar baixa do valor no Moneta",
                "A09: Processo finalizado"
            ],
            "Fechar o caixa": [
                "A01: Receber fechamento do caixa do dia anterior",
                "A02: Conferir o dinheiro em espécie",
                "A03: Lançar no sistema Moneta Web",
                "A04: Conferir retiradas/sangrias",
                "A05: Conferir notas assinadas",
                "A06: Deu erro na nota assinada?",
                "A07: Caso SIM: Conferir no sistema 3LM",
                "A08: Conferir diferença de valor",
                "A09: Detectar valor do erro no sistema",
                "A10: Comunicar aos superiores",
                "A11: Conferir itens cancelados",
                "A12: Conferir o caixa de modo geral",
                "A13: Caso NÃO: Seguir para A14",
                "A14: Processo finalizado"
            ],
            "Controle do caixinha frege - entrada e saída": [
                "A01: Diariamente",
                "A02: Receber solicitação do valor para pagamento ou compra",
                "A03: Solicitar autorização de liberação de dinheiro a Paulo Braz",
                "A04: Aguardar recebimento da nota",
                "A05: Dar entrada no caixinha através do Moneta Web",
                "A06: Processo finalizado"
            ],
            "Organização de documentos diários": [
                "A01: Diariamente",
                "A02: Organizar documentos diários como boletos pagos, documentos de funcionários",
                "A03: Arquivar documentos na pasta",
                "A04: Processo finalizado"
            ]
        },
        "Consultora Financeira": {
            "Conferência de contas a pagar": [
                "A01: Diariamente",
                "A02: Lançar boletos e notas",
                "A03: Conferir e-mails com boletos",
                "A04: Imprimir boletos",
                "A05: Colocar na pasta junto aos boletos físicos",
                "A06: Lançar no sistema",
                "A07: Processo finalizado"
            ],
            "Solicitação de extratos bancários": [
                "A01: Diariamente",
                "A02: Solicitar para o analista financeiro e o gestor financeiro os extratos",
                "A03: Aguardar envio dos extratos",
                "A04: Abrir sistema Moneta Web",
                "A05: Fazer conciliação bancária",
                "A06: Processo finalizado"
            ],
            "Conciliação bancária": [
                "A01: Diariamente",
                "A02: Coletar extratos",
                "A03: Conferir com o sistema",
                "A04: O saldo está igual?",
                "A05: Caso SIM: Processo finalizado",
                "A06: Caso NÃO: Lançar os extratos faltantes no sistema",
                "A07: Processo finalizado"
            ],
            "Organização dos documentos": [
                "A01: Eventualmente",
                "A02: Abrir Drive",
                "A03: Analisar documentos baixados",
                "A04: Escanear documentos faltantes",
                "A05: Inserir no Drive",
                "A06: Processo finalizado"
            ],
            "Conferência dos documentos": [
                "A01: Mensalmente",
                "A02: Organizar documentação",
                "A03: Enviar para a contabilidade",
                "A04: Aguardar retorno da documentação",
                "A05: Arquivar documentos",
                "A06: Processo finalizado"
            ],
            "Validação das notas assinadas (fechamento de caixa)": [
                "A01: Ao final do mês",
                "A02: Receber notas assinadas do mês",
                "A03: Escanear por pessoa",
                "A04: Enviar para validação dos gestores",
                "A05: Arquivar notas",
                "A06: Processo finalizado"
            ],
            "Análise e lançamento de despesas do cartão de crédito": [
                "A01: Mensalmente",
                "A02: Coletar notas/cupom fiscais",
                "A03: Tirar cópia dos cupons",
                "A04: Arquivar até o vencimento",
                "A05: Quando for lançado o débito, lançar cada despesa até totalizar o valor debitado",
                "A06: Detalhar cada despesa",
                "A07: Processo finalizado"
            ],
            "Controle de recebimento dos eventos": [
                "A01: Eventualmente",
                "A02: Receber dados do evento",
                "A03: Aguardar data de pagamento das parcelas",
                "A04: O cliente pagou?",
                "A05: Caso SIM: Comunicar no grupo do financeiro",
                "A06: Caso NÃO: Comunicar para a cobrança",
                "A07: Aguardar pagamento",
                "A08: Processo finalizado"
            ]
        }
    },
    "Cozinha": {
        "Líder da Cozinha": {
            "Almoço do Funcionário": [
                "A01: Diariamente",
                "A02: Preparar 'cardápio do dia' conforme a produção/disponibilidade",
                "A03: Preparar mesa do self-service",
                "A04: Colocar comida dos funcionários no prato conforme porções pré-estabelecidas",
                "A05: Processo finalizado"
            ],
            "Montagem da Praça": [
                "A01: Colocar as panelas no fogo",
                "A02: Aguardar o preparo dos alimentos",
                "A03: Utilizar o arroz branco para elaborar outros tipos de arroz",
                "A04: Preparar o caldinho de feijão passando o feijão-preto no liquidificador",
                "A05: Grelhar as proteínas (tilápia, salmão, picanha suína, filé mignon, etc.)",
                "A06: Preparar a base das moquecas",
                "A07: Higienizar legumes e verduras",
                "A08: Preparar molho de tomate",
                "A09: Deixar o linguine al dente",
                "A10: Esquentar os caldinhos e preparar pirão",
                "A11: Processo finalizado"
            ],
            "Finalização de Pratos": [
                "A01: Pegar pratos",
                "A02: Acrescentar proteínas e guarnições",
                "A03: Deixar na boqueta",
                "A04: Processo finalizado"
            ],
            "Armazenamento": [
                "A01: Porcionar os alimentos",
                "A02: Etiquetar",
                "A03: Colocar no congelador",
                "A04: Processo finalizado"
            ],
            "Higienização da Cozinha ao Fim do Expediente": [
                "A01: Limpar chão",
                "A02: Limpar paredes e fogão",
                "A03: Limpar a coifa (quinzenalmente)",
                "A04: Limpar fritadeiras (terças ou quartas, conforme o fluxo)",
                "A05: Processo finalizado"
            ],
            "Preparação dos Petiscos (Happy Hour)": [
                "A01: Toda quinta-feira",
                "A02: Preparar praça para o happy hour",
                "A03: Esquentar caldinhos e preparar fundata de queijo",
                "A04: Preparar proteínas (carne de sol, filé, peixe, camarão, etc.)",
                "A05: Preparar dadinho de tapioca e pastéis",
                "A06: Preparar bolinho de feijoada e outros petiscos",
                "A07: Processo finalizado"
            ]
        },
        "Cozinheira": {
            "Montagem de Preparação de Pratos": [
                "A01: Diariamente",
                "A02: Verificar a quantidade de arroz já preparado",
                "A03: Verificar a quantidade de feijão preparado para clientes e funcionários",
                "A04: Esquentar o que já está preparado (caldinho, muqueca, arroz, feijão)",
                "A05: Cortar verduras e legumes",
                "A06: Verificar a montagem das saladas",
                "A07: Lavar e porcionar itens da hortifruti",
                "A08: Guardar os itens da hortifruti",
                "A09: Verificar proteínas prontas (filé, peixe, camarão, carne suína, frango)",
                "A10: Preparar proteína para o almoço dos funcionários",
                "A11: Organizar o almoço dos funcionários",
                "A12: Realizar troca de equipe (quinta, sexta e sábado)",
                "A13: Processo finalizado"
            ],
            "Contagem de Estoque": [
                "A01: Semanalmente",
                "A02: Selecionar duas pessoas da equipe",
                "A03: Fazer contagem de estoque seco (arroz, feijão, alimentos não perecíveis)",
                "A04: Fazer contagem de insumos congelados (peixe, carne, frango, camarão, batata frita)",
                "A05: Retirar todos os itens do freezer",
                "A06: Pesar os alimentos",
                "A07: Anotar o peso e entregar à líder de cozinha",
                "A08: Higienizar o freezer",
                "A09: Guardar os itens novamente",
                "A10: Processo finalizado"
            ],
            "Montagem dos Pratos": [
                "A01: Diariamente",
                "A02: Verificar os pedidos do almoço ou petiscos",
                "A03: Dividir a equipe por guarnição (lavar pratos, fogão, fritadeira, etc.)",
                "A04: Terminar o almoço",
                "A05: Etiquetar e guardar as sobras",
                "A06: Processo finalizado"
            ],
            "Pré-organização do Turno da Noite": [
                "A01: Três vezes por semana",
                "A02: Organizar alimentos (empanar, porcionar batatas fritas, cortar carnes)",
                "A03: Preparar caldinhos, ovo de codorna, limão, ceviche, vinagrete de polvo",
                "A04: Higienizar a cozinha (varrer, lavar, enxaguar e secar)",
                "A05: Trocar equipe",
                "A06: Verificar cardápio",
                "A07: Repassar itens disponíveis para garçons",
                "A08: Processo finalizado"
            ],
            "Guardar Novas Mercadorias": [
                "A01: Em dias alternados",
                "A02: Selecionar um colaborador",
                "A03: Receber pedidos",
                "A04: Verificar itens recebidos",
                "A05: Porcionar e guardar itens",
                "A06: Repassar nota fiscal para a líder de cozinha",
                "A07: Processo finalizado"
            ],
            "Faxina da Cozinha": [
                "A01: Semanalmente",
                "A02: Verificar o lixeiro e lavar",
                "A03: Desmontar e limpar forno, fogão, coifa e fritadeira",
                "A04: Retirar e lavar os itens da geladeira e prateleiras",
                "A05: Lavar as paredes e bancadas",
                "A06: Higienizar o chão e o ralo com água quente",
                "A07: Higienizar a pia",
                "A08: Processo finalizado"
            ],
        }
    }
};

// Funções para carregar as áreas, cargos, processos e detalhes
function loadAreas() {
    const areaSelect = document.getElementById('areas');
    areaSelect.innerHTML = '<option value="">Selecione uma área:</option>';
    const areas = Object.keys(data);
    areas.forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.text = area.charAt(0).toUpperCase() + area.slice(1);
        areaSelect.appendChild(option);
    });
}

function loadCargos() {
    const area = document.getElementById('areas').value;
    const cargoSelect = document.getElementById('cargos');
    cargoSelect.innerHTML = '<option value="">Selecione um cargo:</option>';
    document.getElementById('processos').innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';

    if (area) {
        const cargos = Object.keys(data[area]);
        cargos.forEach(cargo => {
            const option = document.createElement('option');
            option.value = cargo;
            option.text = cargo;
            cargoSelect.appendChild(option);
        });
        cargoSelect.disabled = false;
    } else {
        cargoSelect.disabled = true;
        document.getElementById('processos').disabled = true;
    }
}

function loadProcessos() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processoSelect = document.getElementById('processos');
    processoSelect.innerHTML = '<option value="">Selecione um processo:</option>';
    document.getElementById('detalhes-list').innerHTML = '';
    document.getElementById('fluxograma').style.display = 'none';

    if (cargo) {
        const processos = Object.keys(data[area][cargo]);
        processos.forEach(processo => {
            const option = document.createElement('option');
            option.value = processo;
            option.text = processo;
            processoSelect.appendChild(option);
        });
        processoSelect.disabled = false;
    } else {
        processoSelect.disabled = true;
    }
}

function loadDetalhes() {
    const area = document.getElementById('areas').value;
    const cargo = document.getElementById('cargos').value;
    const processo = document.getElementById('processos').value;
    const detalhesList = document.getElementById('detalhes-list');

    if (processo) {
        const etapas = data[area][cargo][processo];
        detalhesList.innerHTML = '';
        etapas.forEach(etapa => {
            const li = document.createElement('li');
            li.textContent = etapa;
            detalhesList.appendChild(li);
        });

        const fluxogramaUrl = `img/fluxogramas/${area}/${cargo}/${processo}.png`;
        document.getElementById('fluxograma-imagem').src = fluxogramaUrl;
        document.getElementById('fluxograma').style.display = 'block';
    }
}

// Função para carregar as áreas ao carregar a página
document.addEventListener('DOMContentLoaded', loadAreas);