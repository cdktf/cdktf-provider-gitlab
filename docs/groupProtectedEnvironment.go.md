# `groupProtectedEnvironment` Submodule <a name="`groupProtectedEnvironment` Submodule" id="@cdktf/provider-gitlab.groupProtectedEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupProtectedEnvironment <a name="GroupProtectedEnvironment" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment gitlab_group_protected_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

groupprotectedenvironment.NewGroupProtectedEnvironment(scope Construct, id *string, config GroupProtectedEnvironmentConfig) GroupProtectedEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig">GroupProtectedEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig">GroupProtectedEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putApprovalRules">PutApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putDeployAccessLevels">PutDeployAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetApprovalRules">ResetApprovalRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalRules` <a name="PutApprovalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putApprovalRules"></a>

```go
func PutApprovalRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putApprovalRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeployAccessLevels` <a name="PutDeployAccessLevels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putDeployAccessLevels"></a>

```go
func PutDeployAccessLevels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.putDeployAccessLevels.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApprovalRules` <a name="ResetApprovalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.resetApprovalRules"></a>

```go
func ResetApprovalRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupProtectedEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

groupprotectedenvironment.GroupProtectedEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

groupprotectedenvironment.GroupProtectedEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

groupprotectedenvironment.GroupProtectedEnvironment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

groupprotectedenvironment.GroupProtectedEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GroupProtectedEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GroupProtectedEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GroupProtectedEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GroupProtectedEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRules">ApprovalRules</a></code> | <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList">GroupProtectedEnvironmentApprovalRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevels">DeployAccessLevels</a></code> | <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList">GroupProtectedEnvironmentDeployAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRulesInput">ApprovalRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevelsInput">DeployAccessLevelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.group">Group</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApprovalRules`<sup>Required</sup> <a name="ApprovalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRules"></a>

```go
func ApprovalRules() GroupProtectedEnvironmentApprovalRulesList
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList">GroupProtectedEnvironmentApprovalRulesList</a>

---

##### `DeployAccessLevels`<sup>Required</sup> <a name="DeployAccessLevels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevels"></a>

```go
func DeployAccessLevels() GroupProtectedEnvironmentDeployAccessLevelsList
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList">GroupProtectedEnvironmentDeployAccessLevelsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ApprovalRulesInput`<sup>Optional</sup> <a name="ApprovalRulesInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.approvalRulesInput"></a>

```go
func ApprovalRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DeployAccessLevelsInput`<sup>Optional</sup> <a name="DeployAccessLevelsInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.deployAccessLevelsInput"></a>

```go
func DeployAccessLevelsInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupProtectedEnvironmentApprovalRules <a name="GroupProtectedEnvironmentApprovalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

&groupprotectedenvironment.GroupProtectedEnvironmentApprovalRules {
	AccessLevel: *string,
	GroupId: *f64,
	GroupInheritanceType: *f64,
	RequiredApprovals: *f64,
	UserId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Levels of access allowed to approve a deployment to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupId">GroupId</a></code> | <code>*f64</code> | The ID of the group allowed to approve a deployment to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupInheritanceType">GroupInheritanceType</a></code> | <code>*f64</code> | Group inheritance allows access rules to take inherited group membership into account. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.requiredApprovals">RequiredApprovals</a></code> | <code>*f64</code> | The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.userId">UserId</a></code> | <code>*f64</code> | The ID of the user allowed to approve a deployment to this protected environment. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Levels of access allowed to approve a deployment to this protected environment.

Mutually exclusive with `user_id` and `group_id`. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#access_level GroupProtectedEnvironment#access_level}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

The ID of the group allowed to approve a deployment to this protected environment.

TThe group must be a sub-group under the given group. Mutually exclusive with `access_level` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#group_id GroupProtectedEnvironment#group_id}

---

##### `GroupInheritanceType`<sup>Optional</sup> <a name="GroupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.groupInheritanceType"></a>

```go
GroupInheritanceType *f64
```

- *Type:* *f64

Group inheritance allows access rules to take inherited group membership into account.

Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#group_inheritance_type GroupProtectedEnvironment#group_inheritance_type}

---

##### `RequiredApprovals`<sup>Optional</sup> <a name="RequiredApprovals" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.requiredApprovals"></a>

```go
RequiredApprovals *f64
```

- *Type:* *f64

The number of approval required to allow deployment to this protected environment. This is mutually exclusive with user_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#required_approvals GroupProtectedEnvironment#required_approvals}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRules.property.userId"></a>

```go
UserId *f64
```

- *Type:* *f64

The ID of the user allowed to approve a deployment to this protected environment.

The user must be a member of the group with Maintainer role or higher. Mutually exclusive with `access_level` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#user_id GroupProtectedEnvironment#user_id}

---

### GroupProtectedEnvironmentConfig <a name="GroupProtectedEnvironmentConfig" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

&groupprotectedenvironment.GroupProtectedEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeployAccessLevels: interface{},
	Environment: *string,
	Group: *string,
	ApprovalRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.deployAccessLevels">DeployAccessLevels</a></code> | <code>interface{}</code> | Array of access levels allowed to deploy, with each described by a hash. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.environment">Environment</a></code> | <code>*string</code> | The deployment tier of the environment.  Valid values are `production`, `staging`, `testing`, `development`, `other`. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.group">Group</a></code> | <code>*string</code> | The ID or full path of the group which the protected environment is created against. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.approvalRules">ApprovalRules</a></code> | <code>interface{}</code> | Array of approval rules to deploy, with each described by a hash. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeployAccessLevels`<sup>Required</sup> <a name="DeployAccessLevels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.deployAccessLevels"></a>

```go
DeployAccessLevels interface{}
```

- *Type:* interface{}

Array of access levels allowed to deploy, with each described by a hash.

Elements in the `deploy_access_levels` should be one of `user_id`, `group_id` or `access_level`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#deploy_access_levels GroupProtectedEnvironment#deploy_access_levels}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The deployment tier of the environment.  Valid values are `production`, `staging`, `testing`, `development`, `other`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#environment GroupProtectedEnvironment#environment}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.group"></a>

```go
Group *string
```

- *Type:* *string

The ID or full path of the group which the protected environment is created against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#group GroupProtectedEnvironment#group}

---

##### `ApprovalRules`<sup>Optional</sup> <a name="ApprovalRules" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentConfig.property.approvalRules"></a>

```go
ApprovalRules interface{}
```

- *Type:* interface{}

Array of approval rules to deploy, with each described by a hash.

Elements in the `approval_rules` should be one of `user_id`, `group_id` or `access_level`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#approval_rules GroupProtectedEnvironment#approval_rules}

---

### GroupProtectedEnvironmentDeployAccessLevels <a name="GroupProtectedEnvironmentDeployAccessLevels" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

&groupprotectedenvironment.GroupProtectedEnvironmentDeployAccessLevels {
	AccessLevel: *string,
	GroupId: *f64,
	GroupInheritanceType: *f64,
	UserId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Levels of access required to deploy to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupId">GroupId</a></code> | <code>*f64</code> | The ID of the group allowed to deploy to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupInheritanceType">GroupInheritanceType</a></code> | <code>*f64</code> | Group inheritance allows deploy access levels to take inherited group membership into account. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.userId">UserId</a></code> | <code>*f64</code> | The ID of the user allowed to deploy to this protected environment. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Levels of access required to deploy to this protected environment.

Mutually exclusive with `user_id` and `group_id`. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#access_level GroupProtectedEnvironment#access_level}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupId"></a>

```go
GroupId *f64
```

- *Type:* *f64

The ID of the group allowed to deploy to this protected environment.

The group must be a sub-group under the given group. Mutually exclusive with `access_level` and `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#group_id GroupProtectedEnvironment#group_id}

---

##### `GroupInheritanceType`<sup>Optional</sup> <a name="GroupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.groupInheritanceType"></a>

```go
GroupInheritanceType *f64
```

- *Type:* *f64

Group inheritance allows deploy access levels to take inherited group membership into account.

Valid values are `0`, `1`. `0` => Direct group membership only, `1` => All inherited groups. Default: `0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#group_inheritance_type GroupProtectedEnvironment#group_inheritance_type}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevels.property.userId"></a>

```go
UserId *f64
```

- *Type:* *f64

The ID of the user allowed to deploy to this protected environment.

The user must be a member of the group with Maintainer role or higher. Mutually exclusive with `access_level` and `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/group_protected_environment#user_id GroupProtectedEnvironment#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupProtectedEnvironmentApprovalRulesList <a name="GroupProtectedEnvironmentApprovalRulesList" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

groupprotectedenvironment.NewGroupProtectedEnvironmentApprovalRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroupProtectedEnvironmentApprovalRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.get"></a>

```go
func Get(index *f64) GroupProtectedEnvironmentApprovalRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroupProtectedEnvironmentApprovalRulesOutputReference <a name="GroupProtectedEnvironmentApprovalRulesOutputReference" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

groupprotectedenvironment.NewGroupProtectedEnvironmentApprovalRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroupProtectedEnvironmentApprovalRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupInheritanceType">ResetGroupInheritanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetRequiredApprovals">ResetRequiredApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetGroupInheritanceType` <a name="ResetGroupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetGroupInheritanceType"></a>

```go
func ResetGroupInheritanceType()
```

##### `ResetRequiredApprovals` <a name="ResetRequiredApprovals" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetRequiredApprovals"></a>

```go
func ResetRequiredApprovals()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.resetUserId"></a>

```go
func ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceTypeInput">GroupInheritanceTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovalsInput">RequiredApprovalsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceType">GroupInheritanceType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovals">RequiredApprovals</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelDescription"></a>

```go
func AccessLevelDescription() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `GroupInheritanceTypeInput`<sup>Optional</sup> <a name="GroupInheritanceTypeInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceTypeInput"></a>

```go
func GroupInheritanceTypeInput() *f64
```

- *Type:* *f64

---

##### `RequiredApprovalsInput`<sup>Optional</sup> <a name="RequiredApprovalsInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovalsInput"></a>

```go
func RequiredApprovalsInput() *f64
```

- *Type:* *f64

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *f64
```

- *Type:* *f64

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `GroupInheritanceType`<sup>Required</sup> <a name="GroupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.groupInheritanceType"></a>

```go
func GroupInheritanceType() *f64
```

- *Type:* *f64

---

##### `RequiredApprovals`<sup>Required</sup> <a name="RequiredApprovals" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.requiredApprovals"></a>

```go
func RequiredApprovals() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentApprovalRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroupProtectedEnvironmentDeployAccessLevelsList <a name="GroupProtectedEnvironmentDeployAccessLevelsList" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

groupprotectedenvironment.NewGroupProtectedEnvironmentDeployAccessLevelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroupProtectedEnvironmentDeployAccessLevelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.get"></a>

```go
func Get(index *f64) GroupProtectedEnvironmentDeployAccessLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroupProtectedEnvironmentDeployAccessLevelsOutputReference <a name="GroupProtectedEnvironmentDeployAccessLevelsOutputReference" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/groupprotectedenvironment"

groupprotectedenvironment.NewGroupProtectedEnvironmentDeployAccessLevelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroupProtectedEnvironmentDeployAccessLevelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupInheritanceType">ResetGroupInheritanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetGroupInheritanceType` <a name="ResetGroupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupInheritanceType"></a>

```go
func ResetGroupInheritanceType()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId"></a>

```go
func ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceTypeInput">GroupInheritanceTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput">UserIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId">GroupId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceType">GroupInheritanceType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription"></a>

```go
func AccessLevelDescription() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput"></a>

```go
func GroupIdInput() *f64
```

- *Type:* *f64

---

##### `GroupInheritanceTypeInput`<sup>Optional</sup> <a name="GroupInheritanceTypeInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceTypeInput"></a>

```go
func GroupInheritanceTypeInput() *f64
```

- *Type:* *f64

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput"></a>

```go
func UserIdInput() *f64
```

- *Type:* *f64

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId"></a>

```go
func GroupId() *f64
```

- *Type:* *f64

---

##### `GroupInheritanceType`<sup>Required</sup> <a name="GroupInheritanceType" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupInheritanceType"></a>

```go
func GroupInheritanceType() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.groupProtectedEnvironment.GroupProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



