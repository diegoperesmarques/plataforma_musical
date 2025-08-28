# Título do Runbook: [Nome do Alerta ou Procedimento]

**Serviço Afetado:** [Ex: API de Autenticação, Banco de Dados Principal]
**Severidade:** [1-Crítica | 2-Alta | 3-Média | 4-Baixa]

## Gatilho

*Qual alerta, métrica ou evento dispara este runbook?*

## Passos para Diagnóstico e Resolução

1.  **Verificar Status do Serviço:**
    - `comando_para_verificar_o_servico`
    - O que procurar na saída do comando.

2.  **Analisar Logs Recentes:**
    - `comando_para_ver_logs`
    - Padrões de erro a serem procurados.

3.  **Ação de Mitigação/Correção:**
    - Descreva o passo a passo para resolver o problema (ex: reiniciar um pod, limpar um cache).

## Contatos de Escalada

- **On-call Primário:** [Nome ou Time]
- **On-call Secundário:** [Nome ou Time]
- **Canal do Slack:** [#nome-do-canal]

## Rollback (Se Aplicável)

*Como reverter a ação de correção se ela causar mais problemas?*
