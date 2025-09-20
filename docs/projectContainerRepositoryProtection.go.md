# `projectContainerRepositoryProtection` Submodule <a name="`projectContainerRepositoryProtection` Submodule" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectContainerRepositoryProtection <a name="ProjectContainerRepositoryProtection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_container_repository_protection gitlab_project_container_repository_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectcontainerrepositoryprotection"

projectcontainerrepositoryprotection.NewProjectContainerRepositoryProtection(scope Construct, id *string, config ProjectContainerRepositoryProtectionConfig) ProjectContainerRepositoryProtection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig">ProjectContainerRepositoryProtectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig">ProjectContainerRepositoryProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForDelete">ResetMinimumAccessLevelForDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForPush">ResetMinimumAccessLevelForPush</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetMinimumAccessLevelForDelete` <a name="ResetMinimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForDelete"></a>

```go
func ResetMinimumAccessLevelForDelete()
```

##### `ResetMinimumAccessLevelForPush` <a name="ResetMinimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForPush"></a>

```go
func ResetMinimumAccessLevelForPush()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectContainerRepositoryProtection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectcontainerrepositoryprotection"

projectcontainerrepositoryprotection.ProjectContainerRepositoryProtection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectcontainerrepositoryprotection"

projectcontainerrepositoryprotection.ProjectContainerRepositoryProtection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectcontainerrepositoryprotection"

projectcontainerrepositoryprotection.ProjectContainerRepositoryProtection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectcontainerrepositoryprotection"

projectcontainerrepositoryprotection.ProjectContainerRepositoryProtection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectContainerRepositoryProtection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectContainerRepositoryProtection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectContainerRepositoryProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_container_repository_protection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectContainerRepositoryProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.protectionRuleId">ProtectionRuleId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDeleteInput">MinimumAccessLevelForDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPushInput">MinimumAccessLevelForPushInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPatternInput">RepositoryPathPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDelete">MinimumAccessLevelForDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPush">MinimumAccessLevelForPush</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPattern">RepositoryPathPattern</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProtectionRuleId`<sup>Required</sup> <a name="ProtectionRuleId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.protectionRuleId"></a>

```go
func ProtectionRuleId() *f64
```

- *Type:* *f64

---

##### `MinimumAccessLevelForDeleteInput`<sup>Optional</sup> <a name="MinimumAccessLevelForDeleteInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDeleteInput"></a>

```go
func MinimumAccessLevelForDeleteInput() *string
```

- *Type:* *string

---

##### `MinimumAccessLevelForPushInput`<sup>Optional</sup> <a name="MinimumAccessLevelForPushInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPushInput"></a>

```go
func MinimumAccessLevelForPushInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RepositoryPathPatternInput`<sup>Optional</sup> <a name="RepositoryPathPatternInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPatternInput"></a>

```go
func RepositoryPathPatternInput() *string
```

- *Type:* *string

---

##### `MinimumAccessLevelForDelete`<sup>Required</sup> <a name="MinimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDelete"></a>

```go
func MinimumAccessLevelForDelete() *string
```

- *Type:* *string

---

##### `MinimumAccessLevelForPush`<sup>Required</sup> <a name="MinimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPush"></a>

```go
func MinimumAccessLevelForPush() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RepositoryPathPattern`<sup>Required</sup> <a name="RepositoryPathPattern" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPattern"></a>

```go
func RepositoryPathPattern() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectContainerRepositoryProtectionConfig <a name="ProjectContainerRepositoryProtectionConfig" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/projectcontainerrepositoryprotection"

&projectcontainerrepositoryprotection.ProjectContainerRepositoryProtectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	RepositoryPathPattern: *string,
	MinimumAccessLevelForDelete: *string,
	MinimumAccessLevelForPush: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.project">Project</a></code> | <code>*string</code> | ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.repositoryPathPattern">RepositoryPathPattern</a></code> | <code>*string</code> | Container repository path pattern protected by the protection rule. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForDelete">MinimumAccessLevelForDelete</a></code> | <code>*string</code> | Minimum GitLab access level required to delete container images in the container registry. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForPush">MinimumAccessLevelForPush</a></code> | <code>*string</code> | Minimum GitLab access level required to push container images to the container registry. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_container_repository_protection#project ProjectContainerRepositoryProtection#project}

---

##### `RepositoryPathPattern`<sup>Required</sup> <a name="RepositoryPathPattern" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.repositoryPathPattern"></a>

```go
RepositoryPathPattern *string
```

- *Type:* *string

Container repository path pattern protected by the protection rule.

Wildcard character * allowed. Repository path pattern should start with the project's full path

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_container_repository_protection#repository_path_pattern ProjectContainerRepositoryProtection#repository_path_pattern}

---

##### `MinimumAccessLevelForDelete`<sup>Optional</sup> <a name="MinimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForDelete"></a>

```go
MinimumAccessLevelForDelete *string
```

- *Type:* *string

Minimum GitLab access level required to delete container images in the container registry.

For example maintainer, owner, admin. Must be provided when `minimum_access_level_for_push` is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_container_repository_protection#minimum_access_level_for_delete ProjectContainerRepositoryProtection#minimum_access_level_for_delete}

---

##### `MinimumAccessLevelForPush`<sup>Optional</sup> <a name="MinimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForPush"></a>

```go
MinimumAccessLevelForPush *string
```

- *Type:* *string

Minimum GitLab access level required to push container images to the container registry.

For example maintainer, owner or admin. Must be provided when `minimum_access_level_for_delete` is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_container_repository_protection#minimum_access_level_for_push ProjectContainerRepositoryProtection#minimum_access_level_for_push}

---



