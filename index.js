require('dotenv').config()
const { DefaultAzureCredential } = require('@azure/identity')
const { SecretClient } = require('@azure/keyvault-secrets')

 

async function readSecretFromKeyVault() {
  try {
    const credential = new DefaultAzureCredential()
    const client = new SecretClient(process.env.KEY_VAULT_URL, credential)
    const secret = await client.getSecret(process.env.SECRET_NAME)

    console.log(`Secret Value: ${secret.value}`)
  } catch (error) {
    console.error('Error reading secret:', error.message)
  }
}

readSecretFromKeyVault()
