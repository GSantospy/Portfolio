<?php
header('Content-Type: application/json');

$response = array('status' => 'error', 'message' => 'Ocorreu um erro.');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['campoNome']);
    $email = filter_var($_POST['campoEmail'], FILTER_SANITIZE_EMAIL);
    $assunto = htmlspecialchars($_POST['campoAssunto']);
    $mensagem = htmlspecialchars($_POST['campoMensagem']);

    if (!filter_var($email, FILTER_VALIDADE_EMAIL)) {
        $response['message'] = "Endereço de e-mail inválido.";
        echo json_encode($response);
        exit;
    }

    $to = "contato@exemplo.com";
    $subject = "Novo contato de $nome";
    $headers = "From: $email\r\n";
    $headers .= "Reply-to: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $emailMessage = "<html><body>";
    $emailMessage .= "<h2>Mensagem de Contato</h2>";
    $emailMessage .= "<p><strong>Nome:</strong> $nome</p>";
    $emailMessage .= "<p><strong>Email:</strong> $email</p>";
    $emailMessage .= "<p><strong>Assunto:</strong> $assunto</p>";
    $emailMessage .= "<p><strong>Mensagem:</strong><br>$mensagem</p>";
    $emailMessage .= "</body></html>";

    if (mail($to, $subject, $emailMessage, $headers)) {
        $response['status'] = 'success';
        $response['message'] = 'Sua mensagem foi enviada com sucesso!';
    } else {
        $response['message'] = 'Ocorreu um erro ao enviar a mensagem.';
    }
} else {
    echo "Método de reqísição inválido.";
}

echo json_encode($response);
?>