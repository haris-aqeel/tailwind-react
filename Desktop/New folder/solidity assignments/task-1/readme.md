Smart contract Task:

# Smart contract Task:

### Create a NFT smart contract with the following features: 
- ERC721 standard
- Study all openzeppelin ERC721 contracts and use the appropiate one to inherit.
- Three phases in sales 
- Whitelist phase: each NFT price at 0.1 eth or 100 tokens 
- Presale phase : each NFT price at 0.2 eth or 200 tokens 
- Sale phase: each NFT price at 0.25 eth or 250 tokens 
- Each phase lasts for a week long and when the new phase starts the previous one should end automatically
- Create a separate ERC20 token with 
- Name: ptoken
- Symbol: PTKN
- Total supply: 100,000
- With a mint function so anybody can mint tokens as this is a test token
- Users can buy NFT either from eth or ptokens 
- owner of the contract can only withdraw eth or ptokens in the nft contract later on
- some security considerations:
- in whitelist a user cannot buy if he has already bought nft
- no reentrancy attack especially in withdraw function
- uri of nfts can be updated only once
- proper conversion of amounts to wei as every thing on smart contract level is in wei in the case of ERC20 tokens 
