# `projectLevelNotifications` Submodule <a name="`projectLevelNotifications` Submodule" id="@cdktf/provider-gitlab.projectLevelNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectLevelNotifications <a name="ProjectLevelNotifications" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications gitlab_project_level_notifications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectlevelnotifications"

projectlevelnotifications.NewProjectLevelNotifications(scope Construct, id *string, config ProjectLevelNotificationsConfig) ProjectLevelNotifications
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig">ProjectLevelNotificationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig">ProjectLevelNotificationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseIssue">ResetCloseIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseMergeRequest">ResetCloseMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFailedPipeline">ResetFailedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFixedPipeline">ResetFixedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetIssueDue">ResetIssueDue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeMergeRequest">ResetMergeMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeWhenPipelineSucceeds">ResetMergeWhenPipelineSucceeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMovedProject">ResetMovedProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewIssue">ResetNewIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewMergeRequest">ResetNewMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewNote">ResetNewNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetPushToMergeRequest">ResetPushToMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignIssue">ResetReassignIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignMergeRequest">ResetReassignMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenIssue">ResetReopenIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenMergeRequest">ResetReopenMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetSuccessPipeline">ResetSuccessPipeline</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCloseIssue` <a name="ResetCloseIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseIssue"></a>

```go
func ResetCloseIssue()
```

##### `ResetCloseMergeRequest` <a name="ResetCloseMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseMergeRequest"></a>

```go
func ResetCloseMergeRequest()
```

##### `ResetFailedPipeline` <a name="ResetFailedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFailedPipeline"></a>

```go
func ResetFailedPipeline()
```

##### `ResetFixedPipeline` <a name="ResetFixedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFixedPipeline"></a>

```go
func ResetFixedPipeline()
```

##### `ResetIssueDue` <a name="ResetIssueDue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetIssueDue"></a>

```go
func ResetIssueDue()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetLevel"></a>

```go
func ResetLevel()
```

##### `ResetMergeMergeRequest` <a name="ResetMergeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeMergeRequest"></a>

```go
func ResetMergeMergeRequest()
```

##### `ResetMergeWhenPipelineSucceeds` <a name="ResetMergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeWhenPipelineSucceeds"></a>

```go
func ResetMergeWhenPipelineSucceeds()
```

##### `ResetMovedProject` <a name="ResetMovedProject" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMovedProject"></a>

```go
func ResetMovedProject()
```

##### `ResetNewIssue` <a name="ResetNewIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewIssue"></a>

```go
func ResetNewIssue()
```

##### `ResetNewMergeRequest` <a name="ResetNewMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewMergeRequest"></a>

```go
func ResetNewMergeRequest()
```

##### `ResetNewNote` <a name="ResetNewNote" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewNote"></a>

```go
func ResetNewNote()
```

##### `ResetPushToMergeRequest` <a name="ResetPushToMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetPushToMergeRequest"></a>

```go
func ResetPushToMergeRequest()
```

##### `ResetReassignIssue` <a name="ResetReassignIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignIssue"></a>

```go
func ResetReassignIssue()
```

##### `ResetReassignMergeRequest` <a name="ResetReassignMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignMergeRequest"></a>

```go
func ResetReassignMergeRequest()
```

##### `ResetReopenIssue` <a name="ResetReopenIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenIssue"></a>

```go
func ResetReopenIssue()
```

##### `ResetReopenMergeRequest` <a name="ResetReopenMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenMergeRequest"></a>

```go
func ResetReopenMergeRequest()
```

##### `ResetSuccessPipeline` <a name="ResetSuccessPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetSuccessPipeline"></a>

```go
func ResetSuccessPipeline()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectLevelNotifications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectlevelnotifications"

projectlevelnotifications.ProjectLevelNotifications_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectlevelnotifications"

projectlevelnotifications.ProjectLevelNotifications_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectlevelnotifications"

projectlevelnotifications.ProjectLevelNotifications_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectlevelnotifications"

projectlevelnotifications.ProjectLevelNotifications_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ProjectLevelNotifications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ProjectLevelNotifications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ProjectLevelNotifications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ProjectLevelNotifications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssueInput">CloseIssueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequestInput">CloseMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipelineInput">FailedPipelineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipelineInput">FixedPipelineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDueInput">IssueDueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.levelInput">LevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequestInput">MergeMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceedsInput">MergeWhenPipelineSucceedsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProjectInput">MovedProjectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssueInput">NewIssueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequestInput">NewMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNoteInput">NewNoteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequestInput">PushToMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssueInput">ReassignIssueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequestInput">ReassignMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssueInput">ReopenIssueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequestInput">ReopenMergeRequestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipelineInput">SuccessPipelineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssue">CloseIssue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequest">CloseMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipeline">FailedPipeline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipeline">FixedPipeline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDue">IssueDue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequest">MergeMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceeds">MergeWhenPipelineSucceeds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProject">MovedProject</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssue">NewIssue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequest">NewMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNote">NewNote</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequest">PushToMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssue">ReassignIssue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequest">ReassignMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssue">ReopenIssue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequest">ReopenMergeRequest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipeline">SuccessPipeline</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CloseIssueInput`<sup>Optional</sup> <a name="CloseIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssueInput"></a>

```go
func CloseIssueInput() interface{}
```

- *Type:* interface{}

---

##### `CloseMergeRequestInput`<sup>Optional</sup> <a name="CloseMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequestInput"></a>

```go
func CloseMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `FailedPipelineInput`<sup>Optional</sup> <a name="FailedPipelineInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipelineInput"></a>

```go
func FailedPipelineInput() interface{}
```

- *Type:* interface{}

---

##### `FixedPipelineInput`<sup>Optional</sup> <a name="FixedPipelineInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipelineInput"></a>

```go
func FixedPipelineInput() interface{}
```

- *Type:* interface{}

---

##### `IssueDueInput`<sup>Optional</sup> <a name="IssueDueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDueInput"></a>

```go
func IssueDueInput() interface{}
```

- *Type:* interface{}

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.levelInput"></a>

```go
func LevelInput() *string
```

- *Type:* *string

---

##### `MergeMergeRequestInput`<sup>Optional</sup> <a name="MergeMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequestInput"></a>

```go
func MergeMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `MergeWhenPipelineSucceedsInput`<sup>Optional</sup> <a name="MergeWhenPipelineSucceedsInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceedsInput"></a>

```go
func MergeWhenPipelineSucceedsInput() interface{}
```

- *Type:* interface{}

---

##### `MovedProjectInput`<sup>Optional</sup> <a name="MovedProjectInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProjectInput"></a>

```go
func MovedProjectInput() interface{}
```

- *Type:* interface{}

---

##### `NewIssueInput`<sup>Optional</sup> <a name="NewIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssueInput"></a>

```go
func NewIssueInput() interface{}
```

- *Type:* interface{}

---

##### `NewMergeRequestInput`<sup>Optional</sup> <a name="NewMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequestInput"></a>

```go
func NewMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `NewNoteInput`<sup>Optional</sup> <a name="NewNoteInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNoteInput"></a>

```go
func NewNoteInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PushToMergeRequestInput`<sup>Optional</sup> <a name="PushToMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequestInput"></a>

```go
func PushToMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `ReassignIssueInput`<sup>Optional</sup> <a name="ReassignIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssueInput"></a>

```go
func ReassignIssueInput() interface{}
```

- *Type:* interface{}

---

##### `ReassignMergeRequestInput`<sup>Optional</sup> <a name="ReassignMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequestInput"></a>

```go
func ReassignMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `ReopenIssueInput`<sup>Optional</sup> <a name="ReopenIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssueInput"></a>

```go
func ReopenIssueInput() interface{}
```

- *Type:* interface{}

---

##### `ReopenMergeRequestInput`<sup>Optional</sup> <a name="ReopenMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequestInput"></a>

```go
func ReopenMergeRequestInput() interface{}
```

- *Type:* interface{}

---

##### `SuccessPipelineInput`<sup>Optional</sup> <a name="SuccessPipelineInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipelineInput"></a>

```go
func SuccessPipelineInput() interface{}
```

- *Type:* interface{}

---

##### `CloseIssue`<sup>Required</sup> <a name="CloseIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssue"></a>

```go
func CloseIssue() interface{}
```

- *Type:* interface{}

---

##### `CloseMergeRequest`<sup>Required</sup> <a name="CloseMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequest"></a>

```go
func CloseMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `FailedPipeline`<sup>Required</sup> <a name="FailedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipeline"></a>

```go
func FailedPipeline() interface{}
```

- *Type:* interface{}

---

##### `FixedPipeline`<sup>Required</sup> <a name="FixedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipeline"></a>

```go
func FixedPipeline() interface{}
```

- *Type:* interface{}

---

##### `IssueDue`<sup>Required</sup> <a name="IssueDue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDue"></a>

```go
func IssueDue() interface{}
```

- *Type:* interface{}

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `MergeMergeRequest`<sup>Required</sup> <a name="MergeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequest"></a>

```go
func MergeMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `MergeWhenPipelineSucceeds`<sup>Required</sup> <a name="MergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceeds"></a>

```go
func MergeWhenPipelineSucceeds() interface{}
```

- *Type:* interface{}

---

##### `MovedProject`<sup>Required</sup> <a name="MovedProject" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProject"></a>

```go
func MovedProject() interface{}
```

- *Type:* interface{}

---

##### `NewIssue`<sup>Required</sup> <a name="NewIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssue"></a>

```go
func NewIssue() interface{}
```

- *Type:* interface{}

---

##### `NewMergeRequest`<sup>Required</sup> <a name="NewMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequest"></a>

```go
func NewMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `NewNote`<sup>Required</sup> <a name="NewNote" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNote"></a>

```go
func NewNote() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PushToMergeRequest`<sup>Required</sup> <a name="PushToMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequest"></a>

```go
func PushToMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `ReassignIssue`<sup>Required</sup> <a name="ReassignIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssue"></a>

```go
func ReassignIssue() interface{}
```

- *Type:* interface{}

---

##### `ReassignMergeRequest`<sup>Required</sup> <a name="ReassignMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequest"></a>

```go
func ReassignMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `ReopenIssue`<sup>Required</sup> <a name="ReopenIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssue"></a>

```go
func ReopenIssue() interface{}
```

- *Type:* interface{}

---

##### `ReopenMergeRequest`<sup>Required</sup> <a name="ReopenMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequest"></a>

```go
func ReopenMergeRequest() interface{}
```

- *Type:* interface{}

---

##### `SuccessPipeline`<sup>Required</sup> <a name="SuccessPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipeline"></a>

```go
func SuccessPipeline() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectLevelNotificationsConfig <a name="ProjectLevelNotificationsConfig" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/projectlevelnotifications"

&projectlevelnotifications.ProjectLevelNotificationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	CloseIssue: interface{},
	CloseMergeRequest: interface{},
	FailedPipeline: interface{},
	FixedPipeline: interface{},
	IssueDue: interface{},
	Level: *string,
	MergeMergeRequest: interface{},
	MergeWhenPipelineSucceeds: interface{},
	MovedProject: interface{},
	NewIssue: interface{},
	NewMergeRequest: interface{},
	NewNote: interface{},
	PushToMergeRequest: interface{},
	ReassignIssue: interface{},
	ReassignMergeRequest: interface{},
	ReopenIssue: interface{},
	ReopenMergeRequest: interface{},
	SuccessPipeline: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.project">Project</a></code> | <code>*string</code> | The ID or URL-encoded path of a project where notifications will be configured. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeIssue">CloseIssue</a></code> | <code>interface{}</code> | Enable notifications for closed issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeMergeRequest">CloseMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for closed merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.failedPipeline">FailedPipeline</a></code> | <code>interface{}</code> | Enable notifications for failed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.fixedPipeline">FixedPipeline</a></code> | <code>interface{}</code> | Enable notifications for fixed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.issueDue">IssueDue</a></code> | <code>interface{}</code> | Enable notifications for due issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.level">Level</a></code> | <code>*string</code> | The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeMergeRequest">MergeMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for merged merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeWhenPipelineSucceeds">MergeWhenPipelineSucceeds</a></code> | <code>interface{}</code> | Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.movedProject">MovedProject</a></code> | <code>interface{}</code> | Enable notifications for moved projects. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newIssue">NewIssue</a></code> | <code>interface{}</code> | Enable notifications for new issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newMergeRequest">NewMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for new merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newNote">NewNote</a></code> | <code>interface{}</code> | Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.pushToMergeRequest">PushToMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for push to merge request branches. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignIssue">ReassignIssue</a></code> | <code>interface{}</code> | Enable notifications for issue reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignMergeRequest">ReassignMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for merge request reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenIssue">ReopenIssue</a></code> | <code>interface{}</code> | Enable notifications for reopened issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenMergeRequest">ReopenMergeRequest</a></code> | <code>interface{}</code> | Enable notifications for reopened merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.successPipeline">SuccessPipeline</a></code> | <code>interface{}</code> | Enable notifications for successful pipelines. Can only be used when `level` is `custom`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID or URL-encoded path of a project where notifications will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#project ProjectLevelNotifications#project}

---

##### `CloseIssue`<sup>Optional</sup> <a name="CloseIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeIssue"></a>

```go
CloseIssue interface{}
```

- *Type:* interface{}

Enable notifications for closed issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#close_issue ProjectLevelNotifications#close_issue}

---

##### `CloseMergeRequest`<sup>Optional</sup> <a name="CloseMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeMergeRequest"></a>

```go
CloseMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for closed merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#close_merge_request ProjectLevelNotifications#close_merge_request}

---

##### `FailedPipeline`<sup>Optional</sup> <a name="FailedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.failedPipeline"></a>

```go
FailedPipeline interface{}
```

- *Type:* interface{}

Enable notifications for failed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#failed_pipeline ProjectLevelNotifications#failed_pipeline}

---

##### `FixedPipeline`<sup>Optional</sup> <a name="FixedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.fixedPipeline"></a>

```go
FixedPipeline interface{}
```

- *Type:* interface{}

Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#fixed_pipeline ProjectLevelNotifications#fixed_pipeline}

---

##### `IssueDue`<sup>Optional</sup> <a name="IssueDue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.issueDue"></a>

```go
IssueDue interface{}
```

- *Type:* interface{}

Enable notifications for due issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#issue_due ProjectLevelNotifications#issue_due}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.level"></a>

```go
Level *string
```

- *Type:* *string

The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#level ProjectLevelNotifications#level}

---

##### `MergeMergeRequest`<sup>Optional</sup> <a name="MergeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeMergeRequest"></a>

```go
MergeMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for merged merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#merge_merge_request ProjectLevelNotifications#merge_merge_request}

---

##### `MergeWhenPipelineSucceeds`<sup>Optional</sup> <a name="MergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeWhenPipelineSucceeds"></a>

```go
MergeWhenPipelineSucceeds interface{}
```

- *Type:* interface{}

Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#merge_when_pipeline_succeeds ProjectLevelNotifications#merge_when_pipeline_succeeds}

---

##### `MovedProject`<sup>Optional</sup> <a name="MovedProject" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.movedProject"></a>

```go
MovedProject interface{}
```

- *Type:* interface{}

Enable notifications for moved projects. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#moved_project ProjectLevelNotifications#moved_project}

---

##### `NewIssue`<sup>Optional</sup> <a name="NewIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newIssue"></a>

```go
NewIssue interface{}
```

- *Type:* interface{}

Enable notifications for new issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#new_issue ProjectLevelNotifications#new_issue}

---

##### `NewMergeRequest`<sup>Optional</sup> <a name="NewMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newMergeRequest"></a>

```go
NewMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for new merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#new_merge_request ProjectLevelNotifications#new_merge_request}

---

##### `NewNote`<sup>Optional</sup> <a name="NewNote" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newNote"></a>

```go
NewNote interface{}
```

- *Type:* interface{}

Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#new_note ProjectLevelNotifications#new_note}

---

##### `PushToMergeRequest`<sup>Optional</sup> <a name="PushToMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.pushToMergeRequest"></a>

```go
PushToMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#push_to_merge_request ProjectLevelNotifications#push_to_merge_request}

---

##### `ReassignIssue`<sup>Optional</sup> <a name="ReassignIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignIssue"></a>

```go
ReassignIssue interface{}
```

- *Type:* interface{}

Enable notifications for issue reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#reassign_issue ProjectLevelNotifications#reassign_issue}

---

##### `ReassignMergeRequest`<sup>Optional</sup> <a name="ReassignMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignMergeRequest"></a>

```go
ReassignMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#reassign_merge_request ProjectLevelNotifications#reassign_merge_request}

---

##### `ReopenIssue`<sup>Optional</sup> <a name="ReopenIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenIssue"></a>

```go
ReopenIssue interface{}
```

- *Type:* interface{}

Enable notifications for reopened issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#reopen_issue ProjectLevelNotifications#reopen_issue}

---

##### `ReopenMergeRequest`<sup>Optional</sup> <a name="ReopenMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenMergeRequest"></a>

```go
ReopenMergeRequest interface{}
```

- *Type:* interface{}

Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#reopen_merge_request ProjectLevelNotifications#reopen_merge_request}

---

##### `SuccessPipeline`<sup>Optional</sup> <a name="SuccessPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.successPipeline"></a>

```go
SuccessPipeline interface{}
```

- *Type:* interface{}

Enable notifications for successful pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/project_level_notifications#success_pipeline ProjectLevelNotifications#success_pipeline}

---



