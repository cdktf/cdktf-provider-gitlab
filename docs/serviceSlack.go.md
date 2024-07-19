# `serviceSlack` Submodule <a name="`serviceSlack` Submodule" id="@cdktf/provider-gitlab.serviceSlack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceSlack <a name="ServiceSlack" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack gitlab_service_slack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceslack"

serviceslack.NewServiceSlack(scope Construct, id *string, config ServiceSlackConfig) ServiceSlack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig">ServiceSlackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig">ServiceSlackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialIssueChannel">ResetConfidentialIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialIssuesEvents">ResetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialNoteChannel">ResetConfidentialNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialNoteEvents">ResetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetIssueChannel">ResetIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetIssuesEvents">ResetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetMergeRequestChannel">ResetMergeRequestChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNoteChannel">ResetNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNoteEvents">ResetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNotifyOnlyBrokenPipelines">ResetNotifyOnlyBrokenPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNotifyOnlyDefaultBranch">ResetNotifyOnlyDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPipelineChannel">ResetPipelineChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPipelineEvents">ResetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPushChannel">ResetPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetTagPushChannel">ResetTagPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetWikiPageChannel">ResetWikiPageChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetWikiPageEvents">ResetWikiPageEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetBranchesToBeNotified"></a>

```go
func ResetBranchesToBeNotified()
```

##### `ResetConfidentialIssueChannel` <a name="ResetConfidentialIssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialIssueChannel"></a>

```go
func ResetConfidentialIssueChannel()
```

##### `ResetConfidentialIssuesEvents` <a name="ResetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialIssuesEvents"></a>

```go
func ResetConfidentialIssuesEvents()
```

##### `ResetConfidentialNoteChannel` <a name="ResetConfidentialNoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialNoteChannel"></a>

```go
func ResetConfidentialNoteChannel()
```

##### `ResetConfidentialNoteEvents` <a name="ResetConfidentialNoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetConfidentialNoteEvents"></a>

```go
func ResetConfidentialNoteEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetId"></a>

```go
func ResetId()
```

##### `ResetIssueChannel` <a name="ResetIssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetIssueChannel"></a>

```go
func ResetIssueChannel()
```

##### `ResetIssuesEvents` <a name="ResetIssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetIssuesEvents"></a>

```go
func ResetIssuesEvents()
```

##### `ResetMergeRequestChannel` <a name="ResetMergeRequestChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetMergeRequestChannel"></a>

```go
func ResetMergeRequestChannel()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetMergeRequestsEvents"></a>

```go
func ResetMergeRequestsEvents()
```

##### `ResetNoteChannel` <a name="ResetNoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNoteChannel"></a>

```go
func ResetNoteChannel()
```

##### `ResetNoteEvents` <a name="ResetNoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNoteEvents"></a>

```go
func ResetNoteEvents()
```

##### `ResetNotifyOnlyBrokenPipelines` <a name="ResetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNotifyOnlyBrokenPipelines"></a>

```go
func ResetNotifyOnlyBrokenPipelines()
```

##### `ResetNotifyOnlyDefaultBranch` <a name="ResetNotifyOnlyDefaultBranch" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetNotifyOnlyDefaultBranch"></a>

```go
func ResetNotifyOnlyDefaultBranch()
```

##### `ResetPipelineChannel` <a name="ResetPipelineChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPipelineChannel"></a>

```go
func ResetPipelineChannel()
```

##### `ResetPipelineEvents` <a name="ResetPipelineEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPipelineEvents"></a>

```go
func ResetPipelineEvents()
```

##### `ResetPushChannel` <a name="ResetPushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPushChannel"></a>

```go
func ResetPushChannel()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetPushEvents"></a>

```go
func ResetPushEvents()
```

##### `ResetTagPushChannel` <a name="ResetTagPushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetTagPushChannel"></a>

```go
func ResetTagPushChannel()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetTagPushEvents"></a>

```go
func ResetTagPushEvents()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetWikiPageChannel` <a name="ResetWikiPageChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetWikiPageChannel"></a>

```go
func ResetWikiPageChannel()
```

##### `ResetWikiPageEvents` <a name="ResetWikiPageEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.resetWikiPageEvents"></a>

```go
func ResetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceSlack resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceslack"

serviceslack.ServiceSlack_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceslack"

serviceslack.ServiceSlack_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceslack"

serviceslack.ServiceSlack_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceslack"

serviceslack.ServiceSlack_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServiceSlack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceSlack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceSlack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServiceSlack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.jobEvents">JobEvents</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssueChannelInput">ConfidentialIssueChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssuesEventsInput">ConfidentialIssuesEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteChannelInput">ConfidentialNoteChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteEventsInput">ConfidentialNoteEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issueChannelInput">IssueChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestChannelInput">MergeRequestChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteChannelInput">NoteChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteEventsInput">NoteEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyBrokenPipelinesInput">NotifyOnlyBrokenPipelinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyDefaultBranchInput">NotifyOnlyDefaultBranchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineChannelInput">PipelineChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushChannelInput">PushChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushEventsInput">PushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushChannelInput">TagPushChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageChannelInput">WikiPageChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageEventsInput">WikiPageEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssueChannel">ConfidentialIssueChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteChannel">ConfidentialNoteChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issueChannel">IssueChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issuesEvents">IssuesEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestChannel">MergeRequestChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteChannel">NoteChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteEvents">NoteEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyDefaultBranch">NotifyOnlyDefaultBranch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineChannel">PipelineChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineEvents">PipelineEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushChannel">PushChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushChannel">TagPushChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageChannel">WikiPageChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageEvents">WikiPageEvents</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `JobEvents`<sup>Required</sup> <a name="JobEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.jobEvents"></a>

```go
func JobEvents() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.branchesToBeNotifiedInput"></a>

```go
func BranchesToBeNotifiedInput() *string
```

- *Type:* *string

---

##### `ConfidentialIssueChannelInput`<sup>Optional</sup> <a name="ConfidentialIssueChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssueChannelInput"></a>

```go
func ConfidentialIssueChannelInput() *string
```

- *Type:* *string

---

##### `ConfidentialIssuesEventsInput`<sup>Optional</sup> <a name="ConfidentialIssuesEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssuesEventsInput"></a>

```go
func ConfidentialIssuesEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialNoteChannelInput`<sup>Optional</sup> <a name="ConfidentialNoteChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteChannelInput"></a>

```go
func ConfidentialNoteChannelInput() *string
```

- *Type:* *string

---

##### `ConfidentialNoteEventsInput`<sup>Optional</sup> <a name="ConfidentialNoteEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteEventsInput"></a>

```go
func ConfidentialNoteEventsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssueChannelInput`<sup>Optional</sup> <a name="IssueChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issueChannelInput"></a>

```go
func IssueChannelInput() *string
```

- *Type:* *string

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issuesEventsInput"></a>

```go
func IssuesEventsInput() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestChannelInput`<sup>Optional</sup> <a name="MergeRequestChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestChannelInput"></a>

```go
func MergeRequestChannelInput() *string
```

- *Type:* *string

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestsEventsInput"></a>

```go
func MergeRequestsEventsInput() interface{}
```

- *Type:* interface{}

---

##### `NoteChannelInput`<sup>Optional</sup> <a name="NoteChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteChannelInput"></a>

```go
func NoteChannelInput() *string
```

- *Type:* *string

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteEventsInput"></a>

```go
func NoteEventsInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyBrokenPipelinesInput"></a>

```go
func NotifyOnlyBrokenPipelinesInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnlyDefaultBranchInput`<sup>Optional</sup> <a name="NotifyOnlyDefaultBranchInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyDefaultBranchInput"></a>

```go
func NotifyOnlyDefaultBranchInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineChannelInput`<sup>Optional</sup> <a name="PipelineChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineChannelInput"></a>

```go
func PipelineChannelInput() *string
```

- *Type:* *string

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineEventsInput"></a>

```go
func PipelineEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PushChannelInput`<sup>Optional</sup> <a name="PushChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushChannelInput"></a>

```go
func PushChannelInput() *string
```

- *Type:* *string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushEventsInput"></a>

```go
func PushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `TagPushChannelInput`<sup>Optional</sup> <a name="TagPushChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushChannelInput"></a>

```go
func TagPushChannelInput() *string
```

- *Type:* *string

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushEventsInput"></a>

```go
func TagPushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `WikiPageChannelInput`<sup>Optional</sup> <a name="WikiPageChannelInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageChannelInput"></a>

```go
func WikiPageChannelInput() *string
```

- *Type:* *string

---

##### `WikiPageEventsInput`<sup>Optional</sup> <a name="WikiPageEventsInput" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageEventsInput"></a>

```go
func WikiPageEventsInput() interface{}
```

- *Type:* interface{}

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.branchesToBeNotified"></a>

```go
func BranchesToBeNotified() *string
```

- *Type:* *string

---

##### `ConfidentialIssueChannel`<sup>Required</sup> <a name="ConfidentialIssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssueChannel"></a>

```go
func ConfidentialIssueChannel() *string
```

- *Type:* *string

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialIssuesEvents"></a>

```go
func ConfidentialIssuesEvents() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialNoteChannel`<sup>Required</sup> <a name="ConfidentialNoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteChannel"></a>

```go
func ConfidentialNoteChannel() *string
```

- *Type:* *string

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.confidentialNoteEvents"></a>

```go
func ConfidentialNoteEvents() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssueChannel`<sup>Required</sup> <a name="IssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issueChannel"></a>

```go
func IssueChannel() *string
```

- *Type:* *string

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.issuesEvents"></a>

```go
func IssuesEvents() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestChannel`<sup>Required</sup> <a name="MergeRequestChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestChannel"></a>

```go
func MergeRequestChannel() *string
```

- *Type:* *string

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.mergeRequestsEvents"></a>

```go
func MergeRequestsEvents() interface{}
```

- *Type:* interface{}

---

##### `NoteChannel`<sup>Required</sup> <a name="NoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteChannel"></a>

```go
func NoteChannel() *string
```

- *Type:* *string

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.noteEvents"></a>

```go
func NoteEvents() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnlyBrokenPipelines`<sup>Required</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyBrokenPipelines"></a>

```go
func NotifyOnlyBrokenPipelines() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnlyDefaultBranch`<sup>Required</sup> <a name="NotifyOnlyDefaultBranch" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.notifyOnlyDefaultBranch"></a>

```go
func NotifyOnlyDefaultBranch() interface{}
```

- *Type:* interface{}

---

##### `PipelineChannel`<sup>Required</sup> <a name="PipelineChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineChannel"></a>

```go
func PipelineChannel() *string
```

- *Type:* *string

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pipelineEvents"></a>

```go
func PipelineEvents() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PushChannel`<sup>Required</sup> <a name="PushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushChannel"></a>

```go
func PushChannel() *string
```

- *Type:* *string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.pushEvents"></a>

```go
func PushEvents() interface{}
```

- *Type:* interface{}

---

##### `TagPushChannel`<sup>Required</sup> <a name="TagPushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushChannel"></a>

```go
func TagPushChannel() *string
```

- *Type:* *string

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tagPushEvents"></a>

```go
func TagPushEvents() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `WikiPageChannel`<sup>Required</sup> <a name="WikiPageChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageChannel"></a>

```go
func WikiPageChannel() *string
```

- *Type:* *string

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.wikiPageEvents"></a>

```go
func WikiPageEvents() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlack.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceSlackConfig <a name="ServiceSlackConfig" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/serviceslack"

&serviceslack.ServiceSlackConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Project: *string,
	Webhook: *string,
	BranchesToBeNotified: *string,
	ConfidentialIssueChannel: *string,
	ConfidentialIssuesEvents: interface{},
	ConfidentialNoteChannel: *string,
	ConfidentialNoteEvents: interface{},
	Id: *string,
	IssueChannel: *string,
	IssuesEvents: interface{},
	MergeRequestChannel: *string,
	MergeRequestsEvents: interface{},
	NoteChannel: *string,
	NoteEvents: interface{},
	NotifyOnlyBrokenPipelines: interface{},
	NotifyOnlyDefaultBranch: interface{},
	PipelineChannel: *string,
	PipelineEvents: interface{},
	PushChannel: *string,
	PushEvents: interface{},
	TagPushChannel: *string,
	TagPushEvents: interface{},
	Username: *string,
	WikiPageChannel: *string,
	WikiPageEvents: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.project">Project</a></code> | <code>*string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.webhook">Webhook</a></code> | <code>*string</code> | Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialIssueChannel">ConfidentialIssueChannel</a></code> | <code>*string</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>interface{}</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialNoteChannel">ConfidentialNoteChannel</a></code> | <code>*string</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>interface{}</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#id ServiceSlack#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.issueChannel">IssueChannel</a></code> | <code>*string</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.issuesEvents">IssuesEvents</a></code> | <code>interface{}</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.mergeRequestChannel">MergeRequestChannel</a></code> | <code>*string</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.noteChannel">NoteChannel</a></code> | <code>*string</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.noteEvents">NoteEvents</a></code> | <code>interface{}</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>interface{}</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.notifyOnlyDefaultBranch">NotifyOnlyDefaultBranch</a></code> | <code>interface{}</code> | This parameter has been replaced with `branches_to_be_notified`. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pipelineChannel">PipelineChannel</a></code> | <code>*string</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>interface{}</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pushChannel">PushChannel</a></code> | <code>*string</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.tagPushChannel">TagPushChannel</a></code> | <code>*string</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.username">Username</a></code> | <code>*string</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.wikiPageChannel">WikiPageChannel</a></code> | <code>*string</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.wikiPageEvents">WikiPageEvents</a></code> | <code>interface{}</code> | Enable notifications for wiki page events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#project ServiceSlack#project}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

Webhook URL (Example, https://hooks.slack.com/services/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#webhook ServiceSlack#webhook}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.branchesToBeNotified"></a>

```go
BranchesToBeNotified *string
```

- *Type:* *string

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#branches_to_be_notified ServiceSlack#branches_to_be_notified}

---

##### `ConfidentialIssueChannel`<sup>Optional</sup> <a name="ConfidentialIssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialIssueChannel"></a>

```go
ConfidentialIssueChannel *string
```

- *Type:* *string

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#confidential_issue_channel ServiceSlack#confidential_issue_channel}

---

##### `ConfidentialIssuesEvents`<sup>Optional</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialIssuesEvents"></a>

```go
ConfidentialIssuesEvents interface{}
```

- *Type:* interface{}

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#confidential_issues_events ServiceSlack#confidential_issues_events}

---

##### `ConfidentialNoteChannel`<sup>Optional</sup> <a name="ConfidentialNoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialNoteChannel"></a>

```go
ConfidentialNoteChannel *string
```

- *Type:* *string

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#confidential_note_channel ServiceSlack#confidential_note_channel}

---

##### `ConfidentialNoteEvents`<sup>Optional</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.confidentialNoteEvents"></a>

```go
ConfidentialNoteEvents interface{}
```

- *Type:* interface{}

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#confidential_note_events ServiceSlack#confidential_note_events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#id ServiceSlack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssueChannel`<sup>Optional</sup> <a name="IssueChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.issueChannel"></a>

```go
IssueChannel *string
```

- *Type:* *string

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#issue_channel ServiceSlack#issue_channel}

---

##### `IssuesEvents`<sup>Optional</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.issuesEvents"></a>

```go
IssuesEvents interface{}
```

- *Type:* interface{}

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#issues_events ServiceSlack#issues_events}

---

##### `MergeRequestChannel`<sup>Optional</sup> <a name="MergeRequestChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.mergeRequestChannel"></a>

```go
MergeRequestChannel *string
```

- *Type:* *string

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#merge_request_channel ServiceSlack#merge_request_channel}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.mergeRequestsEvents"></a>

```go
MergeRequestsEvents interface{}
```

- *Type:* interface{}

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#merge_requests_events ServiceSlack#merge_requests_events}

---

##### `NoteChannel`<sup>Optional</sup> <a name="NoteChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.noteChannel"></a>

```go
NoteChannel *string
```

- *Type:* *string

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#note_channel ServiceSlack#note_channel}

---

##### `NoteEvents`<sup>Optional</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.noteEvents"></a>

```go
NoteEvents interface{}
```

- *Type:* interface{}

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#note_events ServiceSlack#note_events}

---

##### `NotifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.notifyOnlyBrokenPipelines"></a>

```go
NotifyOnlyBrokenPipelines interface{}
```

- *Type:* interface{}

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#notify_only_broken_pipelines ServiceSlack#notify_only_broken_pipelines}

---

##### `NotifyOnlyDefaultBranch`<sup>Optional</sup> <a name="NotifyOnlyDefaultBranch" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.notifyOnlyDefaultBranch"></a>

```go
NotifyOnlyDefaultBranch interface{}
```

- *Type:* interface{}

This parameter has been replaced with `branches_to_be_notified`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#notify_only_default_branch ServiceSlack#notify_only_default_branch}

---

##### `PipelineChannel`<sup>Optional</sup> <a name="PipelineChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pipelineChannel"></a>

```go
PipelineChannel *string
```

- *Type:* *string

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#pipeline_channel ServiceSlack#pipeline_channel}

---

##### `PipelineEvents`<sup>Optional</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pipelineEvents"></a>

```go
PipelineEvents interface{}
```

- *Type:* interface{}

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#pipeline_events ServiceSlack#pipeline_events}

---

##### `PushChannel`<sup>Optional</sup> <a name="PushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pushChannel"></a>

```go
PushChannel *string
```

- *Type:* *string

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#push_channel ServiceSlack#push_channel}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.pushEvents"></a>

```go
PushEvents interface{}
```

- *Type:* interface{}

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#push_events ServiceSlack#push_events}

---

##### `TagPushChannel`<sup>Optional</sup> <a name="TagPushChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.tagPushChannel"></a>

```go
TagPushChannel *string
```

- *Type:* *string

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#tag_push_channel ServiceSlack#tag_push_channel}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.tagPushEvents"></a>

```go
TagPushEvents interface{}
```

- *Type:* interface{}

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#tag_push_events ServiceSlack#tag_push_events}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#username ServiceSlack#username}

---

##### `WikiPageChannel`<sup>Optional</sup> <a name="WikiPageChannel" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.wikiPageChannel"></a>

```go
WikiPageChannel *string
```

- *Type:* *string

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#wiki_page_channel ServiceSlack#wiki_page_channel}

---

##### `WikiPageEvents`<sup>Optional</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.serviceSlack.ServiceSlackConfig.property.wikiPageEvents"></a>

```go
WikiPageEvents interface{}
```

- *Type:* interface{}

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.2.0/docs/resources/service_slack#wiki_page_events ServiceSlack#wiki_page_events}

---



