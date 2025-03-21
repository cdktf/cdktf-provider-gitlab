# `projectEnvironment` Submodule <a name="`projectEnvironment` Submodule" id="@cdktf/provider-gitlab.projectEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectEnvironment <a name="ProjectEnvironment" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment gitlab_project_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectenvironment"

projectenvironment.NewProjectEnvironment(scope Construct, id *string, config ProjectEnvironmentConfig) ProjectEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig">ProjectEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig">ProjectEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetAutoStopSetting">ResetAutoStopSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetClusterAgentId">ResetClusterAgentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetExternalUrl">ResetExternalUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetFluxResourcePath">ResetFluxResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetKubernetesNamespace">ResetKubernetesNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetStopBeforeDestroy">ResetStopBeforeDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetTier">ResetTier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoStopSetting` <a name="ResetAutoStopSetting" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetAutoStopSetting"></a>

```go
func ResetAutoStopSetting()
```

##### `ResetClusterAgentId` <a name="ResetClusterAgentId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetClusterAgentId"></a>

```go
func ResetClusterAgentId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExternalUrl` <a name="ResetExternalUrl" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetExternalUrl"></a>

```go
func ResetExternalUrl()
```

##### `ResetFluxResourcePath` <a name="ResetFluxResourcePath" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetFluxResourcePath"></a>

```go
func ResetFluxResourcePath()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetId"></a>

```go
func ResetId()
```

##### `ResetKubernetesNamespace` <a name="ResetKubernetesNamespace" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetKubernetesNamespace"></a>

```go
func ResetKubernetesNamespace()
```

##### `ResetStopBeforeDestroy` <a name="ResetStopBeforeDestroy" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetStopBeforeDestroy"></a>

```go
func ResetStopBeforeDestroy()
```

##### `ResetTier` <a name="ResetTier" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.resetTier"></a>

```go
func ResetTier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectenvironment"

projectenvironment.ProjectEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectenvironment"

projectenvironment.ProjectEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectenvironment"

projectenvironment.ProjectEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectenvironment"

projectenvironment.ProjectEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopAt">AutoStopAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.slug">Slug</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopSettingInput">AutoStopSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.clusterAgentIdInput">ClusterAgentIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.externalUrlInput">ExternalUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fluxResourcePathInput">FluxResourcePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.kubernetesNamespaceInput">KubernetesNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.stopBeforeDestroyInput">StopBeforeDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopSetting">AutoStopSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.clusterAgentId">ClusterAgentId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.externalUrl">ExternalUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fluxResourcePath">FluxResourcePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.stopBeforeDestroy">StopBeforeDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoStopAt`<sup>Required</sup> <a name="AutoStopAt" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopAt"></a>

```go
func AutoStopAt() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.slug"></a>

```go
func Slug() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AutoStopSettingInput`<sup>Optional</sup> <a name="AutoStopSettingInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopSettingInput"></a>

```go
func AutoStopSettingInput() *string
```

- *Type:* *string

---

##### `ClusterAgentIdInput`<sup>Optional</sup> <a name="ClusterAgentIdInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.clusterAgentIdInput"></a>

```go
func ClusterAgentIdInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExternalUrlInput`<sup>Optional</sup> <a name="ExternalUrlInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.externalUrlInput"></a>

```go
func ExternalUrlInput() *string
```

- *Type:* *string

---

##### `FluxResourcePathInput`<sup>Optional</sup> <a name="FluxResourcePathInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fluxResourcePathInput"></a>

```go
func FluxResourcePathInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesNamespaceInput`<sup>Optional</sup> <a name="KubernetesNamespaceInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.kubernetesNamespaceInput"></a>

```go
func KubernetesNamespaceInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StopBeforeDestroyInput`<sup>Optional</sup> <a name="StopBeforeDestroyInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.stopBeforeDestroyInput"></a>

```go
func StopBeforeDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `AutoStopSetting`<sup>Required</sup> <a name="AutoStopSetting" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.autoStopSetting"></a>

```go
func AutoStopSetting() *string
```

- *Type:* *string

---

##### `ClusterAgentId`<sup>Required</sup> <a name="ClusterAgentId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.clusterAgentId"></a>

```go
func ClusterAgentId() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExternalUrl`<sup>Required</sup> <a name="ExternalUrl" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.externalUrl"></a>

```go
func ExternalUrl() *string
```

- *Type:* *string

---

##### `FluxResourcePath`<sup>Required</sup> <a name="FluxResourcePath" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.fluxResourcePath"></a>

```go
func FluxResourcePath() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.kubernetesNamespace"></a>

```go
func KubernetesNamespace() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `StopBeforeDestroy`<sup>Required</sup> <a name="StopBeforeDestroy" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.stopBeforeDestroy"></a>

```go
func StopBeforeDestroy() interface{}
```

- *Type:* interface{}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectEnvironmentConfig <a name="ProjectEnvironmentConfig" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/projectenvironment"

&projectenvironment.ProjectEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Project: *string,
	AutoStopSetting: *string,
	ClusterAgentId: *f64,
	Description: *string,
	ExternalUrl: *string,
	FluxResourcePath: *string,
	Id: *string,
	KubernetesNamespace: *string,
	StopBeforeDestroy: interface{},
	Tier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.name">Name</a></code> | <code>*string</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.project">Project</a></code> | <code>*string</code> | The ID or full path of the project to environment is created for. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.autoStopSetting">AutoStopSetting</a></code> | <code>*string</code> | The auto stop setting for the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.clusterAgentId">ClusterAgentId</a></code> | <code>*f64</code> | The cluster agent to associate with this environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.description">Description</a></code> | <code>*string</code> | The description of the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.externalUrl">ExternalUrl</a></code> | <code>*string</code> | Place to link to for this environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.fluxResourcePath">FluxResourcePath</a></code> | <code>*string</code> | The Flux resource path to associate with this environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#id ProjectEnvironment#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>*string</code> | The Kubernetes namespace to associate with this environment. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.stopBeforeDestroy">StopBeforeDestroy</a></code> | <code>interface{}</code> | Determines whether the environment is attempted to be stopped before the environment is deleted. |
| <code><a href="#@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.tier">Tier</a></code> | <code>*string</code> | The tier of the new environment. Valid values are `production`, `staging`, `testing`, `development`, `other`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#name ProjectEnvironment#name}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or full path of the project to environment is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#project ProjectEnvironment#project}

---

##### `AutoStopSetting`<sup>Optional</sup> <a name="AutoStopSetting" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.autoStopSetting"></a>

```go
AutoStopSetting *string
```

- *Type:* *string

The auto stop setting for the environment.

Allowed values are `always`, `with_action`. If this is set to `with_action` and `stop_before_destroy` is `true`, the environment will be force-stopped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#auto_stop_setting ProjectEnvironment#auto_stop_setting}

---

##### `ClusterAgentId`<sup>Optional</sup> <a name="ClusterAgentId" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.clusterAgentId"></a>

```go
ClusterAgentId *f64
```

- *Type:* *f64

The cluster agent to associate with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#cluster_agent_id ProjectEnvironment#cluster_agent_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#description ProjectEnvironment#description}

---

##### `ExternalUrl`<sup>Optional</sup> <a name="ExternalUrl" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.externalUrl"></a>

```go
ExternalUrl *string
```

- *Type:* *string

Place to link to for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#external_url ProjectEnvironment#external_url}

---

##### `FluxResourcePath`<sup>Optional</sup> <a name="FluxResourcePath" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.fluxResourcePath"></a>

```go
FluxResourcePath *string
```

- *Type:* *string

The Flux resource path to associate with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#flux_resource_path ProjectEnvironment#flux_resource_path}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#id ProjectEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubernetesNamespace`<sup>Optional</sup> <a name="KubernetesNamespace" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.kubernetesNamespace"></a>

```go
KubernetesNamespace *string
```

- *Type:* *string

The Kubernetes namespace to associate with this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#kubernetes_namespace ProjectEnvironment#kubernetes_namespace}

---

##### `StopBeforeDestroy`<sup>Optional</sup> <a name="StopBeforeDestroy" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.stopBeforeDestroy"></a>

```go
StopBeforeDestroy interface{}
```

- *Type:* interface{}

Determines whether the environment is attempted to be stopped before the environment is deleted.

If `auto_stop_setting` is set to `with_action`, this will perform a force stop.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#stop_before_destroy ProjectEnvironment#stop_before_destroy}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktf/provider-gitlab.projectEnvironment.ProjectEnvironmentConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The tier of the new environment. Valid values are `production`, `staging`, `testing`, `development`, `other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/project_environment#tier ProjectEnvironment#tier}

---



