# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-gitlab.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GitlabProvider <a name="GitlabProvider" id="@cdktf/provider-gitlab.provider.GitlabProvider"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs gitlab}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/provider"

provider.NewGitlabProvider(scope Construct, id *string, config GitlabProviderConfig) GitlabProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig">GitlabProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.provider.GitlabProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig">GitlabProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetCacertFile">ResetCacertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetClientCert">ResetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetEarlyAuthCheck">ResetEarlyAuthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.provider.GitlabProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.provider.GitlabProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.provider.GitlabProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.provider.GitlabProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.provider.GitlabProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetBaseUrl"></a>

```go
func ResetBaseUrl()
```

##### `ResetCacertFile` <a name="ResetCacertFile" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetCacertFile"></a>

```go
func ResetCacertFile()
```

##### `ResetClientCert` <a name="ResetClientCert" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetClientCert"></a>

```go
func ResetClientCert()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetClientKey"></a>

```go
func ResetClientKey()
```

##### `ResetEarlyAuthCheck` <a name="ResetEarlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetEarlyAuthCheck"></a>

```go
func ResetEarlyAuthCheck()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-gitlab.provider.GitlabProvider.resetToken"></a>

```go
func ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GitlabProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/provider"

provider.GitlabProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.provider.GitlabProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/provider"

provider.GitlabProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/provider"

provider.GitlabProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.provider.GitlabProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/provider"

provider.GitlabProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GitlabProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GitlabProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GitlabProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.provider.GitlabProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GitlabProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrlInput">BaseUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFileInput">CacertFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCertInput">ClientCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKeyInput">ClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheckInput">EarlyAuthCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFile">CacertFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCert">ClientCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKey">ClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheck">EarlyAuthCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrlInput"></a>

```go
func BaseUrlInput() *string
```

- *Type:* *string

---

##### `CacertFileInput`<sup>Optional</sup> <a name="CacertFileInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFileInput"></a>

```go
func CacertFileInput() *string
```

- *Type:* *string

---

##### `ClientCertInput`<sup>Optional</sup> <a name="ClientCertInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCertInput"></a>

```go
func ClientCertInput() *string
```

- *Type:* *string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKeyInput"></a>

```go
func ClientKeyInput() *string
```

- *Type:* *string

---

##### `EarlyAuthCheckInput`<sup>Optional</sup> <a name="EarlyAuthCheckInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheckInput"></a>

```go
func EarlyAuthCheckInput() interface{}
```

- *Type:* interface{}

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.baseUrl"></a>

```go
func BaseUrl() *string
```

- *Type:* *string

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.cacertFile"></a>

```go
func CacertFile() *string
```

- *Type:* *string

---

##### `ClientCert`<sup>Optional</sup> <a name="ClientCert" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientCert"></a>

```go
func ClientCert() *string
```

- *Type:* *string

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.clientKey"></a>

```go
func ClientKey() *string
```

- *Type:* *string

---

##### `EarlyAuthCheck`<sup>Optional</sup> <a name="EarlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.earlyAuthCheck"></a>

```go
func EarlyAuthCheck() interface{}
```

- *Type:* interface{}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.provider.GitlabProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GitlabProviderConfig <a name="GitlabProviderConfig" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/provider"

&provider.GitlabProviderConfig {
	Alias: *string,
	BaseUrl: *string,
	CacertFile: *string,
	ClientCert: *string,
	ClientKey: *string,
	EarlyAuthCheck: interface{},
	Insecure: interface{},
	Token: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.baseUrl">BaseUrl</a></code> | <code>*string</code> | This is the target GitLab base API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.cacertFile">CacertFile</a></code> | <code>*string</code> | This is a file containing the ca cert to verify the gitlab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientCert">ClientCert</a></code> | <code>*string</code> | File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientKey">ClientKey</a></code> | <code>*string</code> | File path to client key when GitLab instance is behind company proxy. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.earlyAuthCheck">EarlyAuthCheck</a></code> | <code>interface{}</code> | (Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.insecure">Insecure</a></code> | <code>interface{}</code> | When set to true this disables SSL verification of the connection to the GitLab instance. |
| <code><a href="#@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.token">Token</a></code> | <code>*string</code> | The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs#alias GitlabProvider#alias}

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.baseUrl"></a>

```go
BaseUrl *string
```

- *Type:* *string

This is the target GitLab base API endpoint.

Providing a value is a requirement when working with GitLab CE or GitLab Enterprise e.g. `https://my.gitlab.server/api/v4/`. It is optional to provide this value and it can also be sourced from the `GITLAB_BASE_URL` environment variable. The value must end with a slash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs#base_url GitlabProvider#base_url}

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.cacertFile"></a>

```go
CacertFile *string
```

- *Type:* *string

This is a file containing the ca cert to verify the gitlab instance.

This is available for use when working with GitLab CE or Gitlab Enterprise with a locally-issued or self-signed certificate chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs#cacert_file GitlabProvider#cacert_file}

---

##### `ClientCert`<sup>Optional</sup> <a name="ClientCert" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientCert"></a>

```go
ClientCert *string
```

- *Type:* *string

File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs#client_cert GitlabProvider#client_cert}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

File path to client key when GitLab instance is behind company proxy.

File must contain PEM encoded data. Required when `client_cert` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs#client_key GitlabProvider#client_key}

---

##### `EarlyAuthCheck`<sup>Optional</sup> <a name="EarlyAuthCheck" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.earlyAuthCheck"></a>

```go
EarlyAuthCheck interface{}
```

- *Type:* interface{}

(Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable.

Set this to `false` to skip this check. This may be useful if the GitLab instance does not yet exist and is created within the same terraform module. It may be sourced from the `GITLAB_EARLY_AUTH_CHECK`. This is an experimental feature and may change in the future. Please make sure to always keep backups of your state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs#early_auth_check GitlabProvider#early_auth_check}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

When set to true this disables SSL verification of the connection to the GitLab instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs#insecure GitlabProvider#insecure}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-gitlab.provider.GitlabProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab.

The OAuth method is used in this provider for authentication (using Bearer authorization token). See https://docs.gitlab.com/ee/api/#authentication for details. It may be sourced from the `GITLAB_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.1/docs#token GitlabProvider#token}

---



