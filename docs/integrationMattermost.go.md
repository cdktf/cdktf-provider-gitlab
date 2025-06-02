# `integrationMattermost` Submodule <a name="`integrationMattermost` Submodule" id="@cdktf/provider-gitlab.integrationMattermost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationMattermost <a name="IntegrationMattermost" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost gitlab_integration_mattermost}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/integrationmattermost"

integrationmattermost.NewIntegrationMattermost(scope Construct, id *string, config IntegrationMattermostConfig) IntegrationMattermost
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig">IntegrationMattermostConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig">IntegrationMattermostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssueChannel">ResetConfidentialIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssuesEvents">ResetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteChannel">ResetConfidentialNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteEvents">ResetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssueChannel">ResetIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssuesEvents">ResetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestChannel">ResetMergeRequestChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteChannel">ResetNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteEvents">ResetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNotifyOnlyBrokenPipelines">ResetNotifyOnlyBrokenPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineChannel">ResetPipelineChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineEvents">ResetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushChannel">ResetPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushChannel">ResetTagPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageChannel">ResetWikiPageChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageEvents">ResetWikiPageEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetBranchesToBeNotified"></a>

```go
func ResetBranchesToBeNotified()
```

##### `ResetConfidentialIssueChannel` <a name="ResetConfidentialIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssueChannel"></a>

```go
func ResetConfidentialIssueChannel()
```

##### `ResetConfidentialIssuesEvents` <a name="ResetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssuesEvents"></a>

```go
func ResetConfidentialIssuesEvents()
```

##### `ResetConfidentialNoteChannel` <a name="ResetConfidentialNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteChannel"></a>

```go
func ResetConfidentialNoteChannel()
```

##### `ResetConfidentialNoteEvents` <a name="ResetConfidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteEvents"></a>

```go
func ResetConfidentialNoteEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetId"></a>

```go
func ResetId()
```

##### `ResetIssueChannel` <a name="ResetIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssueChannel"></a>

```go
func ResetIssueChannel()
```

##### `ResetIssuesEvents` <a name="ResetIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssuesEvents"></a>

```go
func ResetIssuesEvents()
```

##### `ResetMergeRequestChannel` <a name="ResetMergeRequestChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestChannel"></a>

```go
func ResetMergeRequestChannel()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestsEvents"></a>

```go
func ResetMergeRequestsEvents()
```

##### `ResetNoteChannel` <a name="ResetNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteChannel"></a>

```go
func ResetNoteChannel()
```

##### `ResetNoteEvents` <a name="ResetNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteEvents"></a>

```go
func ResetNoteEvents()
```

##### `ResetNotifyOnlyBrokenPipelines` <a name="ResetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNotifyOnlyBrokenPipelines"></a>

```go
func ResetNotifyOnlyBrokenPipelines()
```

##### `ResetPipelineChannel` <a name="ResetPipelineChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineChannel"></a>

```go
func ResetPipelineChannel()
```

##### `ResetPipelineEvents` <a name="ResetPipelineEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineEvents"></a>

```go
func ResetPipelineEvents()
```

##### `ResetPushChannel` <a name="ResetPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushChannel"></a>

```go
func ResetPushChannel()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushEvents"></a>

```go
func ResetPushEvents()
```

##### `ResetTagPushChannel` <a name="ResetTagPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushChannel"></a>

```go
func ResetTagPushChannel()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushEvents"></a>

```go
func ResetTagPushEvents()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetWikiPageChannel` <a name="ResetWikiPageChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageChannel"></a>

```go
func ResetWikiPageChannel()
```

##### `ResetWikiPageEvents` <a name="ResetWikiPageEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageEvents"></a>

```go
func ResetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationMattermost resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/integrationmattermost"

integrationmattermost.IntegrationMattermost_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/integrationmattermost"

integrationmattermost.IntegrationMattermost_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/integrationmattermost"

integrationmattermost.IntegrationMattermost_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/integrationmattermost"

integrationmattermost.IntegrationMattermost_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IntegrationMattermost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationMattermost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationMattermost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationMattermost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannelInput">ConfidentialIssueChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEventsInput">ConfidentialIssuesEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannelInput">ConfidentialNoteChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEventsInput">ConfidentialNoteEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannelInput">IssueChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannelInput">MergeRequestChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannelInput">NoteChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEventsInput">NoteEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelinesInput">NotifyOnlyBrokenPipelinesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannelInput">PipelineChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannelInput">PushChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEventsInput">PushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannelInput">TagPushChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhookInput">WebhookInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannelInput">WikiPageChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEventsInput">WikiPageEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannel">ConfidentialIssueChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannel">ConfidentialNoteChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannel">IssueChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEvents">IssuesEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannel">MergeRequestChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannel">NoteChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEvents">NoteEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannel">PipelineChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEvents">PipelineEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannel">PushChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannel">TagPushChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhook">Webhook</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannel">WikiPageChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEvents">WikiPageEvents</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotifiedInput"></a>

```go
func BranchesToBeNotifiedInput() *string
```

- *Type:* *string

---

##### `ConfidentialIssueChannelInput`<sup>Optional</sup> <a name="ConfidentialIssueChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannelInput"></a>

```go
func ConfidentialIssueChannelInput() *string
```

- *Type:* *string

---

##### `ConfidentialIssuesEventsInput`<sup>Optional</sup> <a name="ConfidentialIssuesEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEventsInput"></a>

```go
func ConfidentialIssuesEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialNoteChannelInput`<sup>Optional</sup> <a name="ConfidentialNoteChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannelInput"></a>

```go
func ConfidentialNoteChannelInput() *string
```

- *Type:* *string

---

##### `ConfidentialNoteEventsInput`<sup>Optional</sup> <a name="ConfidentialNoteEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEventsInput"></a>

```go
func ConfidentialNoteEventsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssueChannelInput`<sup>Optional</sup> <a name="IssueChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannelInput"></a>

```go
func IssueChannelInput() *string
```

- *Type:* *string

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEventsInput"></a>

```go
func IssuesEventsInput() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestChannelInput`<sup>Optional</sup> <a name="MergeRequestChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannelInput"></a>

```go
func MergeRequestChannelInput() *string
```

- *Type:* *string

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEventsInput"></a>

```go
func MergeRequestsEventsInput() interface{}
```

- *Type:* interface{}

---

##### `NoteChannelInput`<sup>Optional</sup> <a name="NoteChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannelInput"></a>

```go
func NoteChannelInput() *string
```

- *Type:* *string

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEventsInput"></a>

```go
func NoteEventsInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelinesInput"></a>

```go
func NotifyOnlyBrokenPipelinesInput() interface{}
```

- *Type:* interface{}

---

##### `PipelineChannelInput`<sup>Optional</sup> <a name="PipelineChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannelInput"></a>

```go
func PipelineChannelInput() *string
```

- *Type:* *string

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEventsInput"></a>

```go
func PipelineEventsInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PushChannelInput`<sup>Optional</sup> <a name="PushChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannelInput"></a>

```go
func PushChannelInput() *string
```

- *Type:* *string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEventsInput"></a>

```go
func PushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `TagPushChannelInput`<sup>Optional</sup> <a name="TagPushChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannelInput"></a>

```go
func TagPushChannelInput() *string
```

- *Type:* *string

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEventsInput"></a>

```go
func TagPushEventsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhookInput"></a>

```go
func WebhookInput() *string
```

- *Type:* *string

---

##### `WikiPageChannelInput`<sup>Optional</sup> <a name="WikiPageChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannelInput"></a>

```go
func WikiPageChannelInput() *string
```

- *Type:* *string

---

##### `WikiPageEventsInput`<sup>Optional</sup> <a name="WikiPageEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEventsInput"></a>

```go
func WikiPageEventsInput() interface{}
```

- *Type:* interface{}

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotified"></a>

```go
func BranchesToBeNotified() *string
```

- *Type:* *string

---

##### `ConfidentialIssueChannel`<sup>Required</sup> <a name="ConfidentialIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannel"></a>

```go
func ConfidentialIssueChannel() *string
```

- *Type:* *string

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEvents"></a>

```go
func ConfidentialIssuesEvents() interface{}
```

- *Type:* interface{}

---

##### `ConfidentialNoteChannel`<sup>Required</sup> <a name="ConfidentialNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannel"></a>

```go
func ConfidentialNoteChannel() *string
```

- *Type:* *string

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEvents"></a>

```go
func ConfidentialNoteEvents() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssueChannel`<sup>Required</sup> <a name="IssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannel"></a>

```go
func IssueChannel() *string
```

- *Type:* *string

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEvents"></a>

```go
func IssuesEvents() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestChannel`<sup>Required</sup> <a name="MergeRequestChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannel"></a>

```go
func MergeRequestChannel() *string
```

- *Type:* *string

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEvents"></a>

```go
func MergeRequestsEvents() interface{}
```

- *Type:* interface{}

---

##### `NoteChannel`<sup>Required</sup> <a name="NoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannel"></a>

```go
func NoteChannel() *string
```

- *Type:* *string

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEvents"></a>

```go
func NoteEvents() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnlyBrokenPipelines`<sup>Required</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelines"></a>

```go
func NotifyOnlyBrokenPipelines() interface{}
```

- *Type:* interface{}

---

##### `PipelineChannel`<sup>Required</sup> <a name="PipelineChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannel"></a>

```go
func PipelineChannel() *string
```

- *Type:* *string

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEvents"></a>

```go
func PipelineEvents() interface{}
```

- *Type:* interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PushChannel`<sup>Required</sup> <a name="PushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannel"></a>

```go
func PushChannel() *string
```

- *Type:* *string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEvents"></a>

```go
func PushEvents() interface{}
```

- *Type:* interface{}

---

##### `TagPushChannel`<sup>Required</sup> <a name="TagPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannel"></a>

```go
func TagPushChannel() *string
```

- *Type:* *string

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEvents"></a>

```go
func TagPushEvents() interface{}
```

- *Type:* interface{}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhook"></a>

```go
func Webhook() *string
```

- *Type:* *string

---

##### `WikiPageChannel`<sup>Required</sup> <a name="WikiPageChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannel"></a>

```go
func WikiPageChannel() *string
```

- *Type:* *string

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEvents"></a>

```go
func WikiPageEvents() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationMattermostConfig <a name="IntegrationMattermostConfig" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v15/integrationmattermost"

&integrationmattermost.IntegrationMattermostConfig {
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
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.project">Project</a></code> | <code>*string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.webhook">Webhook</a></code> | <code>*string</code> | Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>*string</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssueChannel">ConfidentialIssueChannel</a></code> | <code>*string</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>interface{}</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteChannel">ConfidentialNoteChannel</a></code> | <code>*string</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>interface{}</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issueChannel">IssueChannel</a></code> | <code>*string</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issuesEvents">IssuesEvents</a></code> | <code>interface{}</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestChannel">MergeRequestChannel</a></code> | <code>*string</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>interface{}</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteChannel">NoteChannel</a></code> | <code>*string</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteEvents">NoteEvents</a></code> | <code>interface{}</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>interface{}</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineChannel">PipelineChannel</a></code> | <code>*string</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>interface{}</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushChannel">PushChannel</a></code> | <code>*string</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushEvents">PushEvents</a></code> | <code>interface{}</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushChannel">TagPushChannel</a></code> | <code>*string</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>interface{}</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.username">Username</a></code> | <code>*string</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageChannel">WikiPageChannel</a></code> | <code>*string</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageEvents">WikiPageEvents</a></code> | <code>interface{}</code> | Enable notifications for wiki page events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#project IntegrationMattermost#project}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.webhook"></a>

```go
Webhook *string
```

- *Type:* *string

Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#webhook IntegrationMattermost#webhook}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.branchesToBeNotified"></a>

```go
BranchesToBeNotified *string
```

- *Type:* *string

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#branches_to_be_notified IntegrationMattermost#branches_to_be_notified}

---

##### `ConfidentialIssueChannel`<sup>Optional</sup> <a name="ConfidentialIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssueChannel"></a>

```go
ConfidentialIssueChannel *string
```

- *Type:* *string

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_issue_channel IntegrationMattermost#confidential_issue_channel}

---

##### `ConfidentialIssuesEvents`<sup>Optional</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssuesEvents"></a>

```go
ConfidentialIssuesEvents interface{}
```

- *Type:* interface{}

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_issues_events IntegrationMattermost#confidential_issues_events}

---

##### `ConfidentialNoteChannel`<sup>Optional</sup> <a name="ConfidentialNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteChannel"></a>

```go
ConfidentialNoteChannel *string
```

- *Type:* *string

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_note_channel IntegrationMattermost#confidential_note_channel}

---

##### `ConfidentialNoteEvents`<sup>Optional</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteEvents"></a>

```go
ConfidentialNoteEvents interface{}
```

- *Type:* interface{}

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#confidential_note_events IntegrationMattermost#confidential_note_events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssueChannel`<sup>Optional</sup> <a name="IssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issueChannel"></a>

```go
IssueChannel *string
```

- *Type:* *string

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#issue_channel IntegrationMattermost#issue_channel}

---

##### `IssuesEvents`<sup>Optional</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issuesEvents"></a>

```go
IssuesEvents interface{}
```

- *Type:* interface{}

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#issues_events IntegrationMattermost#issues_events}

---

##### `MergeRequestChannel`<sup>Optional</sup> <a name="MergeRequestChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestChannel"></a>

```go
MergeRequestChannel *string
```

- *Type:* *string

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#merge_request_channel IntegrationMattermost#merge_request_channel}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestsEvents"></a>

```go
MergeRequestsEvents interface{}
```

- *Type:* interface{}

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#merge_requests_events IntegrationMattermost#merge_requests_events}

---

##### `NoteChannel`<sup>Optional</sup> <a name="NoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteChannel"></a>

```go
NoteChannel *string
```

- *Type:* *string

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#note_channel IntegrationMattermost#note_channel}

---

##### `NoteEvents`<sup>Optional</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteEvents"></a>

```go
NoteEvents interface{}
```

- *Type:* interface{}

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#note_events IntegrationMattermost#note_events}

---

##### `NotifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.notifyOnlyBrokenPipelines"></a>

```go
NotifyOnlyBrokenPipelines interface{}
```

- *Type:* interface{}

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#notify_only_broken_pipelines IntegrationMattermost#notify_only_broken_pipelines}

---

##### `PipelineChannel`<sup>Optional</sup> <a name="PipelineChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineChannel"></a>

```go
PipelineChannel *string
```

- *Type:* *string

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#pipeline_channel IntegrationMattermost#pipeline_channel}

---

##### `PipelineEvents`<sup>Optional</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineEvents"></a>

```go
PipelineEvents interface{}
```

- *Type:* interface{}

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#pipeline_events IntegrationMattermost#pipeline_events}

---

##### `PushChannel`<sup>Optional</sup> <a name="PushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushChannel"></a>

```go
PushChannel *string
```

- *Type:* *string

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#push_channel IntegrationMattermost#push_channel}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushEvents"></a>

```go
PushEvents interface{}
```

- *Type:* interface{}

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#push_events IntegrationMattermost#push_events}

---

##### `TagPushChannel`<sup>Optional</sup> <a name="TagPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushChannel"></a>

```go
TagPushChannel *string
```

- *Type:* *string

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#tag_push_channel IntegrationMattermost#tag_push_channel}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushEvents"></a>

```go
TagPushEvents interface{}
```

- *Type:* interface{}

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#tag_push_events IntegrationMattermost#tag_push_events}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#username IntegrationMattermost#username}

---

##### `WikiPageChannel`<sup>Optional</sup> <a name="WikiPageChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageChannel"></a>

```go
WikiPageChannel *string
```

- *Type:* *string

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#wiki_page_channel IntegrationMattermost#wiki_page_channel}

---

##### `WikiPageEvents`<sup>Optional</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageEvents"></a>

```go
WikiPageEvents interface{}
```

- *Type:* interface{}

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.11.0/docs/resources/integration_mattermost#wiki_page_events IntegrationMattermost#wiki_page_events}

---



