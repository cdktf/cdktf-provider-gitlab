# `gitlab_instance_variable`

Refer to the Terraform Registory for docs: [`gitlab_instance_variable`](https://www.terraform.io/docs/providers/gitlab/r/instance_variable).

# `instanceVariable` Submodule <a name="`instanceVariable` Submodule" id="@cdktf/provider-gitlab.instanceVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InstanceVariable <a name="InstanceVariable" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/instance_variable gitlab_instance_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/instancevariable"

instancevariable.NewInstanceVariable(scope Construct, id *string, config InstanceVariableConfig) InstanceVariable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig">InstanceVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig">InstanceVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetMasked">ResetMasked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetProtected">ResetProtected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetVariableType">ResetVariableType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetId"></a>

```go
func ResetId()
```

##### `ResetMasked` <a name="ResetMasked" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetMasked"></a>

```go
func ResetMasked()
```

##### `ResetProtected` <a name="ResetProtected" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetProtected"></a>

```go
func ResetProtected()
```

##### `ResetVariableType` <a name="ResetVariableType" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.resetVariableType"></a>

```go
func ResetVariableType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/instancevariable"

instancevariable.InstanceVariable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/instancevariable"

instancevariable.InstanceVariable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/instancevariable"

instancevariable.InstanceVariable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.maskedInput">MaskedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.protectedInput">ProtectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.variableTypeInput">VariableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.masked">Masked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.protected">Protected</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.variableType">VariableType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MaskedInput`<sup>Optional</sup> <a name="MaskedInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.maskedInput"></a>

```go
func MaskedInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectedInput`<sup>Optional</sup> <a name="ProtectedInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.protectedInput"></a>

```go
func ProtectedInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `VariableTypeInput`<sup>Optional</sup> <a name="VariableTypeInput" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.variableTypeInput"></a>

```go
func VariableTypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Masked`<sup>Required</sup> <a name="Masked" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.masked"></a>

```go
func Masked() interface{}
```

- *Type:* interface{}

---

##### `Protected`<sup>Required</sup> <a name="Protected" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.protected"></a>

```go
func Protected() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.variableType"></a>

```go
func VariableType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### InstanceVariableConfig <a name="InstanceVariableConfig" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v7/instancevariable"

&instancevariable.InstanceVariableConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Key: *string,
	Value: *string,
	Id: *string,
	Masked: interface{},
	Protected: interface{},
	VariableType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.key">Key</a></code> | <code>*string</code> | The name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.value">Value</a></code> | <code>*string</code> | The value of the variable. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/instance_variable#id InstanceVariable#id}. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.masked">Masked</a></code> | <code>interface{}</code> | If set to `true`, the value of the variable will be hidden in job logs. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.protected">Protected</a></code> | <code>interface{}</code> | If set to `true`, the variable will be passed only to pipelines running on protected branches and tags. |
| <code><a href="#@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.variableType">VariableType</a></code> | <code>*string</code> | The type of a variable. Valid values are: `env_var`, `file`. Default is `env_var`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

The name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/instance_variable#key InstanceVariable#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/instance_variable#value InstanceVariable#value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/instance_variable#id InstanceVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Masked`<sup>Optional</sup> <a name="Masked" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.masked"></a>

```go
Masked interface{}
```

- *Type:* interface{}

If set to `true`, the value of the variable will be hidden in job logs.

The value must meet the [masking requirements](https://docs.gitlab.com/ee/ci/variables/#masked-variables). Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/instance_variable#masked InstanceVariable#masked}

---

##### `Protected`<sup>Optional</sup> <a name="Protected" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.protected"></a>

```go
Protected interface{}
```

- *Type:* interface{}

If set to `true`, the variable will be passed only to pipelines running on protected branches and tags.

Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/instance_variable#protected InstanceVariable#protected}

---

##### `VariableType`<sup>Optional</sup> <a name="VariableType" id="@cdktf/provider-gitlab.instanceVariable.InstanceVariableConfig.property.variableType"></a>

```go
VariableType *string
```

- *Type:* *string

The type of a variable. Valid values are: `env_var`, `file`. Default is `env_var`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/instance_variable#variable_type InstanceVariable#variable_type}

---



