# `dataGitlabInstanceDeployKeys` Submodule <a name="`dataGitlabInstanceDeployKeys` Submodule" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabInstanceDeployKeys <a name="DataGitlabInstanceDeployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.0/docs/data-sources/instance_deploy_keys gitlab_instance_deploy_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

datagitlabinstancedeploykeys.NewDataGitlabInstanceDeployKeys(scope Construct, id *string, config DataGitlabInstanceDeployKeysConfig) DataGitlabInstanceDeployKeys
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig">DataGitlabInstanceDeployKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig">DataGitlabInstanceDeployKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetPublic">ResetPublic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetId"></a>

```go
func ResetId()
```

##### `ResetPublic` <a name="ResetPublic" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.resetPublic"></a>

```go
func ResetPublic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabInstanceDeployKeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

datagitlabinstancedeploykeys.DataGitlabInstanceDeployKeys_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

datagitlabinstancedeploykeys.DataGitlabInstanceDeployKeys_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

datagitlabinstancedeploykeys.DataGitlabInstanceDeployKeys_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

datagitlabinstancedeploykeys.DataGitlabInstanceDeployKeys_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGitlabInstanceDeployKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGitlabInstanceDeployKeys to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGitlabInstanceDeployKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.0/docs/data-sources/instance_deploy_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabInstanceDeployKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.deployKeys">DeployKeys</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList">DataGitlabInstanceDeployKeysDeployKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.publicInput">PublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.public">Public</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DeployKeys`<sup>Required</sup> <a name="DeployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.deployKeys"></a>

```go
func DeployKeys() DataGitlabInstanceDeployKeysDeployKeysList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList">DataGitlabInstanceDeployKeysDeployKeysList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PublicInput`<sup>Optional</sup> <a name="PublicInput" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.publicInput"></a>

```go
func PublicInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.public"></a>

```go
func Public() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeys.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabInstanceDeployKeysConfig <a name="DataGitlabInstanceDeployKeysConfig" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

&datagitlabinstancedeploykeys.DataGitlabInstanceDeployKeysConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Public: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.0/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.public">Public</a></code> | <code>interface{}</code> | Only return deploy keys that are public. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.0/docs/data-sources/instance_deploy_keys#id DataGitlabInstanceDeployKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Public`<sup>Optional</sup> <a name="Public" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysConfig.property.public"></a>

```go
Public interface{}
```

- *Type:* interface{}

Only return deploy keys that are public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.0.0/docs/data-sources/instance_deploy_keys#public DataGitlabInstanceDeployKeys#public}

---

### DataGitlabInstanceDeployKeysDeployKeys <a name="DataGitlabInstanceDeployKeysDeployKeys" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

&datagitlabinstancedeploykeys.DataGitlabInstanceDeployKeysDeployKeys {

}
```


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

&datagitlabinstancedeploykeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabInstanceDeployKeysDeployKeysList <a name="DataGitlabInstanceDeployKeysDeployKeysList" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

datagitlabinstancedeploykeys.NewDataGitlabInstanceDeployKeysDeployKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabInstanceDeployKeysDeployKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get"></a>

```go
func Get(index *f64) DataGitlabInstanceDeployKeysDeployKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabInstanceDeployKeysDeployKeysOutputReference <a name="DataGitlabInstanceDeployKeysDeployKeysOutputReference" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

datagitlabinstancedeploykeys.NewDataGitlabInstanceDeployKeysDeployKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabInstanceDeployKeysDeployKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.projectsWithWriteAccess">ProjectsWithWriteAccess</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys">DataGitlabInstanceDeployKeysDeployKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ProjectsWithWriteAccess`<sup>Required</sup> <a name="ProjectsWithWriteAccess" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.projectsWithWriteAccess"></a>

```go
func ProjectsWithWriteAccess() DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList</a>

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabInstanceDeployKeysDeployKeys
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeys">DataGitlabInstanceDeployKeysDeployKeys</a>

---


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

datagitlabinstancedeploykeys.NewDataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get"></a>

```go
func Get(index *f64) DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference <a name="DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabinstancedeploykeys"

datagitlabinstancedeploykeys.NewDataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.nameWithNamespace">NameWithNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.pathWithNamespace">PathWithNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameWithNamespace`<sup>Required</sup> <a name="NameWithNamespace" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.nameWithNamespace"></a>

```go
func NameWithNamespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PathWithNamespace`<sup>Required</sup> <a name="PathWithNamespace" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.pathWithNamespace"></a>

```go
func PathWithNamespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabInstanceDeployKeys.DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess">DataGitlabInstanceDeployKeysDeployKeysProjectsWithWriteAccess</a>

---



